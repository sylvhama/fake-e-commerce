import styled from 'styled-components';

export default styled.a`
  color: ${props => props.theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
