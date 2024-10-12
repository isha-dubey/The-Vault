import {
  Paper,
  Typography,
  Container,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import Address from "../components/AddressForm";
import PaymentsForm from "../components/PaymentsForm";

const steps = ["Shipping Address", "Payment Details", "Review Order"];

function getStepContent(activeStep) {
  switch (activeStep) {
    case 0:
      return <Address/>;
    case 1:
      return <PaymentsForm/>;
    case 2:
      return <h1>Review</h1>;
    default:
      throw new Error("Unknown Step");
  }
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          mb: 4,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{
              pt: 3,
              pb: 5,
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                {" "}
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography>Thankyou you your order</Typography>
              <Typography>Your order number is #12234....</Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {activeStep != 0 && (
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      ml: 1,
                    }}
                    onClick={handleBack}
                  >
                    {" "}
                    Backk
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    mt: 3,
                    ml: 1,
                  }}
                >
                  {" "}
                  {activeStep === steps.length - 1 ? " Place Order " : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Checkout;
