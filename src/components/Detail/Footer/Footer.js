import React from 'react';
import styled from 'styled-components';

import Footer from '../../shared/Footer';
import Button from '../../shared/Button';

const StyledFooter = styled(Footer)`
  position: fixed;
  left: 0;
  bottom: 0;
`;

const ToLeft = styled.div`
  margin-right: auto;
`;

const Price = styled.strong`
  font-size: ${props => props.theme.font.h1};
`;

export default ({ price, shipping_fee }) => (
  <StyledFooter>
    <ToLeft>
      <Price>¥{price.toLocaleString('ja-JP')}</Price>
      <small>{shipping_fee}</small>
    </ToLeft>
    <Button color="primary">Purchase</Button>
  </StyledFooter>
);
