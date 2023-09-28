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
import { useState } from 'react';

function FormDetailsTravel() {
  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [dateTimePickUp, setDateTimePickUp] = useState("");
  const [retorno, setRetorno] = useState("");
  const [promo, setPromo] = useState("");

  console.log(date);
  console.log(hora);
  console.log(dateTimePickUp);
  console.log(retorno);
  console.log(promo);

  const dateBook = e => {
    setDate(e.target.value);
  };
  const horaBook = e => {
    setHora(e.target.value);
  };

  const dateTimeBook = e => {
    setDateTimePickUp(e.target.value);
  };

  const returnBook = e => {
    setRetorno(e.target.value);
  };

  const promoCodeBook = e => {
    setPromo(e.target.value);
  };


  return (
    <>
      <VStack minH={'50vh'}>
        <FormControl isRequired borderColor="black">
          <FormLabel>Date</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" onChange={dateBook} />
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel>Hour / Flight</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="time" onChange={horaBook}/>
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel>Date time pickup</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            onChange={dateTimeBook}
          />
        </FormControl>

        <FormControl borderColor="black" isRequired>
          <FormLabel >Return</FormLabel>
          <Select onChange={returnBook} placeholder="Select option" borderColor="black">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Select>
        </FormControl>

        <FormControl borderColor="black">
          <FormLabel >Promo Code</FormLabel>
          <InputGroup onChange={promoCodeBook}>
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
