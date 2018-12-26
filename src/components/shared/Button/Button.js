import styled from 'styled-components';
import PropTypes from 'prop-types';

import lightenDarkenColor from '../../../styled/lightenDarkenColor';

const Button = styled.button`
  border: 1px solid ${props => props.theme.color[props.color]};
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.reg}`};
  line-height: 1;
  font-size: ${props => props.theme.font.p};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.color === 'primary'
      ? props.theme.color.white
      : props.theme.color.grey};
  background-color: ${props => props.theme.color[props.color]};
  border-radius: ${props =>
    props.rounded ? props.theme.font.p : props.theme.radius};
  cursor: pointer;
  transition: background-color 0.25s ease;
  &:hover {
    background-color: ${props =>
      lightenDarkenColor(props.theme.color[props.color], 20)};
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  rounded: PropTypes.bool,
  bold: PropTypes.bool
};

Button.defaultProps = {
  color: 'lightGrey'
};

export default Button;
