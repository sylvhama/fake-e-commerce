import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Logo from './Logo';

test('Logo renders correctly', () => {
  const rendered = renderWithTheme(<Logo>Logo</Logo>).toJSON();
  expect(rendered).toMatchSnapshot();
});
