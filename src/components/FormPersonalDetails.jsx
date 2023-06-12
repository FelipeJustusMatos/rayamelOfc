import { Card, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

function FormPersonalDetails() {
  const initialValues = {
    nome: '',
    sobrenome: '',
    dataViajem: '',
    horadeviajem: '',
    endereço: '',
    cidade: '',
    email: '',
    celular: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(false);
  };

  return (
    <VStack minH={'50vh'}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, isSubmitting }) => (
          <Form>
            <Card>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Select option"
                name="nome"
                required
                borderColor="black"
              />
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Select option"
                name="sobrenome"
                required
                borderColor="black"
              />
            </Card>

            <Card display={'flex-box'}>
              <Input
                name="dataViajem"
                type="date"
                label="Data"
                borderColor="black"
                required
              />
              <Input
                name="horadeviajem"
                type="time"
                label="hora"
                required
                borderColor="black"
              />
            </Card>

            <Card display={'flex-box'}>
              <Input name="endereço" borderColor="black" />
              <Input
                name="cidade"
                // disabled={!values.endereço}
                borderColor="black"
              />
            </Card>

            <Card display={'flex-box'}>
              <Input name="email" type="email" required borderColor="black" />
              <Input
                name="celular"
                type="number"
                required
                borderColor="black"
              />
            </Card>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default FormPersonalDetails;
