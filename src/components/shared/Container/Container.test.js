import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Container from './Container';

test('Container renders correctly', () => {
  const rendered = renderWithTheme(<Container>Container</Container>).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('padding', '16px 8px 0');
  expect(rendered).toHaveStyleRule('max-width', undefined);
});

test('Container renders correctly', () => {
  const rendered = renderWithTheme(
    <Container noGutter maxWidth="reg">
      Container
    </Container>
  ).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('padding', '0 0 0');
  expect(rendered).toHaveStyleRule('max-width', '940px');
});
