import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { privacyy } from '../assets/images/index.js';
export default function Policyscreen() {
  return (
    <>
      <Card>
        <Center>
          <Box
            backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 1), transparent), url(${privacyy})`}
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
                - Marketing and Communication: With your consent, we may send
                you promotional offers, newsletters, and updates about our
                services. You can opt-out of these communications at any time.
                <br />
                <br />
                3. Data Sharing and Security:
                <br />
                - Third-Party Partners: We may share your information with
                trusted third-party service providers who assist us in
                delivering our services, such as transportation companies and
                hotels.
                <br />
                - Legal Compliance: We may disclose your information to comply
                with legal obligations, enforce our policies, protect our rights
                and the rights of others, and respond to legal requests.
                <br />
                - Data Security: We implement industry-standard security
                measures to protect your personal information from unauthorized
                access, loss, or misuse.
                <br />
                <br />
                4. Data Retention:
                <br />
                - We retain your personal information for as long as necessary
                to fulfill the purposes outlined in this Privacy Policy, unless
                a longer retention period is required or permitted by law.
                <br />
                <br />
                5. Your Rights:
                <br />
                - Access and Control: You have the right to access, update, and
                correct your personal information. You may also request the
                deletion or restriction of your data, subject to legal and
                contractual obligations.
                <br />
                - Marketing Preferences: You can opt-out of receiving marketing
                communications from us by following the unsubscribe instructions
                provided in our emails or by contacting us directly.
                <br />
                <br />
                6. Children's Privacy:
                <br />
                - Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you become aware that a child has provided us with
                their information, please contact us to have it removed.
                <br />
                <br />
                7. Updates to Privacy Policy:
                <br />
                - We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We encourage you
                to review the policy periodically for any updates.
                <br />
                <br />
                If you have any questions or concerns about our Privacy Policy
                or the handling of your personal information, Contact Us!
              </p>
            </Text>
          </CardBody>
        </Box>
      </Card>
    </>
  );
}
