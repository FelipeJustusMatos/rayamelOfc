import { Input, VStack } from '@chakra-ui/react';

const FormAddress = () => {
  return (
    <VStack>
      <Input placeholder="Cidade, UF" borderColor="black" />
      <Input placeholder="Rua" borderColor="black" />
      <Input placeholder="CEP" borderColor="black" />
    </VStack>
  );
};

export default FormAddress;
