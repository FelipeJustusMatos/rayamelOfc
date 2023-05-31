import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import CopyrightNotice from './CopyrightNotice';

export default function Footer() {
  return (
    <>
      <Box bg="black" w="100%" p={4} color="white">
        <Flex
          justifyContent={['center', 'space-between']}
          alignItems="center"
          direction={['column', 'row']}
        >
          {/* location */}
          <Flex alignItems="center" pr={[0, 4]}>
            <FaMapMarkerAlt />
            <Text pl={2}>Faro, Algarve - Portugal</Text>
          </Flex>
          {/* e-mail */}
          <Flex alignItems="center" pr={[0, 4]}>
            <FaEnvelope />
            <Text pl={2}>rayameltravel@gmail.com</Text>
          </Flex>
          {/* phone */}
          <Flex alignItems="center">
            <FaPhone />
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B5579999441661&text&type=phone_number&app_absent=0"
              isExternal
            >
              351 924 446 857
            </Link>
          </Flex>

          <CopyrightNotice />
        </Flex>
      </Box>
    </>
  );
}
