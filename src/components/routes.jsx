import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './app';
import Quotes from './quotes';
import Home from './home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
