import React from 'react';
import PropTypes from 'prop-types';

// const styles = {
//   color: 'white', padding: 5, backgroundColor: 'blue',
// };
const getClass = (buttonName) => {
  const numbers = /[0-9]/;
  const operators = ['+', '-', 'x', '÷'];
  let classes = 'm-3 p-3 btn btn-';

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

// const getWide = (buttonName) => {
//   const wide = buttonName === '0' ? 'w-50' : '';
//   return wide;
// };

const Button = ({
  name, clickHandler, /* color, wide, */
}) => (
  <input className={getClass(name)} value={name} type="button" onClick={() => clickHandler(name)} />

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
