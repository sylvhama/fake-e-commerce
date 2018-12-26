import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import ErrorMsg from './ErrorMsg';

test('ErrorMsg renders correctly', () => {
  const rendered = renderWithTheme(<ErrorMsg>ErrorMsg</ErrorMsg>).toJSON();
  expect(rendered).toMatchSnapshot();
});
