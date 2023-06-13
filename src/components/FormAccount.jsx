// import {
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Select,
//   VStack,
// } from '@chakra-ui/react';
// import { useState } from 'react';

// const FormAccount = () => {
//   const [input, setInput] = useState('');
//   const isError = input === '';
//   const handleInputChange = e => setInput(e.target.value);

//   return (
//     <VStack minH={'50vh'}>
//       <FormControl isRequired isInvalid={isError}>
//         <FormLabel isRequired>Pick Up From</FormLabel>
//         <Select
//           placeholder="Select option"
//           borderColor="black"
//           onChange={handleInputChange}
//         >
//           <option value="local1">Option 1</option>
//           <option value="local2">Option 2</option>
//           <option value="local3">Option 3</option>
//         </Select>
//         {!isError ? null : (
//           <FormErrorMessage>Local is required.</FormErrorMessage>
//         )}
//       </FormControl>
//       {/* <FormLabel isRequired> Drop Off to</FormLabel>
//         <Select placeholder="Select option" borderColor="black">
//           <option value="local1">Option 1</option>
//           <option value="local2">Option 2</option>
//           <option value="local3">Option 3</option>
//         </Select>
//         <FormLabel>Adults</FormLabel>
//         <Select placeholder="Select option" borderColor="black"></Select>
//       </FormControl>
//       <FormLabel>Children</FormLabel>
//       <Select placeholder="Select option" borderColor="black"></Select>
//       <FormLabel>Babies</FormLabel>
//       <Select placeholder="Select option" borderColor="black"></Select> */}
//     </VStack>
//   );
// };

// export default FormAccount;
