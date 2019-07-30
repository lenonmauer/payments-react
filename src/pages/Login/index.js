import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import * as Yup from 'yup';

import { actions as ToastrActions } from 'react-redux-toastr';
import { AuthActions } from '~/store/ducks/auth';
import { toastrParams } from '~/helpers/toastr';

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
    console.log(data);

    if (data.email === 'a') {
      dispatch(AuthActions.setUser(data));
      dispatch(push('/dashboard'));
      dispatch(ToastrActions.add(toastrParams('Login efetuado com sucesso.')));
    }
    else {
      dispatch(ToastrActions.add(toastrParams('Ocorreu um erro no login.', 'danger')));
    }
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
