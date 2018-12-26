import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  padding: 0 ${props => props.theme.spacing.sm};
  border-top: 1px solid ${props => props.theme.color.lightGrey};
  min-height: ${props => props.theme.size.categories};
  background-color: ${props => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.font.p};
  color: ${props => props.theme.color.lightGrey};
  text-decoration: none;
  flex-shrink: 0;
  &.active {
    color: ${props => props.theme.color.primary};
    font-weight: bold;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Categories = ({ categories = [], ...rest }) => (
  <Nav {...rest}>
    <HorizontalScroll>
      <StyledNavLink to="/" exact>
        All
      </StyledNavLink>
      {categories.map(category => (
        <StyledNavLink key={category.id} to={`/category/${category.id}`}>
          {category.name}
        </StyledNavLink>
      ))}
    </HorizontalScroll>
  </Nav>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default Categories;
