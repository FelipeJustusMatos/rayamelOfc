import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import FormAddress from './FormAddress';
import FormPersonalDetails from './FormPersonalDetails';

function Formrequest() {
  const [input, setInput] = useState('');
  const isError = input === '';
  const handleInputChange = e => setInput(e.target.value);
  console.log(input);
  const FormAccount = () => {
    return (
      <>
        <VStack minH={'50vh'}>
          <FormControl isRequired isInvalid={isError}>
            <FormLabel>Pick Up From</FormLabel>
            <Select borderColor="black" onChange={handleInputChange}>
              <option value="">select</option>
              <option value="local2">Option 2</option>
              <option value="local3">Option 3</option>
              <option value="local4">Option 4</option>
              <option value="local5">Option 5</option>
            </Select>
            {!isError ? null : (
              <FormErrorMessage>Local is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isError}>
            <FormLabel isRequired> Drop Off to</FormLabel>
            <Select onChange={handleInputChange} borderColor="black">
              <option value="">select</option>
              <option value="local2">Option 2</option>
              <option value="local3">Option 3</option>
              <option value="local4">Option 4</option>
              <option value="local5">Option 5</option>
            </Select>{' '}
            {!isError ? null : (
              <FormErrorMessage>Destino Local is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Adults</FormLabel>
            <Select placeholder="Select option" borderColor="black">
              {' '}
              <option value="qunt1">1 </option>
              <option value="qunt2">2 </option>
              <option value="qunt3">3 </option>
              <option value="qunt4">4 </option>
            </Select>
            <FormLabel>Children</FormLabel>
            <Select placeholder="Select option" borderColor="black"></Select>
            <FormLabel>Babies</FormLabel>
            <Select placeholder="Select option" borderColor="black"></Select>
          </FormControl>
        </VStack>
      </>
    );
  };

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

  const Steps = [1, 2, 3];

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

          <Box w="80%">{getCompStep()}</Box>

          <HStack mt={4}>
            <Button
              onClick={() => setStep(step - 1)}
              isDisabled={step <= 1 ? true : false}
            >
              Voltar
            </Button>
            <Button
              bg="#ECB939"
              onClick={() => step !== 3 && setStep(step + 1)}
              isDisabled={input === ''}
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
