import React from 'react';
import styled from 'styled-components';

const Square = styled.figure`
  position: relative;
  margin: 0;
  padding-top: 100%;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default ({ src, alt, ...rest }) => (
  <Square {...rest}>
    <img src={src} alt={alt} />
  </Square>
);
