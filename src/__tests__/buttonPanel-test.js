import React from 'react';
import { render } from '@testing-library/react';
import ButtonPanel from '../components/buttonPanel';

describe('ButtonPanel', () => {
  const clickHandler = () => { ''; };
  test('ButtonPanel snapshot test', () => {
    const component = render(
      <ButtonPanel clickHandler={clickHandler} />,
    );
    expect(component).toMatchSnapshot();
  });
});
