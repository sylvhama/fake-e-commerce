import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as asyncRoutes from './asyncRoutes';
import theme from '../../styled/theme';

import Wrapper from './parts/Wrapper';
import Header from './parts/Header';
import Footer from './parts/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Wrapper>
            <Header />
            <Switch>
              <Route path="/detail/:id" component={asyncRoutes.AsyncDetail} />
              <Route path="/category/:id" component={asyncRoutes.AsyncList} />
              <Route component={asyncRoutes.AsyncList} />
            </Switch>
          </Wrapper>
          <Switch>
            <Route path="/detail/:id" />
            <Route component={Footer} />
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
}

export default App;
