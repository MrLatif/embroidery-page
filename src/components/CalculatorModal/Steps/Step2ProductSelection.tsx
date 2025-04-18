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

  // Fetch products from API
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
      <Typography fontWeight={700} fontSize="1.5rem" mb={3}>
        Select a product
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mb={4}>
        {/* Placeholder for design image */}
        <Box
          sx={{
            width: 180,
            height: 180,
            border: "2px dashed #ccc",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          Design
        </Box>

        {/* Product select & address */}
        <Stack spacing={2} flex={1}>
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

          <Typography fontWeight={600}>Recipient Address</Typography>
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
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* Receipt Section */}
      <Box mb={3}>
        <Typography fontWeight={600} mb={1}>
          Here are the results:
        </Typography>

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

        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Stack spacing={1}>
            <Typography>
              <strong>Product Cost:</strong> ${productCost.toFixed(2)}
            </Typography>
            <Typography>
              <strong>Stitch Cost:</strong> ${stitchCost.toFixed(2)} (
              {stitchCount.toLocaleString()} × {STITCH_COST_PER_UNIT})
            </Typography>

            <Typography>
              <strong>Shipping:</strong> ${shippingCost.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Typography fontWeight={700} fontSize="1.25rem" mb={3}>
        Total: ${total}
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Button onClick={onBack} color="inherit">
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
            px: 4,
            "&:hover": {
              backgroundColor: "#014c3f",
            },
          }}
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
};

export default Step2ProductSelection;
