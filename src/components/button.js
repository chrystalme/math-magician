import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;

  const handleClick = () => {
    alert('clicked');
  };

  return (
    <input type="button" value={name} onClick={handleClick} />
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
