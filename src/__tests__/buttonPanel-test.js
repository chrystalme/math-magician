import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/buttonPanel';

describe('ButtonPanel', () => {
  const clickHandler = () => { ''; };
  test('ButtonPanel snapshot test', () => {
    const component = renderer.create(
      <ButtonPanel clickHandler={clickHandler} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
