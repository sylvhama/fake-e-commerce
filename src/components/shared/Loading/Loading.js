import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from '../ErrorMsg';
import Button from '../Button';
import Spinner from '../Spinner';

export default function Loading(props) {
  if (props.error) {
    console.error(props.error);
    return (
      <ErrorMsg>
        😱 An error occured while loading the page, 🙏 please{' '}
        <Button color="primary" onClick={props.retry}>
          Retry
        </Button>
      </ErrorMsg>
    );
  } else if (props.pastDelay) return <Spinner block />;
  else return null;
}

Loading.propTypes = {
  error: PropTypes.object,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func
};
