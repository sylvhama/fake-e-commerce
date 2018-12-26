import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../../tests/helpers';

import Wrapper from './Wrapper';

test('Wrapper renders correctly', () => {
  const rendered = renderWithTheme(<Wrapper>Wrapper</Wrapper>).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('min-height', 'calc(100vh - 60px)');
});
