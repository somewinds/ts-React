import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { home } from 'view/home/home'
import { Filed } from 'view/fileds/filed'
import { Cart } from 'view/cart/cart'
import { User } from 'view/users/user'
import { Login } from 'view/login/login'

export default class RouterConfig extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/filed" component={Filed} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}