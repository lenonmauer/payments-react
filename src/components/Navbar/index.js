import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BrandIcon from '~/assets/images/brand.png';
import Icon from '~/components/Icon';

import {
  Container, Brand, Navigation, NavigationLink, MenuRightWrapper,
} from './styles';

const Navbar = ({ pathname }) => (
  <Container>
    <Brand src={BrandIcon} />

    <Navigation>
      <NavigationLink to="/dashboard">Início</NavigationLink>

      <MenuRightWrapper>
        <NavigationLink to="/logout">
          <Icon name="exit_to_app " />
        </NavigationLink>
      </MenuRightWrapper>
    </Navigation>
  </Container>
);

Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps)(Navbar);
