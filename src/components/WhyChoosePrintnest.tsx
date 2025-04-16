import { Box, Typography, Container, Grid, Stack, Button } from "@mui/material";
import bannerImage from "../assets/images/webp/banner1.webp";

const benefits = [
  {
    title: "High-Quality Printing",
    description:
      "We use premium materials and advanced embroidery techniques to ensure long-lasting, detailed designs.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Get competitive rates without compromising on quality, making it easier to maximize your profit.",
  },
  {
    title: "Marketplace Integration",
    description:
      "Effortlessly connect your store to Etsy, Amazon, Shopify, TikTok, and Walmart for automated order fulfillment.",
  },
  {
    title: "Fast Shipping",
    description:
      "With our efficient production and logistics, your embroidered products reach customers quickly and reliably.",
  },
];

const WhyChoosePrintnest = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={8}
          sx={{
            color: "#000",
            fontSize: { xs: "1.9rem", md: "2.5rem" },
            lineHeight: 1.3,
          }}
        >
          Why Choose Printnest?
        </Typography>

        {/* Benefits Grid */}
        <Grid container spacing={6}>
          {benefits.map((b, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  sx={{
                    width: 4,
                    height: 24,
                    backgroundColor: "#025A4C",
                    borderRadius: 1,
                    mt: 0.5,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ color: "#000", fontSize: "1.05rem", mb: 0.5 }}
                  >
                    {b.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.95rem" }}
                  >
                    {b.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Infinite Design Possibilities Banner */}
        <Box
          sx={{
            mt: 10,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Box
            component="img"
            src={bannerImage}
            alt="Infinite Design Possibilities"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 3,
            }}
          />
        </Box>

        {/* Stitch Price Calculator Pill */}
        <Box
          sx={{
            mt: 6,
            backgroundColor: "#F5FAF9",
            borderRadius: "9999px",
            px: { xs: 4, md: 6 },
            py: { xs: 3, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 0.5, color: "#000", fontSize: "1.1rem" }}
            >
              Stitch Price Calculator!
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.95rem" }}
            >
              Try it now and see the full cost of your design.
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
              "&:hover": {
                backgroundColor: "#014c3f",
              },
            }}
          >
            Calculate
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChoosePrintnest;
