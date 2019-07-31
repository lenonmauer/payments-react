import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 40px;

  & > div {
    flex: 0 1 350px;
  }
`;
