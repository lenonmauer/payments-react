import React from 'react';
import { useSelector } from 'react-redux';

import BrandIcon from '~/assets/images/brand.png';
import Icon from '~/components/Icon';

import {
  Container, Brand, Navigation, NavigationLink, MenuRightWrapper,
} from './styles';

function Navbar() {
  const { isLogged } = useSelector(state => state.auth);

  const loggedInRoutes = [
    {
      icon: 'exit_to_app',
      label: 'Sair',
      url: '/logout',
    },
  ];

  const loggedOutRoutes = [
    {
      icon: 'exit_to_app',
      label: 'Cadastro',
      url: '/signup',
    },
    {
      icon: 'exit_to_app',
      label: 'Login',
      url: '/login',
    },
  ];

  return (
    <Container>
      <Navigation>
        <NavigationLink to="/">
          <Brand src={BrandIcon} />
        </NavigationLink>

        <MenuRightWrapper>
          {(isLogged ? loggedInRoutes : loggedOutRoutes).map(({ url, label, icon }) => (
            <NavigationLink key={url} to={url}>
              <Icon name={icon} />
              &nbsp;
              {label}
            </NavigationLink>
          ))}
        </MenuRightWrapper>
      </Navigation>
    </Container>
  );
}

export default Navbar;
