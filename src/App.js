import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Home from './Pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
