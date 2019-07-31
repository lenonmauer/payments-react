import React, { useState } from 'react';
import {
  PaymentInputsWrapper,
  PaymentInputsContainer,
  usePaymentInputs,
} from 'react-payment-inputs';
import images from 'react-payment-inputs/lib/images';

import {
  Button, Label, Input, FormGroup, Card, Form,
} from '~/styles/components';

import { Container } from './styles';

function Payment() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('1026');
  const [cvc, setCvc] = useState('');

  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <PaymentInputsWrapper>
          <Input name="number" />
          <Input name="expiry" />
          <Input name="cvc" />

          <Button type="submit">Opa</Button>
        </PaymentInputsWrapper>
      </Form>
    </Container>
  );
}

export default Payment;
