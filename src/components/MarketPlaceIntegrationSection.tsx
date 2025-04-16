import { Box, Typography, Container, Stack, Button } from "@mui/material";
import integrationImage from "../assets/images/webp/marketplace-integration.webp";

const MarketplaceIntegrationSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          sx={{
            mb: 8,
            fontSize: { xs: "1.9rem", md: "2.5rem" },
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          Easily Manage Your Orders in One Place with <br />
          Seamless Marketplace Integration!
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, md: 10 }}
        >
          {/* Left Text Block */}
          <Box flex={1}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 3,
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Integrate your Etsy, Amazon, TikTok, Walmart, and Shopify stores
              effortlessly with Printnest. Link your store now in just a few
              clicks and start managing all your orders in one convenient
              platform.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "9999px",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                color: "#025A4C",
                borderColor: "#025A4C",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#014c3f",
                  backgroundColor: "rgba(2,90,76,0.05)",
                  color: "#014c3f",
                },
              }}
            >
              Learn How
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src={integrationImage}
            alt="Marketplace Integration"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 2,
              height: "auto",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default MarketplaceIntegrationSection;
