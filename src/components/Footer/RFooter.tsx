import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './RFooter.scss'


interface Footer { 
  selectd: string
}

export class RFooter extends React.Component<Footer, any> {
  constructor (props: Footer) {
    super(props)
  }
  render () {
    return (
      <div className="rFooter">
        <NavLink to='/' className="item">
        {
          this.props.selectd === 'home' ?
            <div className="home-img active"></div> : 
            <div className="home-img"></div>
        }
          <span>首页</span>
        </NavLink>
        <NavLink to="/filed" className="item">
        {
          this.props.selectd === 'filed' ?
            <div className="filed-img active"></div> : 
            <div className="filed-img"></div>
        }
          <span>找场地</span>
        </NavLink>
        <NavLink to="cart" className="item">
        {
          this.props.selectd === 'cart' ?
            <div className="cart-img active"></div> : 
            <div className="cart-img"></div>
        }
          <span>购物车</span>
        </NavLink>
        <NavLink to="/user" className="item">
        {
          this.props.selectd === 'user' ?
            <div className="user-img active"></div> : 
            <div className="user-img"></div>
        }
          <span>我的</span>
        </NavLink>
      </div>
    )
  }
}
