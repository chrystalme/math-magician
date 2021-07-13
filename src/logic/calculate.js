import operate from './operate';

const calculate = (
  calculatorData = { total: undefined, next: undefined, operation: undefined },
  buttonName,
) => {
  const { total, next, operation } = calculatorData;
  const result = calculatorData;
  const numbers = /[0-9]/;
  const operators = ['+', '-', 'x', '÷'];

  if (buttonName === 'AC') {
    result.total = undefined;
    result.next = undefined;
    result.operation = undefined;
  }

  if (buttonName === '%') {
    if (total && !next) {
      result.total = operate(total, 100, '÷');
    }
    if (next) {
      result.next = operate(next, 100, '÷');
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }
    if (total && !next && !total.includes('.')) {
      result.total = `${total}.`;
    }
    if (next && !next.includes('.')) {
      result.next = `${next}.`;
    }
  }

  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = operate(total, -1, 'x');
    }
    if (next) {
      result.next = operate(next, -1, 'x');
    }
  }

  if (operators.includes(buttonName)) {
    const nextOperand = buttonName === '=' ? undefined : buttonName;
    if (total && next && operation) {
      result.total = operate(total, next, operation);
      result.next = undefined;
      result.operation = nextOperand;
    }
    if (total && !next) {
      result.operation = nextOperand;
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
      result.next = undefined;
      result.operation = undefined;
    }
    if (total && !next) {
      result.total = total;
    }
  }
  return result;
};
export default calculate;
