import operate from './operate';

const calculate = (
  calculatorData = { total: undefined, next: undefined, operation: undefined },
  buttonName,
) => {
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

  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = operate(total, -1, 'x');
    }
    if (next) {
      result.total = operate(next, -1, 'x');
    }
  }

  if (operators.includes(buttonName)) {
    if (total && next) {
      result.total = operate(total, next, buttonName);
    }
  }

  if (numbers.test(buttonName)) {
    if (!total || total === '0') {
      result.total = buttonName;
    }
    if (total && total !== '0' && !next && !operation) {
      result.total += buttonName;
      if (buttonName === '0' && total === '0') result.total = total;
    }
    if (total && operation && (next === '0' || !next)) {
      result.next = buttonName;
    }
    if (total && next && operation && next !== '0') {
      result.next += buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next) {
      result.total = operate(total, next, operation);
    }
    if (total && !next) {
      result.total = total;
    }
  }
  return result;
};
export default calculate;
