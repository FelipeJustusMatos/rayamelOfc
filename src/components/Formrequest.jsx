import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Spacer,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export default function Tablerequest() {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <>
      <Card align="center">
        <CardHeader>
          <VStack spacing={3}>
            <Heading size="md">
              <Text as="b">BOOK NOW YOUR TRANSFER</Text>
            </Heading>
            <ButtonGroup
              justifyContent="center"
              alignItems="center"
              flexDirection={flexDirection}
            >
              <Box margin={2}>
                <Button color="black" borderRadius={'md'} bg="#ECB939">
                  AIRPORT PRIVATE TRANSFER
                </Button>
              </Box>
              <Spacer />
              <Button color="black" borderRadius={'md'} bg="#ECB939">
                POINT TO POINT
              </Button>
            </ButtonGroup>
          </VStack>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
            <FormLabel>Pick Up From</FormLabel>
            <Select placeholder="Select an Option">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormLabel>Drop Off to</FormLabel>
            <Select placeholder="Select an Option">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormLabel>Adults</FormLabel>
            <Select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
            <FormLabel>Children</FormLabel>
            <Select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
            <FormLabel>Babies</FormLabel>
            <Select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
          </FormControl>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button color={'black'} borderRadius={'md'} bg="#ECB939">
              Map
            </Button>
            <Button color={'black'} borderRadius={'md'} bg="#ECB939">
              Lets go
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
