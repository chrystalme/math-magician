import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Routes from '../components/routes';

import Quotes from '../components/quotes';

describe('Quotes', () => {
  test('quotes component is rendered correctly', () => {
    const component = render(
      <Routes><Quotes /></Routes>,
    );
    expect(component).toMatchSnapshot();
  });

  test('Text match Home page test', () => {
    const { getByText } = render(<Routes><Quotes /></Routes>);
    const text = getByText('Math-magician');
    expect(text).toBeInTheDocument();
  });
});
