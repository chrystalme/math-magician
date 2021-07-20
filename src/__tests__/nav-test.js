import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Routes from '../components/routes';

import Nav from '../components/nav';

describe('Nav', () => {
  test('nav component is rendered correctly', () => {
    const component = render(
      <Routes>
        <Nav />
        ,
      </Routes>,
    );
    expect(component).toMatchSnapshot();
  });
});
