import { Card, Input, VStack } from '@chakra-ui/react';

const FormAddress = () => {
  return (
    <VStack minH={'50vh'} spacing={4}>
      <Card display={'flex-box'}>
        <Input placeholder="Cidade, UF" borderColor="black" />
      </Card>
      <Card display={'flex-box'}>
        <Input placeholder="Rua" borderColor="black" />
      </Card>
      <Card display={'flex-box'}>
        <Input placeholder="CEP" borderColor="black" />
      </Card>
    </VStack>
  );
};

export default FormAddress;
