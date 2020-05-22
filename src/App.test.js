import React from 'react';
import { render } from '@testing-library/react';
import SplashPage from '../src/components/SplashPage';

test('renders Splash Page', () => {
  const { getByText } = render(<SplashPage />);
  const linkElement = getByText(/NEU AI Skunkworks COVID-19/i);
  expect(linkElement).toBeInTheDocument();
});
