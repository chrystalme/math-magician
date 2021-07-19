import operate from '../logic/operate';

const x = 10;
const y = 34;
describe('operate', () => {
  test('sum of x and y', () => {
    const result = operate(x, y, '+');
    expect(result).toEqual('44');
  });
  test('subtract x from y', () => {
    const result = operate(x, y, '-');
    expect(result).toEqual('-24');
  });
  test('divide x and y', () => {
    const result = operate(y, x, '÷');
    expect(result).toEqual('3.4');
  });
  test('multiply x and y', () => {
    const result = operate(x, y, 'x');
    expect(result).toEqual('340');
  });
});
