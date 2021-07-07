import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;
  const result = calculatorData;
  const numbers = /[0-9]/;
  const operators = ['+', '-', 'x', '÷', '%'];

  if (buttonName === 'AC') {
    result.total = undefined;
    result.next = undefined;
    result.operation = undefined;
  }

  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }
    if (total && next && total.indexOf('.') === -1) {
      result.total = '{total}.';
    }
    if (next && next.indexOf('.') === -1) {
      result.next = '{next}.';
    }
  }

  if (operators.includes(buttonName) /* && buttonName === operation */) {
    if (total && next) {
      result.total = operate(total, next, buttonName);
    }
  }
  return result;
};
export default calculate;
