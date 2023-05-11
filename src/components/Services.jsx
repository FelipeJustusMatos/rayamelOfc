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
import { airport, beach, park } from '../assets/images/index.js';

export default function Services() {
  return (
    <>
      <Center>
        <SimpleGrid
          marginTop={5}
          spacing={4}
          columns={{ sm: 1, md: 3 }}
          w={'800px'}
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
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <Button>View here</Button>
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
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <Button>View here</Button>
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
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Center>
          </Card>
        </SimpleGrid>
      </Center>
    </>
  );
}
