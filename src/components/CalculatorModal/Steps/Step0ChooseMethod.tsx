import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

interface Props {
  onNext: (method: "upload" | "manual") => void;
  onCancel: () => void;
}

const Step0ChooseMethod = ({ onNext, onCancel }: Props) => {
  const [selected, setSelected] = useState<"upload" | "manual" | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box maxWidth="100%">
      <Typography
        fontWeight={700}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        textAlign="center"
        mb={4}
      >
        Embroidery Design Calculator
      </Typography>

      <RadioGroup
        aria-label="Embroidery calculation method"
        value={selected}
        onChange={(e) => setSelected(e.target.value as "upload" | "manual")}
      >
        <FormControlLabel
          value="upload"
          disabled
          control={<Radio sx={{ color: "#025A4C" }} />}
          label={
            <Typography fontSize={{ xs: "1rem", md: "1.125rem" }}>
              Upload your design to calculate the stitch price
            </Typography>
          }
        />
        <FormControlLabel
          value="manual"
          control={<Radio sx={{ color: "#025A4C" }} />}
          label={
            <Typography fontSize={{ xs: "1rem", md: "1.125rem" }}>
              Select the stitch count if you already know it
            </Typography>
          }
        />
      </RadioGroup>

      <Stack
        direction={isMobile ? "column-reverse" : "row"}
        spacing={2}
        justifyContent="flex-end"
        mt={4}
      >
        <Button
          onClick={onCancel}
          fullWidth={isMobile}
          sx={{
            color: "#025A4C",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => selected && onNext(selected)}
          disabled={!selected}
          fullWidth={isMobile}
          sx={{
            backgroundColor: "#025A4C",
            px: 4,
            py: 1.25,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#014c3f",
            },
          }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Step0ChooseMethod;
