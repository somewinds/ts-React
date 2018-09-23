import * as React from "react";
import { RFooter } from '@/Footer/RFooter'

export class cart extends React.Component<any, any> {
  render () {
    return (
      <div>
        cart
        <RFooter selectd='cart' />
      </div>
    )
  }
}