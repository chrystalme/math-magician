import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '÷':
      result = x / y;
      break;
    case 'x':
      result = x * y;
      break;
    case '%':
      result = x / 100;
      break;
    default:
      return;
  }
  // eslint-disable-next-line consistent-return
  return (result);
};

export default operate;
