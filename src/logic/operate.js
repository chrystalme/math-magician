import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  try {
    const x = new Big(numberOne);
    const y = new Big(numberTwo);
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
    result += '';
    // eslint-disable-next-line consistent-return
    return (result);
  } catch (error) {
    result = undefined;
  }
};

export default operate;
