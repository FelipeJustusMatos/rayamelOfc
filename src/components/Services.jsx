import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { airport, beach, park } from '../assets/images/index.js';

export default function Services() {
  const navigate = useNavigate();
  return (
    <>
      <Center pt={5}>
        <Card>
          <Center>
            <Box borderBottom={'1px solid black'}>
              <Text textAlign={'center'} as="b">
                SOME FREQUENT DESTINATIONS
              </Text>
            </Box>
          </Center>

          <SimpleGrid
            marginTop={5}
            spacing={4}
            columns={{ sm: 1, md: 3 }}
            flexDirection={'row'}
          >
            {/* AIRPORT */}
            <Card textAlign={'center'} shadow={'xl'}>
              <CardHeader>
                <Center>
                  <Box>
                    <Image src={airport} alt="airport" borderRadius="md" />
                  </Box>
                </Center>
                <Heading size="md">AIRPORT</Heading>
              </CardHeader>
              <CardBody textAlign={'center'}>
                <Text>
                  High-quality transport service with experienced multilingual
                  drivers and versatile fleet. Seamless airport transfers to
                  renowned Algarve towns like Albufeira, Lagos, Vilamoura, and
                  more.
                </Text>
              </CardBody>
              <Center>
                <CardFooter>
                  <Button
                    bg="#ECB939"
                    onClick={() => {
                      navigate('/Ourservices');
                    }}
                  >
                    View here
                  </Button>
                </CardFooter>
              </Center>
            </Card>

            {/* PARK */}
            <Card textAlign={'center'} shadow={'xl'}>
              <CardHeader>
                <Center>
                  <Box>
                    <Image src={park} alt="airport" borderRadius="md" />
                  </Box>
                </Center>
                <Heading size="md">THEME PARK</Heading>
              </CardHeader>
              <CardBody textAlign={'center'}>
                <Text>
                  Convenient and comfortable transfers between Algarve hotels
                  and top amusement parks. Flexible scheduling and online
                  reservations for a hassle-free and enjoyable experience.
                </Text>
              </CardBody>
              <Center>
                <CardFooter>
                  <Button
                    bg="#ECB939"
                    onClick={() => {
                      navigate('/Ourservices');
                    }}
                  >
                    View here
                  </Button>
                </CardFooter>
              </Center>
            </Card>

            {/* BEACH */}
            <Card textAlign={'center'} shadow={'xl'}>
              <CardHeader>
                <Center>
                  <Box>
                    <Image src={beach} alt="airport" borderRadius="md" />
                  </Box>
                </Center>
                <Heading size="md">BEACH</Heading>
              </CardHeader>
              <CardBody textAlign={'center'}>
                <Text>
                  Premier transportation services for exploring Algarve's
                  beautiful beaches. Trust our experienced drivers for a
                  memorable and convenient beach getaway.
                </Text>
              </CardBody>
              <Center>
                <CardFooter>
                  <Button
                    bg="#ECB939"
                    onClick={() => {
                      navigate('/Ourservices');
                    }}
                  >
                    View here
                  </Button>
                </CardFooter>
              </Center>
            </Card>
          </SimpleGrid>
        </Card>
      </Center>
    </>
  );
}
