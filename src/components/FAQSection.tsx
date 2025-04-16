import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import { ExpandMore, ExpandMoreOutlined } from "@mui/icons-material";

const faqs = [
  "What is print on demand?",
  "What does Printnest do?",
  "Why should I work with Printnest?",
  "What printing techniques does Printnest offer?",
  "Where are Printnest products made?",
  "How does Printnest compares to other brands?",
  "How much will I make per sale?",
];

const FaqSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F5FAF9" }}>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 6, color: "#000" }}
        >
          Embroidered apparel FAQs
        </Typography>

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 1,
            overflow: "hidden",
          }}
        >
          {faqs.map((question, index) => (
            <Accordion key={index} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography fontWeight={600}>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  volutpat diam sit amet lacus efficitur, non fermentum lorem
                  cursus.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
