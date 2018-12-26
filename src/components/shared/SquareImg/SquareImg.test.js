import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import SquareImg from './SquareImg';

test('SquareImg renders correctly', () => {
  const rendered = renderWithTheme(<SquareImg src="src" alt="alt" />).toJSON();
  expect(rendered).toMatchSnapshot();
});
