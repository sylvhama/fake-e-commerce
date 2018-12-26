import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Spinner from './Spinner';

test('Spinner renders correctly', () => {
  const rendered = renderWithTheme(<Spinner />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('Spinner renders correctly with block', () => {
  const rendered = renderWithTheme(<Spinner block />).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('display', 'block');
  expect(rendered).toHaveStyleRule('margin', '16px auto');
});

test('Spinner renders correctly specific size and border width', () => {
  const rendered = renderWithTheme(
    <Spinner size={42} borderWidth={10} />
  ).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toHaveStyleRule('width', '42px');
  expect(rendered).toHaveStyleRule('height', '42px');
  expect(rendered).toHaveStyleRule('border', '10px solid rgba(0,0,0,0.2)');
});
