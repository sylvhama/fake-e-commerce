import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Categories from '../shared/Categories';
import Container from '../shared/Container';
import Grid from '../shared/Grid';
import Item from '../shared/Item';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const List = ({
  items,
  categories,
  match: {
    params: { id }
  }
}) => {
  const filteredItems = id
    ? items.filter(item => item.category_id === parseInt(id, 10))
    : items;

  return (
    <Fragment>
      <Categories categories={categories} />
      <Container maxWidth="reg">
        {!filteredItems.length ? (
          <div style={{ textAlign: 'center' }}>🤷</div>
        ) : (
          <Grid>
            {filteredItems.map(item => (
              <StyledLink key={item.id} to={`/detail/${item.id}`}>
                <Item {...item} />
              </StyledLink>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
};

List.propTypes = {
  items: PropTypes.array,
  categories: PropTypes.array
};

export default List;
