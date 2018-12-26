import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../styled/theme';

export function wrapWithTheme(component) {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>;
}

export function wrapWithRouter(component) {
  return <Router>{component}</Router>;
}

export function renderWithTheme(component) {
  return renderer.create(wrapWithTheme(component));
}

export function renderWithRouter(component) {
  return renderer.create(wrapWithRouter(component));
}
