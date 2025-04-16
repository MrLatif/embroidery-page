import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";

import step1 from "../assets/images/webp/step1.webp";
import step2 from "../assets/images/webp/step2.webp";
import step3 from "../assets/images/webp/step3.webp";

const steps = [
  {
    img: step1,
    number: "1",
    title: "Upload Your Design",
    description:
      "Add your custom design to the Printnest library with just a few clicks.",
  },
  {
    img: step2,
    number: "2",
    title: "List Your Products",
    description:
      "Easily connect your seller account and list your products on top marketplaces like Etsy, Amazon, Shopify, TikTok, and Walmart.",
  },
  {
    img: step3,
    number: "3",
    title: "Sit Back & Relax!",
    description:
      "Once you receive an order, manage it effortlessly through your Printnest dashboard—we take care of the rest!",
  },
];

const HowItWorksSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          sx={{
            mb: 10,
            fontSize: { xs: "1.9rem", md: "2.5rem" },
            color: "#000",
          }}
        >
          How Printnest Works?
        </Typography>

        <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: "100%",
                    maxWidth: 220,
                    height: "auto",
                    borderRadius: 2,
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "2px solid #025A4C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#025A4C",
                  }}
                >
                  {step.number}
                </Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="center"
                  sx={{ fontSize: "1.125rem", color: "#000" }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="text.secondary"
                  sx={{ maxWidth: 280, lineHeight: 1.6 }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box mt={8} textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#025A4C",
              px: 6,
              py: 1.5,
              borderRadius: "9999px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#014c3f",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
