import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react';

export default function ContactInfo() {
  return (
    <Box bg="black" w="100%" p={4} color="white">
      <Flex
        justifyContent={['center', 'space-between']}
        alignItems="center"
        direction={['column', 'row']}
      >
        <Flex alignItems="center" pr={[0, 4]}>
          <FaMapMarkerAlt />
          <Text pl={2}>Faro, Algarve - Portugal</Text>
        </Flex>
        <Flex alignItems="center" pr={[0, 4]}>
          <FaEnvelope />
          <Text pl={2}>rayameltravel@gmail.com</Text>
        </Flex>
        <Flex alignItems="center">
          <FaPhone />
          <Text pl={2}>351 924 446 857</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
