import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/button';

describe('Button', () => {
  const clickHandler = () => { ''; };
  test('Button snapshot test', () => {
    const component = render(
      <Button name="AC" clickHandler={clickHandler} />,
    );
    expect(component).toMatchSnapshot();
  });
});
