import { Box, Typography, Stack, Container } from "@mui/material";

import premiumIcon from "../assets/images/webp/premium-embroidery.webp";
import durabilityIcon from "../assets/images/webp/Durability.webp";
import tactileIcon from "../assets/images/webp/Tactile-Feel.webp";
import versatilityIcon from "../assets/images/webp/Versatility.webp";
import ecoIcon from "../assets/images/webp/Eco-Friendly.webp";
interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: premiumIcon,
    title: "Premium",
    description:
      "Embroidery gives your products a high-end and professional look, making your brand appear more sophisticated and luxurious.",
  },
  {
    icon: durabilityIcon,
    title: "Durability & Longevity",
    description:
      "Embroidered designs maintain their quality over time, offering a long-lasting and reliable option for apparel.",
  },
  {
    icon: tactileIcon,
    title: "Tactile Feel",
    description:
      "The raised texture of embroidery adds a unique, premium touch, enhancing the overall sensory experience.",
  },
  {
    icon: versatilityIcon,
    title: "Versatility",
    description:
      "Embroidery works on various fabrics and apparel, making it ideal for tote bags, caps, sweatshirts, and more.",
  },
  {
    icon: ecoIcon,
    title: "Eco-Friendly",
    description:
      "Unlike traditional printing, embroidery uses thread instead of chemicals, making it a more sustainable and environmentally friendly option.",
  },
];

const BenefitsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 8,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            color: "#000",
          }}
        >
          Why Should You Add Embroidered Products to Your Store?
        </Typography>

        <Stack spacing={8}>
          {benefits.map((item, index) => (
            <BenefitRow
              key={index}
              item={item}
              reverse={index % 2 === 0} // Start with image on right
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const BenefitRow = ({
  item,
  reverse,
}: {
  item: BenefitItem;
  reverse: boolean;
}) => {
  return (
    <Stack
      direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
      spacing={{ xs: 4, md: 6 }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component="img"
        src={item.icon}
        alt={item.title}
        sx={{
          width: { xs: "100%", md: 240 },
          borderRadius: 3,
          boxShadow: 3,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <Box sx={{ maxWidth: 500 }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mb: 1, fontSize: "1.25rem", color: "#000" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            fontSize: "0.95rem",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default BenefitsSection;
