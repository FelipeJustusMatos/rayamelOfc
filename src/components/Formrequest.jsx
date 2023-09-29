import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  HStack
} from '@chakra-ui/react';
import FormDestiny from './FormDestiny';
import FormAddress from './FormAddress';
import FormDetailsTravel from './FormDetailsTravel';
import emailjs from '@emailjs/browser';

function Formrequest() {
  const Steps = [1, 2, 3];
  const [step, setStep] = useState(1);
  const [enviado, setEnviado] = useState(false);

  const [adults, setAdults] = useState("Um Adulto");
  const [children, setChildren] = useState("");
  const [babies, setBabies] = useState("");
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');

  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [dateTimePickUp, setDateTimePickUp] = useState("");
  const [returnBook, setReturnBook] = useState("");
  const [promo, setPromo] = useState("");

  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const fullName = `${fistName} + ${lastName}`;

  const handleDestinyChange = (pickup, dropOff, adults, children, babies) => {
    setAdults(adults);
    setChildren(children);
    setBabies(babies);
    setPickupLocation(pickup);
    setDropOffLocation(dropOff);
  };

  const handleDetailsChange = (newDate, hora, dateTimePickUp, returnBook, promo) => {
    setDate(newDate);
    setHora(hora);
    setDateTimePickUp(dateTimePickUp);
    setReturnBook(returnBook);
    setPromo(promo);
  };

  const handleAddressChange = ({ firstName, lastName, email, phone, address }) => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  };

  const allDates = {
    pickupLocation,
    dropOffLocation,
    adults,
    children,
    babies,
    date,
    hora,
    dateTimePickUp,
    returnBook,
    promo,
    email,
    phone,
    address,
  };

  const isStep1Valid = pickupLocation !== '' && dropOffLocation !== '';
  const isStep2Valid = date !== '' && hora !== '' && dateTimePickUp !== '' && returnBook !== '';

  const isInputInvalid = (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid);

  const handleNextStep = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  };

  const Step = ({ index, active }) => {
    return (
      <Center>
        <Button
          py={1}
          px={4}
          borderRadius={2}
          bg={active ? '#ECB939' : 'gray.300'}
          color={active ? 'white' : 'blackAlpha'}
          style={{ scale: active ? '1.2' : 'none' }}
        >
          {index}
        </Button>
      </Center>
    );
  };

  function sendEmail(e) {

    const templateParams = {
      from_name: fullName,
      message: JSON.stringify(allDates),
      email: email,
    };

    emailjs
      .send("service_wnsgv49", "template_6rn1cu8", templateParams, "AHp6no9dogt9WMJcp")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setEnviado(true);

        // Limpar os campos após o envio bem-sucedido
        setAdults("Um Adulto");
        setChildren("");
        setBabies("");
        setPickupLocation("");
        setDropOffLocation("");
        setDate("");
        setHora("");
        setDateTimePickUp("");
        setReturnBook("");
        setPromo("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        console.log("ERRO: ", err);
      });
  }


  return (
    <>
      <Card align="center" justifyContent="center">
        <Center minH={600} maxW={500} w="100%" flexDir="column">
          <HStack spacing={4}>
            {Steps.map(item => (
              <Step key={item} index={item} active={step === item} />
            ))}
          </HStack>

          <Divider my={4} borderColor="blackAlpha.700" />

          <Box w="80%">
            {step === 1 && (
              <FormDestiny
                adults={adults}
                children={children}
                babies={babies}
                pickupLocation={pickupLocation}
                dropOffLocation={dropOffLocation}
                OnDestinyChange={handleDestinyChange}
              />
            )}
            {step === 2 && (
              <FormDetailsTravel
                date={date}
                hora={hora}
                dateTimeBook={dateTimePickUp}
                dateTimePickUp={dateTimePickUp}
                returnBook={returnBook}
                promo={promo}
                OnDetailsChange={handleDetailsChange}
              />
            )}
            {step === 3 && (
              <FormAddress
                email={email}
                phone={phone}
                address={address}
                OnAddressChange={handleAddressChange}
              />
            )}
          </Box>

          {enviado ? (
            <Box>
              <h1>Dados enviados com sucesso! Verifique seu e-mail</h1>
            
            </Box>
          ) : (
            <HStack mt={4}>
              <Button
                onClick={() => setStep(step - 1)}
                isDisabled={step <= 1}
              >
                Voltar
              </Button>
              <Button
                bg="#ECB939"
                onClick={step === 3 ? sendEmail : handleNextStep}
                isDisabled={isInputInvalid}
              >
                {step === 3 ? 'Enviar' : 'Próximo'}
              </Button>
            </HStack>
          )}
        </Center>
      </Card>
    </>
  );
}

export default Formrequest;
