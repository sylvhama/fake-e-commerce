import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 0 auto;
  padding: ${props =>
    `${props.noGutter ? 0 : props.theme.spacing.reg} ${
      props.noGutter ? 0 : props.theme.spacing.sm
    } 0`};
  max-width: ${props =>
    props.maxWidth ? props.theme.size.container[props.maxWidth] : null};
`;

Container.propTypes = {
  maxWidth: PropTypes.oneOf(['reg', 'lg']),
  noGutter: PropTypes.bool
};

export default Container;
