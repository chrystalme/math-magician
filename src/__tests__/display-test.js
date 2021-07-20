import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Display from '../components/display';

describe('Display', () => {
  test('display component is rendered correctly', () => {
    const component = renderer.create(
      <Display />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
