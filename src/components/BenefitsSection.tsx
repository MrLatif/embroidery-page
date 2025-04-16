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
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#F5FAF9" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 10,
            fontSize: { xs: "1.9rem", md: "2.5rem" },
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          Why Should You Add Embroidered Products to Your Store?
        </Typography>

        <Stack spacing={{ xs: 10, md: 14 }}>
          {benefits.map((item, index) => (
            <BenefitRow key={index} item={item} reverse={index % 2 !== 0} />
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
      alignItems="center"
      spacing={{ xs: 4, md: 8 }}
    >
      <Box
        component="img"
        src={item.icon}
        alt={item.title}
        sx={{
          width: { xs: "100%", sm: 300, md: 360 },
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
      <Box sx={{ maxWidth: 560 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.4rem",
            fontWeight: 700,
            mb: 1.5,
            color: "#000",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "text.secondary",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default BenefitsSection;
