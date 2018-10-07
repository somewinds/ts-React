import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
class Login extends React.Component<any, any> {
  render () {
    return (
      <div>
        123
      </div>
    )
  }
}

export class Logins extends React.Component<any, any> {
  render () {
    return (
      <Switch>
        <Route path="/login" component={Login}  />
      </Switch>
    )
  }
}
