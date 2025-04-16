import { Box, Typography, Container, Stack, Button } from "@mui/material";
import integrationImage from "../assets/images/webp/marketplace-integration.webp";

const MarketplaceIntegrationSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 6, fontSize: { xs: "1.5rem", md: "2rem" }, color: "#000" }}
        >
          Easily Manage Your Orders in One Place with <br /> Seamless
          Marketplace Integration!
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={{ xs: 6, md: 10 }}
          justifyContent="space-between"
        >
          <Box flex={1}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 3, maxWidth: 480 }}
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
                px: 4,
                color: "#025A4C",
                borderColor: "#025A4C",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#014c3f",
                  backgroundColor: "rgba(2,90,76,0.05)",
                },
              }}
            >
              Learn How
            </Button>
          </Box>

          <Box
            component="img"
            src={integrationImage}
            alt="Marketplace Integration"
            sx={{ width: "100%", maxWidth: 400, borderRadius: 2, boxShadow: 2 }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default MarketplaceIntegrationSection;
