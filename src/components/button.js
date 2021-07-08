import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, handleClick } = props;

  return (
    <input type="button" value={name} onClick={handleClick} />
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
