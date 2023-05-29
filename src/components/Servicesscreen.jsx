import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { airport, beach, park, car } from '../assets/images/index.js';
export default function Servicesscreen() {
  const navigate = useNavigate();
  return (
    <>
      <Center>
        <Box
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 1), transparent), url(${car})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          w="100%"
          minHeight={['20vh', '30vh']}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={'5xl'}
        >
          <Text textColor={'white'}>OUR SERVICES</Text>
        </Box>
      </Center>
      <Center>
        <Flex pt={5}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxW={'1000px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={airport}
              alt="airport"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Airport</Heading>

                <Text py="2">
                  High-quality transport service with experienced multilingual
                  drivers and versatile fleet. Seamless airport transfers to
                  renowned Algarve towns like Albufeira, Lagos, Vilamoura, and
                  more.
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  bg="#ECB939"
                  onClick={() => {
                    navigate('/Booking');
                  }}
                >
                  Click here
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </Center>
      <Center>
        <Flex pt={5}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxW={'1000px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={park}
              alt="airport"
            />
            <Stack>
              <CardBody>
                <Heading size="md">Theme Park</Heading>

                <Text py="2">
                  Convenient and comfortable transfers between Algarve hotels
                  and top amusement parks. Flexible scheduling and online
                  reservations for a hassle-free and enjoyable experience.
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  bg="#ECB939"
                  onClick={() => {
                    navigate('/Booking');
                  }}
                >
                  Click here
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </Center>
      <Center>
        <Flex pt={5}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxW={'1000px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={beach}
              alt="airport"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Beach</Heading>

                <Text py="2">
                  Premier transportation services for exploring Algarve's
                  beautiful beaches. Trust our experienced drivers for a
                  memorable and convenient beach getaway.
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  bg="#ECB939"
                  onClick={() => {
                    navigate('/Booking');
                  }}
                >
                  Click here
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </Center>
    </>
  );
}
