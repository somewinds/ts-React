import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
class login extends React.Component<any, any> {
  render () {
    return (
      <div>
        123
      </div>
    )
  }
}
export const Login = () => (

  <Route path="/login" component={login} />

)