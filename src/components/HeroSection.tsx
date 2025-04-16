import { Box, Typography, Button, Container, Stack } from "@mui/material";
import heroImg from "../assets/images/webp/main.webp";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={{ xs: 6, md: 10 }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.75rem" },
                mb: 2,
              }}
            >
              Enhance Your Products <br /> with Artistic{" "}
              <Box component="span" sx={{ color: "#025A4C" }}>
                Embroidery
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "text.secondary",
                mb: 4,
              }}
            >
              Discover high-quality embroidery printing options with Printnest!
              Design and sell durable, premium-looking embroidered products that
              make your brand stand out.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#025A4C", textTransform: "none" }}
              >
                Products
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#025A4C",
                  borderColor: "#025A4C",
                  textTransform: "none",
                }}
              >
                Sign Up Free
              </Button>
            </Stack>
          </Box>

          {/* Right image */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={heroImg}
              alt="Embroidery collage"
              sx={{ width: "100%", maxWidth: 500, mx: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
