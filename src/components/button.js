import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (
  <input type="button" value={name} onClick={() => clickHandler(name)} />

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
