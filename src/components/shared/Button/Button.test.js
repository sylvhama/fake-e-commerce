import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';
import theme from '../../../styled/theme';

import Button from './Button';

test('Button renders correctly', () => {
  const rendered = renderWithTheme(<Button>Button</Button>).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('font-weight', 'normal');
  expect(rendered).toHaveStyleRule('background-color', theme.color.lightGrey);
  expect(rendered).toHaveStyleRule('border-radius', theme.radius);
});

test('Button renders correctly with props', () => {
  const rendered = renderWithTheme(
    <Button bold rounded color="primary">
      Button
    </Button>
  ).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('font-weight', 'bold');
  expect(rendered).toHaveStyleRule('background-color', theme.color.primary);
  expect(rendered).toHaveStyleRule('border-radius', theme.font.p);
});
