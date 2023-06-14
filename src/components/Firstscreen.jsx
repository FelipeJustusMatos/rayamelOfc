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
import { useNavigate } from 'react-router-dom';
import { theme } from '../assets/images/index.js';

export default function Firstscreen() {
  const navigate = useNavigate();
  return (
    <Card>
      {/* this box define the bg img */}
      <Box
        backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${theme})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        minHeight={['68vh', '80vh']}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack fontSize="lg" spacing={3} textAlign="center">
          <CardBody>
            <Text color="white">YOUR BEST TRAVEL</Text>
            <Heading color="white">An Unforgettable Ride</Heading>
            <Text color="white">
              Let us take care of your transport. Just enjoy the view!
            </Text>
          </CardBody>
          <CardFooter flexDirection="row">
            <Box>
              <ButtonGroup>
                {/* button 1 */}
                <Button
                  bg="#ECB939"
                  borderRadius="md "
                  onClick={() => {
                    navigate('/Booking');
                  }}
                >
                  Booking
                </Button>
                <Button
                  colorScheme="gray"
                  borderRadius="md"
                  onClick={() => {
                    navigate('/Aboutus');
                  }}
                >
                  Aboutus
                </Button>
              </ButtonGroup>
            </Box>
          </CardFooter>
        </VStack>
      </Box>
    </Card>
  );
}
