import { Box, Button, Progress, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Tablerequest from './Formrequest';
const steps = [
  { title: 'Step 1', description: 'Contact Info' },
  { title: 'Step 2', description: 'Date & Time' },
  { title: 'Step 3', description: 'Personal Info' },
];

export function Example() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const progressPercent = (activeStep / (steps.length - 1)) * 100;

  return (
    <Stack spacing={4}>
      <Box>
        <Progress value={progressPercent} colorScheme="yellow" />
      </Box>
      <Text>
        Step {activeStep + 1}:
        <b>
          {steps[activeStep].description}{' '}
          {activeStep === 0 ? <Tablerequest /> : null}
          {activeStep === 1 ? <null /> : null}
          {activeStep === 2 ? <null /> : null}
        </b>
      </Text>
      <Stack direction="row" spacing={4}>
        {activeStep > 0 && (
          <Button onClick={handlePrevious} colorScheme="blue">
            Previous
          </Button>
        )}
        {activeStep < steps.length - 1 && (
          <Button onClick={handleNext} colorScheme="blue">
            Next
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
