import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  border: ${props => props.borderWidth}px solid rgba(0, 0, 0, 0.2);
  border-top: ${props => props.borderWidth}px solid
    ${props => props.theme.color.primary};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-block;
  border-radius: 50%;
  animation: ${rotate360} 1s linear infinite;

  ${props =>
    props.block &&
    `
      margin: ${props.theme.spacing.reg} auto;
      display: block;
  `};
`;

Spinner.propTypes = {
  size: PropTypes.number,
  borderWidth: PropTypes.number,
  block: PropTypes.bool
};

Spinner.defaultProps = {
  size: 32,
  borderWidth: 4
};

export default Spinner;
