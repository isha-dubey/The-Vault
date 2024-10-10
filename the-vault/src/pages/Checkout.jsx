import {
  Paper,
  Typography,
  Container,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useState } from "react";

function Checkout() {
  const steps = ["Shipping Address", "Payment Details", "Review Order"];
  const [activeStep, setActiveStep] = useState(0);
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
        </Paper>
      </Container>
    </>
  );
}

export default Checkout;
