import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { home } from 'view/home/home'
import { filed } from 'view/fileds/filed'
import { cart } from 'view/cart/cart'
import { Users } from 'view/users/user'
import { Logins } from 'view/login/login'

export default class RouterConfig extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/filed" component={filed} />
          <Route path="/cart" component={cart} />
          <Logins />
          <Users />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}