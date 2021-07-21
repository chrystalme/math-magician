import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routes from '../components/routes';
import Home from '../components/home';

describe('Home', () => {
  test('Text match Home page test', () => {
    const { getByText } = render(<Routes><Home /></Routes>);
    const text = getByText('Math-magician');
    expect(text).toBeInTheDocument();
  });
  test('Test Home page snapshot', () => {
    const { getByText } = render(<Routes><Home /></Routes>);
    const text = getByText('Math-magician');
    expect(text).toMatchSnapshot();
  });
});
