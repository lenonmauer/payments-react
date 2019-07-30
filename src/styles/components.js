import styled from 'styled-components';
import { Input as UInput, Form as UForm } from '@rocketseat/unform';

import colors from '~/styles/colors';

export const Card = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: ${colors.white};
`;

export const Form = styled(UForm)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background: ${colors.primary.color};
  color: ${colors.primary.contrast};
  font-weight: 500;

  &:hover {
    background: ${colors.darker};
  }
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 600;
  font-size: 12px;
  color: ${colors.dark};

  & > input {
    margin-top: 5px;
  }

  & > input + span {
    margin-top: 5px;
    margin-left: 5px;
    font-size: 10px;
    font-weight: 400;
  }
`;

export const Input = styled(UInput)`
  border: 1px solid ${colors.light};
  border-radius: 4px;
  padding: 4px 8px;
  height: 36px;
  width: 100%;
  transition: all 0.2s linear;
  color: ${colors.dark};

  &:focus {
    border: 1px solid ${colors.regular};
  }
`;
