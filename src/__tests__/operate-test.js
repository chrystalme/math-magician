import operate from '../logic/operate';

const x = 10;
const y = 34;
describe('operate', () => {
  test('sum of x and y', () => {
    const result = operate(x, y, '+');
    expect(result).toEqual('44');
  });
  test('sum of x and y', () => {
    const result = operate(x, y, '+');
    expect(result).not.toEqual('0');
  });
  test('subtract x from y', () => {
    const result = operate(x, y, '-');
    expect(result).toEqual('-24');
  });
  test('subtract x from y', () => {
    const result = operate(x, y, '-');
    expect(result).not.toEqual('24');
  });
  test('divide x and y', () => {
    const result = operate(y, x, '÷');
    expect(result).toEqual('3.4');
  });
  test('divide x and y', () => {
    const result = operate(y, x, '÷');
    expect(result).not.toEqual('3');
  });
  test('divide 0 and y', () => {
    const zero = 0;
    const result = operate(y, zero, '÷');
    expect(result).toBeUndefined();
  });
  test('divide 0 and y', () => {
    const zero = 0;
    const result = operate(zero, y, '÷');
    expect(result).toEqual('0');
  });
  test('multiply x and y', () => {
    const result = operate(x, y, 'x');
    expect(result).toEqual('340');
  });
  test('multiply x and y', () => {
    const result = operate(x, y, 'x');
    expect(result).not.toEqual('34');
  });
});
