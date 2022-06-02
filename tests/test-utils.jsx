/**
 * @jest-environment jsdom
 */
import React from 'react';

import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
