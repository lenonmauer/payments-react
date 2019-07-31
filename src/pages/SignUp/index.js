import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { SignupActions } from '~/store/ducks/signup';

import {
  Button, Label, Input, FormGroup, Card, Form,
} from '~/styles/components';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo é obrigatório.')
    .email('E-mail inválido.'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo ${min} caracteres.')
    .required('Este campo é obrigatório.'),
  password_confirmation: Yup.string()
    .equals([Yup.ref('password'), ''], 'As senhas não coincidem.')
    .required('Este campo é obrigatório.'),
});

function SignUp() {
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    dispatch(SignupActions.postSignupRequest(data));
  }

  return (
    <Container>
      <Card>
        <Form schema={schema} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">
              E-mail
              <Input name="email" type="text" placeholder="Informe o seu e-mail..." />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">
              Senha
              <Input name="password" placeholder="Informe a sua senha..." type="password" />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">
              Confirmação da Senha
              <Input
                name="password_confirmation"
                placeholder="Informe novamente sua senha..."
                type="password"
              />
            </Label>
          </FormGroup>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default SignUp;
