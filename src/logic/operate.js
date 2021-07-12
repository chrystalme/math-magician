import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = Big(x.plus(y));
      break;
    case '-':
      result = Big(x.minus(y));
      break;
    case '÷':
      result = Big(x.div(y));
      break;
    case 'x':
      result = Big(x.times(y));
      break;
    default:
      return;
  }
  // eslint-disable-next-line consistent-return
  return (result);
};

export default operate;
