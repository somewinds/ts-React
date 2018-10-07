import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { getSession } from '../../tool'
import './user.scss'
import { orderManagement } from './component/orderManagement'

class User extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      isLogin: getSession('login') || null
    }
  }
  render () {
    const lists = [[{
      title: '订单管理',
      icon: 'order-icon',
      router: '/orderManagement'
    },{
      title: '我的拼团',
      icon: 'group-icon',
      router: ''
    },{
      title: '我的询价',
      icon: 'inquiry-icon',
      router: ''
    },{
      title: '我的需求',
      icon: 'demand-icon',
      router: ''
    }],[{
      title: '联系人管理',
      icon: 'contact-icon',
      router: ''
    },{
      title: '票据管理',
      icon: 'bill-icon',
      router: ''
    }],[{
      title: '我的钱包',
      icon: 'wallet-icon',
      router: ''
    },{
      title: '我的关注',
      icon: 'attention-icon',
      router: ''
    }],[{
      title: '联系客服',
      icon: 'customer-icon',
      router: ''
    },{
      title: '邀请有奖',
      icon: 'invitation-icon',
      router: ''
    },{
      title: '帮助中心',
      icon: 'help-icon',
      router: ''
    }]]
    return (
      <div className="user">
        <div className="message">
          <span className="message-icon"></span>
        </div>
        <div className="infor">
          <div className="status">
            <div className="avatar"></div>
            {this.state.isLogin ? 
            <div className="is-login">
              <div className="company">邻汇吧</div>
              <div className="certified">企业已认证</div>
            </div> :
            <div className="not-login">
              未登录
            </div>}
          </div>
          <div className="infor-user">
            <span className="user-text">完善企业信息</span>
            <span className="arrow-icon"></span>
          </div>
        </div>
        {
         lists.map((list: any, index: number) => {
           return (
            <div className="piece" key={index}>
              {
                list.map((item: any, inde: number) => (
                  <NavLink to={item.router} className="item" key={inde}>
                    <div className="item-left">
                      <div className={ item.icon }></div>
                      <span className="item-text">{ item.title }</span>
                    </div>
                    <div className="item-right"></div>
                  </NavLink>
                ))
              }
             </div>
           )
         })
        }
        <RFooter selectd='user' />
      </div>
    )
  }
}

export class Users extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/orderManagement" exact component={orderManagement} />
        <Redirect to="/" />
      </Switch>
    )
  }
}
