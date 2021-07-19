import calculate from '../logic/calculate';

describe('Calculate logic', () => {
  test('AC button works as expected', () => {
    const result = calculate({ total: '3', next: '.', operation: '' }, 'AC');
    expect(result.total).toBe(undefined);
  });
  test('+ button works as expected', () => {
    const result = calculate({ total: '3', next: '7', operation: '+' }, '+');
    expect(result.total).toEqual('10');
  });
  test('- button works as expected', () => {
    const result = calculate({ total: '7', next: '3', operation: '-' }, '=');
    expect(result.total).toEqual('4');
  });
  test('% button works as expected', () => {
    const result = calculate({ total: '3', next: '', operation: '' }, '%');
    expect(result.total).toEqual('0.03');
  });
  test('+/- button works as expected', () => {
    const result = calculate({ total: '3', next: '', operation: '' }, '+/-');
    expect(result.total).toEqual('-3');
  });
  test('= button works as expected', () => {
    const result = calculate({ total: '3', next: '7', operation: '+' }, '=');
    expect(result.total).toEqual('10');
  });
  test('. button works as expected', () => {
    const result = calculate({ total: '3', next: '', operation: '' }, '.');
    expect(result.total).toEqual('3.');
  });
  test('x button works as expected', () => {
    const result = calculate({ total: '3', next: '3', operation: 'x' }, '=');
    expect(result.total).toEqual('9');
  });
  test('÷ button works as expected', () => {
    const result = calculate({ total: '3', next: '3', operation: '÷' }, '=');
    expect(result.total).toEqual('1');
  });
});
