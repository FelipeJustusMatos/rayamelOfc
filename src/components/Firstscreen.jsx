import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export default function Firstscreen() {
  return (
    <Card justifyContent={'center'}>
      <Box
        backgroundImage="linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(https://www.aracaju.se.leg.br/institucional/noticias/no-dia-dos-motoristas-binho-ressalta-a-importancia-do-motorista-de-aplicativo-em-nossa-sociedade/image_large)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={'100%'}
        minHeight={['55vh', '80vh']}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <VStack fontSize={'lg'} pt={20} spacing={3} textAlign="left">
          <CardBody>
            <Text color={'white'}>YOUR BEST TRAVEL</Text>
            <Heading color={'white'}>An Unforgettable Ride</Heading>
            <Text color={'white'}>
              Let us take care of your transport. Just enjoy the view!
            </Text>
          </CardBody>
          <CardFooter flexDirection="row">
            <Box>
              <ButtonGroup>
                <Button bg="#ECB939" borderRadius={'none'}>
                  Click here
                </Button>
                <Button colorScheme="gray" borderRadius={'none'}>
                  Click here
                </Button>
              </ButtonGroup>
            </Box>
          </CardFooter>
        </VStack>
      </Box>
    </Card>
  );
}
