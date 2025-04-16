import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What are custom embroidery products in print on demand?",
    answer:
      "Custom embroidery products in print on demand refer to items such as t-shirts, hoodies, accessories, and home decor that can be personalized with unique embroidery designs or logos. These products are only created when ordered, minimizing excess inventory and offering personalized options for customers.",
  },
  {
    question:
      "How does the print-on-demand process work for custom embroidery?",
    answer:
      "The print-on-demand process for custom embroidery involves several steps: First, customers select a product and upload their design or choose from available options. Then, the order is processed, and the design is embroidered onto the chosen item. Finally, the finished product is shipped directly to the customer without the need for bulk production.",
  },
  {
    question: "What types of products can be customized with embroidery?",
    answer:
      "A wide range of products, such as t-shirts, hoodies, sweatshirts, hats, bags, jackets, and more, can be customized with embroidery. Each item can be tailored to fit personal styles, brands, or special occasions.",
  },
  {
    question:
      "Are there any limitations on the designs I can use for custom embroidery?",
    answer:
      "While you can use a variety of designs for custom embroidery, there may be limitations regarding the complexity, size, and color palette. It's important to check with your print-on-demand provider for specific guidelines to ensure your design can be successfully embroidered.",
  },
  {
    question: "How long does it take to receive my custom embroidered product?",
    answer:
      "The production time for custom embroidered products typically ranges from a few days to a couple of weeks, depending on the complexity of the design and the volume of orders. Shipping times may vary based on your location and the shipping method selected at checkout.",
  },
];

const FaqSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F5FAF9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          sx={{
            mb: 6,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            color: "#000",
          }}
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
          {faqs.map((faq, index) => (
            <Accordion key={index} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography fontWeight={600} color="#000">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" fontSize="0.95rem">
                  {faq.answer}
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
