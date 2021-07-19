import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/button';

describe('Button', () => {
  const clickHandler = () => { ''; };
  test('Button snapshot test', () => {
    const component = renderer.create(
      <Button name="AC" clickHandler={clickHandler} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
