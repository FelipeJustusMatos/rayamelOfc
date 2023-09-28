import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  HStack
} from '@chakra-ui/react';
import { useState } from 'react';
import FormDestiny from './FormDestiny';
import FormAddress from './FormAddress';
import FormDetailsTravel from './FormDetailsTravel';

function Formrequest() {
  const Steps = [1, 2, 3];
  const [step, setStep] = useState(1);
  
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');

  const handleLocationChange = (pickup, dropOff) => {
    setPickupLocation(pickup);
    setDropOffLocation(dropOff);
  };

  const isInputInvalid = pickupLocation === '' || dropOffLocation === '';

  const handleNextStep = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  };

  
  const Step = ({ index, active }) => {
    return (
      <Center>
        <Button
          py={1}
          px={4}
          borderRadius={2}
          bg={active ? '#ECB939' : 'gray.300'}
          color={active ? 'white' : 'blackAlpha'}
          style={{ scale: active ? '1.2' : 'none' }}
        >
          {index}
        </Button>
      </Center>
    );
  };

  return (
    <>
      <Card align="center" justifyContent="center">
        <Center minH={600} maxW={500} w="100%" flexDir="column">
          <HStack spacing={4}>
            {Steps.map(item => (
              <Step key={item} index={item} active={step === item} />
            ))}
          </HStack>

          <Divider my={4} borderColor="blackAlpha.700" />

          <Box w="80%">
            {step === 1 && (
              <FormDestiny
                pickupLocation={pickupLocation}
                dropOffLocation={dropOffLocation}
                onLocationChange={handleLocationChange}
              />
            )}
            {step === 2 && <FormDetailsTravel />}
            {step === 3 && <FormAddress />}
          </Box>

          <HStack mt={4}>
            <Button
              onClick={() => setStep(step - 1)}
              isDisabled={step <= 1 ? true : false}
            >
              Voltar
            </Button>
            <Button
              bg="#ECB939"
              onClick={handleNextStep}
              isDisabled={isInputInvalid}
            >
              {step === 3 ? 'Enviar' : 'Próximo'}
            </Button>
          </HStack>
        </Center>
      </Card>
    </>
  );
}

export default Formrequest;
