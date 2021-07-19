import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/app';

describe('App', () => {
  test('App snapshot test', () => {
    const component = renderer.create(
      <App />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
