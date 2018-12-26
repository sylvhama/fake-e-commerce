import React from 'react';
import 'jest-styled-components';

import { renderWithTheme, wrapWithRouter } from '../../../tests/helpers';

import Categories from './Categories';

test('Categories renders correctly', () => {
  const rendered = renderWithTheme(
    wrapWithRouter(<Categories categories={[{ id: '1', name: 'test' }]} />)
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});
