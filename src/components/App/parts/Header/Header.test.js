import React from 'react';
import 'jest-styled-components';

import { renderWithTheme, wrapWithRouter } from '../../../../tests/helpers';
import theme from '../../../../styled/theme';

import Header from './Header';

test('Header renders correctly', () => {
  const rendered = renderWithTheme(
    wrapWithRouter(<Header>Header</Header>)
  ).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('background-color', theme.color.white);
});
