import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { about } from '../assets/images/index.js';
export default function Policyscreen() {
  return (
    <>
      <Card>
        <Center>
          <Box
            backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent), url(${about})`}
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
            <Text textColor={'white'}>ABOUT US</Text>
          </Box>
        </Center>
        <Box>
          <CardBody pt={10} textAlign={'center'}>
            <Text>
              <p>
                Privacy Policy - Rayamel Transfers
                <br />
                <br />
                Thank you for choosing Rayamel Transfers as your trusted travel
                partner. This Privacy Policy outlines how we collect, use, and
                protect your personal information when you engage with our
                transfer services in Portugal and neighboring countries. We are
                committed to safeguarding your privacy and ensuring the security
                of your information. Please read this policy carefully to
                understand how we handle your data.
                <br />
                <br />
                1. Information We Collect:
                <br />
                - Personal Information: We may collect personal information such
                as your name, contact details, and payment information when you
                book our transfer services.
                <br />
                - Travel Information: We may collect travel-related details such
                as flight details, hotel information, and destination
                preferences to facilitate your transfers.
                <br />
                <br />
                2. Use of Information:
                <br />
                - Service Delivery: We use your personal information to provide
                and manage our transfer services, including processing bookings,
                arranging transportation, and communicating with you.
                <br />
                - Improving Customer Experience: We may analyze your information
                to enhance our services, tailor our offerings to your
                preferences, and provide personalized recommendations.
                <br />
              </p>
            </Text>
          </CardBody>
        </Box>
      </Card>
    </>
  );
}
