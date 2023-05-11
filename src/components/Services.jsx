import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';

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
          <Card textAlign={'center'}>
            <CardHeader>
              <Center>
                <Image
                  borderRadius="md"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Center>
              <Heading size="md">AIRPORT</Heading>
            </CardHeader>
            <CardBody textAlign={'center'}>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> THEME PARKS</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> BEACHES</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Center>
    </>
  );
}
