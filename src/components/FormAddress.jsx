import { Flex, FormControl, FormHelperText, Input, InputGroup, VStack } from '@chakra-ui/react';

const FormAddress = () => {
  return (
    <VStack minH={'50vh'} spacing={4}>
      <Flex>
        <FormControl isrequired="true" marginRight={2}>        
          <Input placeholder='First Name' borderColor="black">            
          </Input>
        </FormControl>
        <FormControl isrequired="true">        
          <Input placeholder='Last Name' borderColor="black">            
          </Input>
        </FormControl>
      </Flex>
      <FormControl isrequired="true">   
      <InputGroup>
        <Input type="email" placeholder='Email' borderColor="black" />                 
      </InputGroup>
      <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl isrequired="true">        
       <InputGroup> 
       
       <Input placeholder='Phone' borderColor="black">            
        </Input>
        </InputGroup>
      </FormControl>
      <FormControl isrequired="true">        
        <Input placeholder='Address' borderColor="black">            
        </Input> 
        <FormHelperText>We'll send an email and contact you with more information and prices.</FormHelperText>
      </FormControl>
     
    </VStack>
  );
};

export default FormAddress;
