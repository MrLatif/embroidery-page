import { Box, Typography, Button, Container, Stack } from "@mui/material";
import heroImg from "../assets/images/webp/main.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, md: 8 }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.25rem", md: "3rem" },
                lineHeight: { xs: 1.3, md: 1.2 },
                mb: 3,
              }}
            >
              Enhance Your Products <br /> with Artistic{" "}
              <Box component="span" sx={{ color: "#025A4C" }}>
                Embroidery
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
                color: "text.secondary",
                mb: 4,
                maxWidth: 550,
              }}
            >
              Discover high-quality embroidery printing options with Printnest!
              Design and sell durable, premium-looking embroidered products that
              make your brand stand out.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#025A4C",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontWeight: 500,
                  fontSize: "1rem",
                  borderRadius: 9999,
                  "&:hover": {
                    backgroundColor: "#014236",
                  },
                }}
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
                  px: 4,
                  py: 1.5,
                  fontWeight: 500,
                  fontSize: "1rem",
                  borderRadius: 9999,
                  "&:hover": {
                    borderColor: "#014236",
                    color: "#014236",
                  },
                }}
              >
                Sign Up Free
              </Button>
            </Stack>
          </Box>

          {/* Right image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={heroImg}
              alt="Embroidery collage"
              sx={{
                width: "100%",
                maxWidth: 540,
                height: "auto",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
