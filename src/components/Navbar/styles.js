import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 80px;
  background: ${colors.primary.color};
  padding: 5px 20px;
`;

export const Brand = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${colors.primary.contrast};
  font-size: 16px;
  line-height: 18px;
  align-items: center;

  & + a {
    margin-left: 20px;
  }
`;

export const MenuRightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    padding: 4px;
  }
`;
