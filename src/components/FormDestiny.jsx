import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

function FormDestiny({ pickupLocation, dropOffLocation, onLocationChange }) {

  const [adults, setAdults] = useState("Um Adulto");
  const [children, setChildren] = useState("");
  const [babies, setBabies] = useState("");
  const isInputInvalid = pickupLocation === '' || dropOffLocation === '';
  
  
  console.log(pickupLocation);
  console.log(dropOffLocation);
  console.log(adults);
  console.log(children);
  console.log(babies);
  
  const adultsPassager = e => {
    setAdults(e.target.value);
  };

  const childrenPassager = e => {
    setChildren(e.target.value);
  };

  const babiesPassager = e => {
    setBabies(e.target.value);
  };

  const handlePickupLocationChange = e => {
    const newLocation = e.target.value;
    onLocationChange(newLocation, dropOffLocation);
  };

  const handleDropOffLocationChange = e => {
    const newLocation = e.target.value;
    onLocationChange(pickupLocation, newLocation);
  };

  

    return (
      <>
        <VStack minH={'50vh'}>
            <FormControl isrequired="true" isInvalid={isInputInvalid}>
            <FormLabel>Pick Up From</FormLabel>
            <Select borderColor="black" onChange={handlePickupLocationChange}>
              <option value="">select</option>
              <option value="local 2">Option 2</option>
              <option value="local 3">Option 3</option>
              <option value="local 4">Option 4</option>
              <option value="local 5">Option 5</option>
            </Select>
            {!isInputInvalid ? null : (
              <FormErrorMessage>Local is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isrequired="true" isInvalid={isInputInvalid}>
            <FormLabel isrequired="true"> Drop Off to</FormLabel>
            <Select onChange={handleDropOffLocationChange} borderColor="black">
              <option value="">select</option>
              <option value="local 2">Option 2</option>
              <option value="local 3">Option 3</option>
              <option value="local 4">Option 4</option>
              <option value="local 5">Option 5</option>
            </Select>{' '}
            {!isInputInvalid ? null : (
              <FormErrorMessage>Destination Local is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isrequired="true">
            <FormLabel>Adults</FormLabel>
            <Select onChange={adultsPassager} borderColor="black">
              <option value="Um adultos">1 </option>
              <option value="Dois adultos">2 </option>
              <option value="Três adultos">3 </option>
              <option value="Quatro adultos">4 </option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Children</FormLabel>
            <Select onChange={childrenPassager} placeholder="Select option" borderColor="black">
              <option value="cd0">0 </option>
              <option value="cd1">1 </option>
              <option value="cd2">2 </option>
              <option value="cd3">3 </option>
            </Select>
            <FormLabel>Babies</FormLabel>
            <Select onChange={babiesPassager} placeholder="Select option" borderColor="black">
              <option value="bb0">0 </option>
              <option value="bb1">1 </option>
              <option value="bb2">2 </option>
              <option value="bb3">3 </option>
            </Select>
          </FormControl>        
        </VStack>
      </>
    );
};

export default FormDestiny;
