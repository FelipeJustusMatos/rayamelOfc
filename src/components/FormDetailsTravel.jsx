import { QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  VStack,
} from '@chakra-ui/react';

function FormDetailsTravel() {
  const initialValues = {
    sobrenome: '',
    dataViajem: '',
    horadeviajem: '',
    horapickup: '',
    horavoo: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(false);
  };

  return (
    <>
      <VStack minH={'50vh'}>
        <FormControl isRequired borderColor="black">
          <FormLabel>Date</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel>Hour / Flight</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="time" />
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel>Date time pickup</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel>Return</FormLabel>
          <Select placeholder="Select option" borderColor="black">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Select>
        </FormControl>

        <FormControl borderColor="black">
          <FormLabel>Promo Code</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <QuestionOutlineIcon color="gray.600" />
            </InputLeftElement>
            <Input type="number" />
          </InputGroup>
        </FormControl>
      </VStack>
    </>
  );
}

export default FormDetailsTravel;
