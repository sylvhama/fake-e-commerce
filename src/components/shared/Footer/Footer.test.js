import React from 'react';
import 'jest-styled-components';

import { renderWithTheme, wrapWithRouter } from '../../../tests/helpers';
import theme from '../../../styled/theme';

import Footer from './Footer';

test('Footer renders correctly', () => {
  const rendered = renderWithTheme(
    wrapWithRouter(<Footer>Footer</Footer>)
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
