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
    <Box sx={{ backgroundColor: "#fff", py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="left"
          mb={8}
          sx={{
            color: "#000",
            fontSize: { xs: "2rem", md: "2.625rem" },
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
                    height: 30,
                    backgroundColor: "#025A4C",
                    borderRadius: 1,
                    mt: 0.5,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography
                    fontWeight={700}
                    sx={{
                      color: "#000",
                      fontSize: { xs: "1.25rem", md: "1.5rem" }, // mobile & desktop sizes
                      mb: 0.5,
                    }}
                  >
                    {b.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "1rem", md: "1.125rem" }, // responsive sizes
                      lineHeight: 1.6,
                    }}
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
            borderRadius: { xs: 4, sm: "9999px" }, // <- updated
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
              fontWeight={700}
              sx={{
                mb: 0.5,
                color: "#000",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Stitch Price Calculator!
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Try it now and see the full cost of your design.
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#025A4C",
              px: 6,
              py: 1.75,
              borderRadius: "9999px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1.125rem",
              minWidth: 160,
              height: 52,
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
