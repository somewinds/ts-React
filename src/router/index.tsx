import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { home } from 'view/home/home'

export default class RouterConfig extends React.Component {
  render () {
    return (
      <HashRouter>
        <Route path="/" exact component={home}></Route>
      </HashRouter>
    )
  }
}