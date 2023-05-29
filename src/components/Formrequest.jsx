import {
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Select,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Tablerequest() {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <>
      <Card align="center">
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
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
