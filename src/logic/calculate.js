import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;
  const result = calculatorData;
  if (['+', '-', 'x', '÷', '%'].includes(buttonName) && buttonName === operation) {
    if (total && next) {
      result.total = operate(total, next, buttonName);
    }
  }
};
export default calculate;
