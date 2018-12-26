import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../../../styled/media';

const repeat = columns => `repeat(${columns},1fr)`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => repeat(props.columns, props.size)};
  grid-gap: ${props => props.theme.spacing.reg};

  ${media.tablet`
    grid-template-columns: ${props => repeat(props.tabletColumns, props.size)};
    grid-gap: ${props => props.theme.spacing.sm};
  `};
`;

Grid.propTypes = {
  columns: PropTypes.number,
  tabletColumns: PropTypes.number
};

Grid.defaultProps = {
  columns: 5,
  tabletColumns: 2
};

export default Grid;
