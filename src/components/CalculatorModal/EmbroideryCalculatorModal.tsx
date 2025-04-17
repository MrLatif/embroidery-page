import { Dialog, Slide, Box, useMediaQuery, useTheme } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import Step0ChooseMethod from "./Steps/Step0ChooseMethod";
import Step1ManualInput from "./Steps/Step1ManualInput";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface EmbroideryCalculatorModalProps {
  open: boolean;
  onClose: () => void;
}

const EmbroideryCalculatorModal = ({
  open,
  onClose,
}: EmbroideryCalculatorModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [step, setStep] = useState(0);
  const [method, setMethod] = useState<"upload" | "manual" | null>(null);
  const [stitchCount, setStitchCount] = useState(0);

  const handleClose = () => {
    setStep(0);
    setMethod(null);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Step0ChooseMethod
            onNext={(selectedMethod: "upload" | "manual") => {
              setMethod(selectedMethod);
              setStep(1);
            }}
            onCancel={handleClose}
          />
        );
      case 1:
        if (method === "manual") {
          return (
            <Step1ManualInput
              value={stitchCount}
              onChange={(val) => setStitchCount(val)}
              onBack={() => setStep(0)}
              onNext={() => setStep(2)}
            />
          );
        }
        return <div>Upload flow coming soon...</div>;
      default:
        return <div>Coming soon...</div>;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 4 },
          p: { xs: 2, sm: 3 },
        },
      }}
    >
      <Box>{renderStep()}</Box>
    </Dialog>
  );
};

export default EmbroideryCalculatorModal;
