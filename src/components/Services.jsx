import {
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
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
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
              <Heading size="md"> Customer dashboard</Heading>
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
              <Heading size="md"> Customer dashboard</Heading>
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
