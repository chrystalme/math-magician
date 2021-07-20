import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Routes from '../components/routes';

import Quotes from '../components/quotes';

describe('Quotes', () => {
  test('quotes component is rendered correctly', () => {
    const component = renderer.create(
      <Routes><Quotes /></Routes>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Text match Home page test', () => {
    const { getByText } = render(<Routes><Quotes /></Routes>);
    const text = getByText('Math-magician');
    // eslint-disable-next-line no-unused-expressions
    expect(text).toBeInTheDocument;
  });
});
