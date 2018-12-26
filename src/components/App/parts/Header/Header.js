import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../../../shared/Container';
import Logo from '../../../shared/Logo';

const Header = styled.header`
  background-color: ${props => props.theme.color.white};
`;

export default props => (
  <Header {...props}>
    <Container maxWidth="lg">
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  </Header>
);
