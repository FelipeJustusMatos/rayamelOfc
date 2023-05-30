import { useState } from 'react';
import FormAccount from './FormAccount';
import FormAddress from './FormAddress';
import FormPersonalDetails from './FormPersonalDetails';
import Step from './Step';
import { Box, Button, Center, Divider, Flex, HStack } from '@chakra-ui/react';

function Formrequest() {
  const [step, setStep] = useState(1);

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FormAccount />;
      case 2:
        return <FormAddress />;
      case 3:
        return <FormPersonalDetails />;
      default:
        return <FormAccount />;
    }
  };

  const Steps = [1, 2, 3];

  return (
    <Flex pt={3} align="center" justify="center">
      <Center maxW={500} w="100%" flexDir="column">
        <HStack spacing={4}>
          {Steps.map(item => (
            <Step key={item} index={item} active={step === item} />
          ))}
        </HStack>

        <Divider my={4} borderColor="blackAlpha.700" />

        <Box w="80%">{getCompStep()}</Box>

        <HStack spacing={10} mt={4}>
          <Button
            onClick={() => setStep(step - 1)}
            isDisabled={step <= 1 ? true : false}
          >
            Voltar
          </Button>
          <Button bg="#ECB939" onClick={() => step !== 3 && setStep(step + 1)}>
            {step === 3 ? 'Enviar' : 'Próximo'}
          </Button>
        </HStack>
      </Center>
    </Flex>
  );
}

export default Formrequest;
