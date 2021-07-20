import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Display from '../components/display';

describe('Display', () => {
  test('display component is rendered correctly', () => {
    const component = render(
      <Display />,
    );
    expect(component).toMatchSnapshot();
  });
});
