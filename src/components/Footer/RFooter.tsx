import * as React from 'react'
import './RFooter.scss'
import { Button }  from 'antd-mobile';


export class RFooter extends React.Component {
  constructor (props: any) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render () {
    return (
      <div className="rFooter">
        <div className="item"> 
          <div>123</div>
          <span>首页</span>
        </div>
        <div className="item">
          <div>123</div>
          <span>找场地</span>
        </div>
        <div className="item">
          <div>123</div>
          <span>购物车</span>
        </div>
        <div className="item">
          <div>123</div>
          <span>我的</span>
        </div>
      </div>
    )
  }
}