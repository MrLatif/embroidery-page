import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

import capsImg from "../assets/images/webp/Custom Embroidered Caps.webp";
import bagsImg from "../assets/images/webp/Custom Embroidered Tote Bags.webp";
import tshirtsImg from "../assets/images/webp/Premium-Embroidered-TShirts.webp";
import sweatshirtsImg from "../assets/images/webp/Premium-Embroidered-Sweatshirts.webp";
import hoodiesImg from "../assets/images/webp/Embroidered Unisex Youth Hoodies.webp";

const products = [
  {
    title: "Custom Embroidered Caps",
    subtitle: "High-Quality & Long-Lasting Design",
    description:
      "Upgrade your store with premium custom embroidered caps designed for durability and style. Choose from snapback, trucker, and twill hats, and personalize them with high-precision embroidery.",
    image: capsImg,
    reverse: true,
  },
  {
    title: "Custom Embroidered Tote Bags",
    subtitle: "Durable & Eco-Friendly",
    description:
      "Boost your store with custom embroidered tote bags made from durable 100% cotton canvas. Featuring sturdy handles and premium stitching, they’re perfect for daily use.",
    image: bagsImg,
    reverse: false,
  },
  {
    title: "Premium Embroidered T-Shirts",
    subtitle: "Soft, Durable & Stylish",
    description:
      "Enhance your store with premium embroidered t-shirts made from 100% ring-spun cotton. Soft, durable, and eco-friendly, they’re perfect for casual wear, work uniforms, or branding.",
    image: tshirtsImg,
    reverse: true,
  },
  {
    title: "Premium Embroidered Sweatshirts",
    subtitle: "Cozy, Stylish & Durable",
    description:
      "Explore premium embroidered sweatshirts made from soft cotton-poly blends. Designed for comfort and durability, they feature relaxed fits, ribbed cuffs, and eco-friendly dyes.",
    image: sweatshirtsImg,
    reverse: false,
  },
  {
    title: "Embroidered Unisex & Youth Hoodies",
    subtitle: "Comfort and Style Combined",
    description:
      "Experience premium embroidered Gildan hoodies, made from a soft cotton-poly blend for comfort and durability. Featuring a double-lined hood, pouch pocket, and eco-friendly materials.",
    image: hoodiesImg,
    reverse: true,
  },
];

const ProductShowcase = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        {/* Section title */}
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={10}
          sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, color: "#000" }}
        >
          Explore Printnest’s unique custom embroidery products.
        </Typography>

        {/* Product List */}
        <Stack spacing={12}>
          {products.map((p, i) => (
            <Stack
              key={i}
              direction={{
                xs: "column",
                md: p.reverse ? "row-reverse" : "row",
              }}
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                component="img"
                src={p.image}
                alt={p.title}
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  borderRadius: 3,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <Box flex={1}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mb: 1.5, fontSize: "1.4rem", color: "#000" }}
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  sx={{
                    mb: 2,
                    fontSize: "1rem",
                    color: theme.palette.primary.main,
                  }}
                >
                  {p.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  {p.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#025A4C",
                    borderRadius: "9999px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#014c3f" },
                  }}
                >
                  View Products
                </Button>
              </Box>
            </Stack>
          ))}
        </Stack>

        {/* Looking for more section */}
        <Box
          mt={12}
          sx={{
            backgroundColor: "#F5FAF9",
            borderRadius: "9999px",
            px: { xs: 4, md: 6 },
            py: { xs: 3, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 0.5, color: "#000", fontSize: "1.1rem" }}
            >
              Looking for more?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Explore our wide range of products and find the perfect fit for
              your needs!
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#025A4C",
              px: 5,
              py: 1.5,
              borderRadius: "9999px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#014c3f" },
            }}
          >
            Explore All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
