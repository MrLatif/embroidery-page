import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  Divider,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Product {
  title: string;
  product_id: number;
  price_with_mod: string;
}

interface Variant {
  option1_id: number;
  option2_id: number;
  price: string;
  name: string;
}

interface Option {
  name: string;
  option1_id: number;
}

interface Step2ProductSelectionProps {
  stitchCount: number;
  onBack: () => void;
  onFinish: () => void;
}

const STITCH_COST_PER_UNIT = 0.00075;

const Step2ProductSelection = ({
  stitchCount,
  onBack,
  onFinish,
}: Step2ProductSelectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUS, setIsUS] = useState(true);
  const [loading, setLoading] = useState(true);
  const [sizes, setSizes] = useState<Option[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [selectedSize, setSelectedSize] = useState<Option | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isHeavy, setIsHeavy] = useState(false);

  const SHIPPING_COSTS = {
    US: isHeavy ? 6.4 : 4.79,
    INTL: isHeavy ? 26.4 : 24.79,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const productCost = selectedProduct
  //   ? parseFloat(selectedProduct.price_with_mod)
  //   : 0;

  const stitchCost = parseFloat(
    (stitchCount * STITCH_COST_PER_UNIT).toFixed(2)
  );

  const shippingCost = selectedProduct
    ? isUS
      ? SHIPPING_COSTS.US
      : SHIPPING_COSTS.INTL
    : 0;

  const selectedVariantPrice = variants.find(
    (v) => v.option1_id === selectedSize?.option1_id && v.name === selectedColor
  )?.price;

  const productCost = selectedVariantPrice
    ? parseFloat(selectedVariantPrice)
    : 0;

  const total = (productCost + stitchCost + shippingCost).toFixed(2);

  const productImageUrl = selectedProduct
    ? `https://printnest-products.s3.eu-central-1.amazonaws.com/t_${selectedProduct.product_id}_0.png`
    : null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://printnest.com/api/products");
        const data = await res.json();
        const embroideryProducts = Object.values(data)
          .flat()
          .filter((p: any) => p.tags?.includes("Embroidery"));
        setProducts(embroideryProducts as Product[]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!selectedProduct) return;

      const [sizesRes, variantsRes, productInfoRes] = await Promise.all([
        fetch(
          `https://printnest.com/api/option1/${selectedProduct.product_id}`
        ),
        fetch(
          `https://printnest.com/api/variants/${selectedProduct.product_id}`
        ),
        fetch(
          `https://printnest.com/api/product/${selectedProduct.product_id}`
        ),
      ]);

      const sizesData = await sizesRes.json();
      const variantsData = await variantsRes.json();
      const productInfoData = await productInfoRes.json();

      const uniqueColors = Array.from(
        new Set(variantsData.map((v: Variant) => v.name))
      );

      setSizes(sizesData);
      setVariants(variantsData);
      setColors(uniqueColors as string[]);
      setIsHeavy(productInfoData?.[0]?.is_heavy || false);
      setSelectedSize(null);
      setSelectedColor(null);
    };

    fetchProductDetails();
  }, [selectedProduct]);

  return (
    <Box>
      <Typography
        fontWeight={700}
        fontSize={{ xs: "1.25rem", sm: "1.5rem" }}
        mb={3}
      >
        Select a product
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        mb={4}
        alignItems="flex-start"
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 180 },
            height: 180,
            border: "2px dashed #ccc",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            mx: { xs: "auto", sm: 0 },
            bgcolor: selectedProduct ? "#fff" : "#f9f9f9",
          }}
        >
          {productImageUrl ? (
            <Box
              component="img"
              src={productImageUrl}
              alt={selectedProduct?.title}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.3)" },
              }}
            />
          ) : (
            <Typography color="text.secondary" fontWeight={500}>
              Design
            </Typography>
          )}
        </Box>

        <Stack spacing={2} flex={1} width="100%">
          <Autocomplete
            options={products}
            getOptionLabel={(option) => option.title}
            loading={loading}
            onChange={(_, val) => setSelectedProduct(val)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Products"
                size="small"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress size={16} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />

          {selectedProduct && (
            <>
              <Autocomplete
                options={sizes}
                getOptionLabel={(option) => option.name}
                value={selectedSize}
                onChange={(_, val) => setSelectedSize(val)}
                renderInput={(params) => (
                  <TextField {...params} label="Size" size="small" fullWidth />
                )}
              />

              <Autocomplete
                options={colors}
                getOptionLabel={(option) => option}
                value={selectedColor}
                onChange={(_, val) => setSelectedColor(val)}
                renderInput={(params) => (
                  <TextField {...params} label="Color" size="small" fullWidth />
                )}
              />
            </>
          )}

          <Box>
            <Typography fontWeight={600} mb={1}>
              Recipient Address
            </Typography>
            <Stack spacing={0.5}>
              <FormControlLabel
                control={
                  <Checkbox checked={isUS} onChange={() => setIsUS(true)} />
                }
                label="United States"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={!isUS} onChange={() => setIsUS(false)} />
                }
                label="Other Countries"
              />
            </Stack>
          </Box>
        </Stack>
      </Stack>

      <Box mb={3}>
        <Typography fontWeight={600} mb={1}>
          Here are the results:
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Typography>
              <strong>Product:</strong> {selectedProduct?.title || "—"}
            </Typography>
            <Typography>
              <strong>Stitch Count:</strong> {stitchCount.toLocaleString()}
            </Typography>
            <Typography>
              <strong>Shipping:</strong>{" "}
              {isUS ? "United States" : "Other Countries"}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography>
              <strong>Product Cost:</strong> ${productCost.toFixed(2)}
            </Typography>
            <Typography>
              <strong>Stitch Cost:</strong> ${stitchCost.toFixed(2)}{" "}
              <Typography
                component="span"
                fontSize="0.875rem"
                color="text.secondary"
              >
                ({stitchCount.toLocaleString()} × {STITCH_COST_PER_UNIT})
              </Typography>
            </Typography>
            <Typography>
              <strong>Shipping:</strong> ${shippingCost.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        spacing={{ xs: 2, sm: 0 }}
        mt={3}
        flexWrap="wrap"
      >
        <Typography
          fontWeight={700}
          fontSize={{ xs: "1.25rem", sm: "1.25rem" }}
        >
          Total: ${total}
        </Typography>

        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={2}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <Button onClick={onBack} color="inherit" sx={{ fontWeight: 600 }}>
            Back
          </Button>
          <Button
            variant="contained"
            disabled={!selectedProduct || !selectedSize || !selectedColor}
            onClick={onFinish}
            sx={{
              backgroundColor: "#025A4C",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#014c3f" },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Step2ProductSelection;
