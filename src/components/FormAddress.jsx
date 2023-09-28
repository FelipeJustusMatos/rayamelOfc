import { Flex, FormControl, FormHelperText, Input, InputGroup, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const FormAddress = () => {
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  console.log(fistName);
  console.log(lastName);
  console.log(email);
  console.log(phone);
  console.log(address);

  const addressName = e => {
    setFirstName(e.target.value);
  };

  const addressSecondName = e => {
    setLastName(e.target.value);
  };

  const sendEmail = e => {
    setEmail(e.target.value);
  };

  const sendPhone = e => {
    setPhone(e.target.value);
  };

  const sendAddress = e => {
    setAddress(e.target.value);
  };

  return (
    <VStack minH={'50vh'} spacing={4}>
      <Flex>
        <FormControl isrequired="true" marginRight={2}>        
          <Input placeholder='First Name' borderColor="black" onChange={addressName}>            
          </Input>
        </FormControl>
        <FormControl isrequired="true">        
          <Input placeholder='Last Name' borderColor="black" onChange={addressSecondName}>            
          </Input>
        </FormControl>
      </Flex>
      <FormControl isrequired="true">   
      <InputGroup>
        <Input type="email" placeholder='Email' borderColor="black" onChange={sendEmail}/>                 
      </InputGroup>
      <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl isrequired="true">        
       <InputGroup> 
       
       <Input placeholder='Phone' borderColor="black" onChange={sendPhone}>            
        </Input>
        </InputGroup>
      </FormControl>
      <FormControl isrequired="true">        
        <Input placeholder='Address' borderColor="black" onChange={sendAddress}>            
        </Input> 
        <FormHelperText>We'll send an email and contact you with more information and prices.</FormHelperText>
      </FormControl>
     
    </VStack>
  );
};

export default FormAddress;
