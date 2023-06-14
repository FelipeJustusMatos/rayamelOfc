import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cardbook() {
  const navigate = useNavigate(); // Adicione esta linha para atribuir o hook useNavigate a uma variável

  return (
    <Box>
      <Flex
        minH={'15vh'}
        bg={'black'}
        h={100}
        justifyContent="center"
        alignItems={'center'}
      >
        <Text as="b" color="white" pr={5}>
          BOOK NOW YOUR TRANSFER
        </Text>

        <Button
          bg="#ECB939"
          borderRadius={'md'}
          onClick={() => {
            navigate('/Booking'); // Corrigido para usar a variável navigate
          }}
        >
          Click here
        </Button>
      </Flex>
    </Box>
  );
}
