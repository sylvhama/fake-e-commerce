import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Grid from './Grid';

test('Grid renders correctly', () => {
  const rendered = renderWithTheme(<Grid>Grid</Grid>).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('grid-template-columns', 'repeat(5,1fr)');
});

test('Grid renders correctly with 12 columns', () => {
  const rendered = renderWithTheme(<Grid columns={12}>Grid</Grid>).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('grid-template-columns', 'repeat(12,1fr)');
});
