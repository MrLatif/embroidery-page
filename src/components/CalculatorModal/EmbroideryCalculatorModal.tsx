import { Dialog, Slide, Box, useMediaQuery, useTheme } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import Step0ChooseMethod from "./Steps/Step0ChooseMethod";
import Step1ManualInput from "./Steps/Step1ManualInput";
import Step2ProductSelection from "./Steps/Step2ProductSelection";

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
  const [stitchCount, setStitchCount] = useState<number>(0);

  const handleClose = () => {
    setStep(0);
    setMethod(null);
    setStitchCount(0);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      // case 0:
      //   return (
      //     <Step0ChooseMethod
      //       onNext={(selectedMethod: "upload" | "manual") => {
      //         setMethod(selectedMethod);
      //         setStep(1);
      //       }}
      //       onCancel={handleClose}
      //     />
      //   );
      case 0: {
        return (
          <Step1ManualInput
            value={stitchCount}
            onChange={(val) => setStitchCount(val)}
            onCancel={handleClose}
            onNext={() => setStep(1)}
          />
        );
      }
      case 1:
        return (
          <Step2ProductSelection
            stitchCount={stitchCount}
            onBack={() => setStep(0)}
            onFinish={handleClose}
          />
        );
      default:
        return <Box>Coming soon...</Box>;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={false}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          borderRadius: 3,
          mx: 2, // small horizontal margin on mobile
          p: { xs: 2, sm: 3 },
        },
      }}
    >
      <Box>{renderStep()}</Box>
    </Dialog>
  );
};

export default EmbroideryCalculatorModal;
