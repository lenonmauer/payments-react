import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { LoginActions } from '~/store/ducks/login';

import {
  Button, Label, Input, FormGroup, Card, Form,
} from '~/styles/components';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo é obrigatório.')
    .email('E-mail inválido.'),
  password: Yup.string().required('Este campo é obrigatório.'),
});

function Login() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(LoginActions.postLoginRequest(data));
  }

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit} schema={schema}>
          <FormGroup>
            <Label htmlFor="email">
              E-mail
              <Input name="email" type="text" placeholder="Informe seu e-mail..." />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">
              Senha
              <Input name="password" placeholder="Informe sua senha..." type="password" />
            </Label>
          </FormGroup>

          <Button type="submit">Entrar</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
