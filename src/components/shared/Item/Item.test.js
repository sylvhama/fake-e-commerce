import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Item from './Item';

test('Item renders correctly', () => {
  const rendered = renderWithTheme(
    <Item name="name" price={1230} image="url" />
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('Item renders correctly with likes', () => {
  const rendered = renderWithTheme(
    <Item name="name" price={1230} image="url" like_count={42} />
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('Item renders correctly when sold out', () => {
  const rendered = renderWithTheme(
    <Item name="name" price={1230} image="url" is_sold_out={true} />
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
