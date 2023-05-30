import { Input, VStack } from '@chakra-ui/react';

const FormAddress = () => {
  return (
    <VStack spacing={5}>
      <Input placeholder="Cidade, UF" borderColor="blue.700" />
      <Input placeholder="Rua" borderColor="blue.700" />
      <Input placeholder="CEP" borderColor="blue.700" />
    </VStack>
  );
};

export default FormAddress;
