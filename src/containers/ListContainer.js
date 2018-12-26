import React, { Component } from 'react';

import getItems from '../api/getItems';
import getCategories from '../api/getCategories';

import List from '../components/List';
import ErrorMsg from '../components/shared/ErrorMsg';
import Spinner from '../components/shared/Spinner';

class ListContainer extends Component {
  state = { items: null, categories: null };

  componentDidMount() {
    Promise.all([getItems(), getCategories()])
      .then(responses =>
        Promise.all(
          responses.map(
            response => (response.ok ? response.json() : throw response)
          )
        )
      )
      .then(jsons =>
        this.setState({ items: jsons[0].data, categories: jsons[1].data })
      )
      .catch(error => {
        console.error(error);
        this.setState({ isError: true });
      });
  }

  render() {
    const { items, categories, isError } = this.state;

    if (isError) return <ErrorMsg>😳 Please try to refresh the page.</ErrorMsg>;

    if (!items || !categories) return <Spinner block />;

    return <List items={items} categories={categories} {...this.props} />;
  }
}

export default ListContainer;
