import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import './filed.scss'

interface HeaderType {
  goBack: () => {}
}

const Header = (props: HeaderType) => (
  <div className="header">
    <span className="back-icon" onClick={props.goBack}></span>
    <div className="search">
      <span className="search-icon"></span>
      <input className="search-input" disabled placeholder="请输入小区 / 楼宇关键字" />
    </div>
  </div>
)

export class Filed extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }
  handleGoBack () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className="filed">
        <Header goBack={this.handleGoBack.bind(this)}/>
        <div className="filter-condition">
          <div className="filter-item">
            <span>默认</span>
            <span className="arrow"></span>
          </div>
          <div className="filter-item">
            <span>区域</span>
            <span className="arrow"></span>
          </div>
          <div className="filter-item">
            <span>展位价格</span>
            <span className="arrow"></span>
          </div>
          <div className="filter-item">
            <span>筛选</span>
            <span className="filter-icon"></span>
          </div>
        </div>
        <div className="quick-screen">
          <div className="quick-item">
            <span className="quick-icon"></span>
            快速订
          </div>
          <div className="quick-item">免押金</div>
          <div className="quick-item">有优惠</div>
          <div className="quick-item">有展位</div>
        </div>
        <div style={{backgroundColor: 'white'}}>
            123123123123s
        </div>
        <RFooter selectd='filed' />
      </div>
    )
  }
}