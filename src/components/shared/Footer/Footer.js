import styled from 'styled-components';

export default styled.footer`
  padding: ${props => props.theme.spacing.reg}
    ${props => props.theme.spacing.sm};
  width: 100%;
  height: ${props => props.theme.size.footer};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.font.p};
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.darkGrey};
`;
