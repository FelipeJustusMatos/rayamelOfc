import { Button, Center } from '@chakra-ui/react';
import React from 'react';

const Step = ({ index, active }) => {
  return (
    <Center>
      <Button
        py={1}
        px={4}
        borderRadius={2}
        bg={active ? '#ECB939' : 'gray.300'}
        color={active ? 'white' : 'blackAlpha'}
        style={{ scale: active ? '1.2' : 'none' }}
      >
        {index}
      </Button>
    </Center>
  );
};

export default Step;
