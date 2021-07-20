import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from '../components/app';
import Routes from '../components/routes';

describe('App', () => {
  test('App snapshot test', () => {
    const component = renderer.create(
      <Routes>
        <App />
      </Routes>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders button AC', () => {
    render(
      <Routes>
        <App />
      </Routes>,
    );
    const buttonElement = screen.getByText(/AC/i);
    // eslint-disable-next-line no-unused-expressions
    expect(buttonElement).toBeInTheDocument;
  });
  test('renders button x', () => {
    render(
      <Routes>
        <App />
      </Routes>,
    );
    const buttonElement = screen.getByText(/x/i);
    // eslint-disable-next-line no-unused-expressions
    expect(buttonElement).toBeInTheDocument;
  });
  test('renders button -', () => {
    render(
      <Routes>
        <App />
      </Routes>,
    );
    const buttonElement = screen.getByText(/-/i);
    // eslint-disable-next-line no-unused-expressions
    expect(buttonElement).toBeInTheDocument;
  });
});
