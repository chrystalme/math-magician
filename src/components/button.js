import React from 'react';
import PropTypes from 'prop-types';

const getClass = (buttonName) => {
  const numbers = /[0-9]/;
  const operators = ['+', '-', 'x', '÷'];
  let classes = 'm-2 p-3 btn btn-';

  if (numbers.test(buttonName)) {
    classes += 'secondary';
  } else if (operators.includes(buttonName)) {
    classes += 'danger';
  } else {
    classes += 'info';
  }
  if (buttonName === '0') {
    classes += ' w-50';
  }
  return classes;
};

const Button = ({
  name, clickHandler, color, wide,
}) => (
  <input className={`${getClass(name)} ${color} ${wide}`} value={name} type="button" onClick={() => clickHandler(name)} />

);

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
