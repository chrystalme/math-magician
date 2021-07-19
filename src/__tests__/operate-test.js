import operate from '../logic/operate';

const x = 10;
const y = 34;
describe('operate', () => {
  test('sum of two x and y', () => {
    const result = operate(x, y, '+');
    expect(result).toEqual('44');
  });
});
