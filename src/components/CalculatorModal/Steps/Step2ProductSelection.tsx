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

interface Step2ProductSelectionProps {
  stitchCount: number;
  onBack: () => void;
  onFinish: () => void;
}

const SHIPPING_COSTS = {
  US: 4.79,
  INTL: 24.79,
};

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const productCost = selectedProduct
    ? parseFloat(selectedProduct.price_with_mod)
    : 0;
  const stitchCost = parseFloat(
    (stitchCount * STITCH_COST_PER_UNIT).toFixed(2)
  );
  const shippingCost = isUS ? SHIPPING_COSTS.US : SHIPPING_COSTS.INTL;
  const total = (productCost + stitchCost + shippingCost).toFixed(2);

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
        {/* Design Upload Placeholder */}
        <Box
          sx={{
            width: { xs: "100%", sm: 180 },
            height: 180,
            border: "2px dashed #ccc",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            fontWeight: 500,
            mx: { xs: "auto", sm: 0 },
          }}
        >
          Design
        </Box>

        {/* Product Dropdown + Address */}
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

          <Box>
            <Typography fontWeight={600} mb={1}>
              Recipient Address
            </Typography>

            <Stack spacing={0.5}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isUS}
                    onChange={() => setIsUS(true)}
                    sx={{ color: "#000" }}
                  />
                }
                label="United States"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!isUS}
                    onChange={() => setIsUS(false)}
                    sx={{ color: "#000" }}
                  />
                }
                label="Other Countries"
              />
            </Stack>
          </Box>
        </Stack>
      </Stack>

      {/* <Divider sx={{ mb: 2 }} /> */}

      {/* Receipt Section */}
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
        {/* Total */}
        <Typography
          fontWeight={700}
          fontSize={{ xs: "1.25rem", sm: "1.25rem" }}
          sx={{ mb: { xs: 0, sm: 0 } }}
        >
          Total: ${total}
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={2}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            onClick={onBack}
            color="inherit"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={!selectedProduct}
            onClick={onFinish}
            sx={{
              backgroundColor: "#025A4C",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              px: 4,
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                backgroundColor: "#014c3f",
              },
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
