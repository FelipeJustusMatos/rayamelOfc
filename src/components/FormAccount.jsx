import { FormControl, FormLabel, Select, VStack } from '@chakra-ui/react';

const FormAccount = () => {
  return (
    <VStack spacing={5}>
      <FormControl required>
        <FormLabel>Pick Up From</FormLabel>
        <Select
          placeholder="Select option"
          borderColor="black"
          required
        ></Select>
        <FormLabel required> Drop Off to</FormLabel>
        <Select placeholder="Select option" borderColor="black"></Select>
        <FormLabel>Adults</FormLabel>
        <Select placeholder="Select option" borderColor="black"></Select>
        <FormLabel>Children</FormLabel>
        <Select placeholder="Select option" borderColor="black"></Select>
        <FormLabel>Babies</FormLabel>
        <Select placeholder="Select option" borderColor="black"></Select>
      </FormControl>
    </VStack>
  );
};

export default FormAccount;
