import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Icon({ name, size, color }) {
  return (
    <Container className="material-icons" color={color} size={size}>
      {name}
    </Container>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: null,
  color: null,
};

export default Icon;
