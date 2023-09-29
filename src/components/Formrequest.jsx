import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  HStack
} from '@chakra-ui/react';
import { useState } from 'react';
import FormDestiny from './FormDestiny';
import FormAddress from './FormAddress';
import FormDetailsTravel from './FormDetailsTravel';

function Formrequest() {
  const Steps = [1, 2, 3];
  const [step, setStep] = useState(1);
  
  //Constantes Do FormDestiny
  const [adults, setAdults] = useState("Um Adulto");
  const [children, setChildren] = useState("");
  const [babies, setBabies] = useState("");
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');

    
    const handleDestinyChange = (pickup, dropOff,adults,children,babies) => {
    setAdults(adults);
    setChildren(children);
    setBabies(babies);
    setPickupLocation(pickup);
    setDropOffLocation(dropOff);
  };

  const allDates = {
    pickupLocation,
    dropOffLocation,
    adults,
    children,
    babies
  }

  console.log(`Alldates: ${JSON.stringify(allDates)} `);
  console.log(`Location aqui: ${pickupLocation}`)
  console.log(`DropOff aqui: ${dropOffLocation}`)
  console.log(`adults aqui: ${adults}`)
  console.log(`children aqui: ${children}`)
  console.log(`babies aqui: ${JSON.stringify(babies)}`)

  
  //Constantes do FormDetailsTravel
  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [dateTimePickUp, setDateTimePickUp] = useState("");
  const [returnBook, setReturnBook] = useState("");
  const [dateTimeBook, setDateTimeBook] = useState("");
  const [retorno, setRetorno] = useState("");
  const [promo, setPromo] = useState("");

  const handleDetailsChange = (date, hora, dateTimePickUp,returnBook, dateTimeBook, retorno, promo) => {
    setDate(date);
    setHora(hora);
    setDateTimePickUp(dateTimePickUp);
    setReturnBook(returnBook);
    setDateTimeBook(dateTimeBook);
    setRetorno(retorno);
    setPromo(promo);
  };

  //Constantes do FormAddress
  const [fistName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const fullName = (`${fistName} + ${lastName}`)

  const handleAddressChange = (email,address, phone) => {
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  }





  const isInputInvalid = pickupLocation === '' || dropOffLocation === '';

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
                adults ={adults}
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
                dateTimeBook={dateTimeBook}
                dateTimePickUp={dateTimePickUp}
                returnBook={returnBook}
                retorno={retorno}
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

          <HStack mt={4}>
            <Button
              onClick={() => setStep(step - 1)}
              isDisabled={step <= 1 ? true : false}
            >
              Voltar
            </Button>
            <Button
              bg="#ECB939"
              onClick={handleNextStep}
              isDisabled={isInputInvalid}
            >
              {step === 3 ? 'Enviar' : 'Próximo'}
            </Button>
          </HStack>
        </Center>
      </Card>
    </>
  );
}

export default Formrequest;
