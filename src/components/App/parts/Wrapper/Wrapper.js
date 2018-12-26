import styled from 'styled-components';

export default styled.section`
  padding-bottom: ${props => props.theme.spacing.reg};
  min-height: calc(100vh - ${props => `${props.theme.size.footer}`});
  color: ${props => props.theme.color.grey};
`;
