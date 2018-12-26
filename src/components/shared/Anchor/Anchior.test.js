import React from 'react';
import 'jest-styled-components';

import { renderWithTheme } from '../../../tests/helpers';

import Anchor from './Anchor';

test('Anchor renders correctly', () => {
  const rendered = renderWithTheme(<Anchor>Anchor</Anchor>).toJSON();
  expect(rendered).toMatchSnapshot();
});
