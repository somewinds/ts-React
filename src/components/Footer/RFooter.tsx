import * as React from 'react'
import './RFooter.scss'
import { footer } from '../type'
export class RFooter extends React.Component<footer, any> {
  constructor (props: footer) {
    super(props)
  }
  render () {
    return (
      <div className="rFooter">
        <div className="item">
        {
          this.props.selectd === 'home' ?
            <div className="home-img active"></div> : 
            <div className="home-img"></div>
        }
          <span>首页</span>
        </div>
        <div className="item">
        {
          this.props.selectd === 'filed' ?
            <div className="filed-img active"></div> : 
            <div className="filed-img"></div>
        }
          <span>找场地</span>
        </div>
        <div className="item">
        {
          this.props.selectd === 'cart' ?
            <div className="cart-img active"></div> : 
            <div className="cart-img"></div>
        }
          <span>购物车</span>
        </div>
        <div className="item">
        {
          this.props.selectd === 'user' ?
            <div className="user-img active"></div> : 
            <div className="user-img"></div>
        }
          <span>我的</span>
        </div>
      </div>
    )
  }
}
