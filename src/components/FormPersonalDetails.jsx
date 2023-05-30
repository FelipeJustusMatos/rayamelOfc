import { Flex, Input } from '@chakra-ui/react';
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

  //   const [input, setInput] = useState('');

  //   const handleInputChange = e => setInput(e.target.value);

  //   const isError = input === '';

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(false);
  };

  return (
    <Flex>
      <Flex>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {({ values, isSubmitting }) => (
            <Form style={{ width: '90%' }}>
              <Flex>
                <Input name="nome" required borderColor="black" />
                <Input name="sobrenome" required borderColor="black" />
              </Flex>

              <Flex>
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
              </Flex>

              <Flex>
                <Input name="endereço" borderColor="black" />
                <Input
                  name="cidade"
                  disabled={!values.endereço}
                  borderColor="black"
                />
              </Flex>

              <Flex>
                <Input name="email" type="email" required borderColor="black" />
                <Input
                  name="celular"
                  type="number"
                  required
                  borderColor="black"
                />
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}

export default FormPersonalDetails;
