import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import './user.scss'

export class user extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop)
    this.state = {
      isLogin: true
    }
  }
  render () {
    const lists = [[{
      title: '订单管理',
      icon: 'order-icon'
    },{
      title: '我的拼团',
      icon: 'group-icon'
    },{
      title: '我的询价',
      icon: 'inquiry-icon'
    },{
      title: '我的需求',
      icon: 'demand-icon'
    }],[{
      title: '联系人管理',
      icon: 'contact-icon'
    },{
      title: '票据管理',
      icon: 'bill-icon'
    }],[{
      title: '我的钱包',
      icon: 'wallet-icon'
    },{
      title: '我的关注',
      icon: 'attention-icon'
    }],[{
      title: '联系客服',
      icon: 'customer-icon'
    },{
      title: '邀请有奖',
      icon: 'invitation-icon'
    },{
      title: '帮助中心',
      icon: 'help-icon'
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
         lists.map((list: any) => {
           return (
            <div className="piece">
              {
                list.map((item: any) => (
                  <div className="item">
                    <div className="item-left">
                      <div className={ item.icon }></div>
                      <span className="item-text">{ item.title }</span>
                    </div>
                    <div className="item-right"></div>
                  </div>
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