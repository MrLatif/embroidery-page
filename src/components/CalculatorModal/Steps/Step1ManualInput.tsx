import {
  Box,
  Typography,
  Slider,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

const Step1ManualInput = ({
  value,
  onChange,
  onBack,
  onNext,
}: {
  value: number;
  onChange: (val: number) => void;
  onBack: () => void;
  onNext: () => void;
}) => {
  const [internalValue, setInternalValue] = useState(value || 0);

  const handleSliderChange = (_: any, newValue: number | number[]) => {
    const val = typeof newValue === "number" ? newValue : newValue[0];
    setInternalValue(val);
    onChange(val);
  };

  return (
    <Box>
      <Typography fontWeight={700} fontSize="1.25rem" mb={2}>
        Adjust the slider to match your stitch count.
      </Typography>
      <Typography color="text.secondary" mb={4}>
        You can find the stitch count in the software you used to create the
        design or in the PDF document that comes with the downloaded design
        file.
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Slider
          min={0}
          max={50000}
          step={1000}
          value={internalValue}
          onChange={handleSliderChange}
          sx={{ flex: 1 }}
        />
        <TextField
          type="number"
          size="small"
          value={internalValue}
          onChange={(e) => {
            const val = Number(e.target.value);
            setInternalValue(val);
            onChange(val);
          }}
          inputProps={{ min: 0 }}
          sx={{ width: 100 }}
        />
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Button onClick={onBack} color="inherit">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          sx={{
            backgroundColor: "#025A4C",
            textTransform: "none",
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

export default Step1ManualInput;
