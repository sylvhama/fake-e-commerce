import React, { Component } from 'react';

import getItem from '../api/getItem';

import Detail from '../components/Detail';
import ErrorMsg from '../components/shared/ErrorMsg';
import Spinner from '../components/shared/Spinner';

class DetailContainer extends Component {
  state = { item: null };

  componentDidMount() {
    getItem(this.props.match.params.id)
      .then(response => (response.ok ? response.json() : throw response))
      .then(item => this.setState({ item }))
      .catch(error => {
        console.error(error);
        this.setState({ isError: true });
      });
  }

  render() {
    const { item, isError } = this.state;

    if (isError) return <ErrorMsg>😳 Please try to refresh the page.</ErrorMsg>;

    if (!item) return <Spinner block />;

    return <Detail {...item} {...this.props} />;
  }
}

export default DetailContainer;
