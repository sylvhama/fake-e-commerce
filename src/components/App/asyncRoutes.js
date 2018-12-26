import Loadable from 'react-loadable';
import Loading from '../shared/Loading';

const asyncComponent = loader =>
  Loadable({
    loader,
    loading: Loading
  });

export const AsyncList = asyncComponent(() =>
  import('../../containers/ListContainer')
);

export const AsyncDetail = asyncComponent(() =>
  import('../../containers/DetailContainer')
);
