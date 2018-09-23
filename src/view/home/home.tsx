import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import { Carousel, WingBlank } from 'antd-mobile';
import { getBanners, getNavigation } from '../../api'
import { banners, navigations } from './type'
import './home.scss'

export class  home extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      banners: [],
      navigations: [],
      city_id: 90
    }
  }
  componentWillMount() {
    this.getBanners()
    this.getNavigation()
  }
  componentDidMount() {
    console.log(123)
  }
  getBanners () {
    getBanners(this.state.city_id).then(({ banners }) => {
      this.setState(({
        banners
      }))
    })
  }
  getNavigation () {
    getNavigation().then(({ navigations }) => {
      this.setState({
        navigations
      })
    })
  }
  render() {
    return (
      <div className="home">
        <div className="down-app">
          <span className="app-icon"></span>
          <div className="app-desc">
            <p>更多完整实用功能</p>
            <p>尽在邻汇吧客户端</p>
          </div>
          <div className="app-btn">
            下载App
          </div>
        </div>
        <div className="banner">
          <Carousel className="banner-swiper" autoplay infinite>
            {this.state.banners.map((item: banners) => (
              <a key={item.id} href={item.link}>
                <img src={item.pic_url} style={{height: '5rem'}}
                  onLoad={() => window.dispatchEvent(new Event('resize'))}
                />
              </a>
            ))} 
          </Carousel>
        </div>
        <div className="navigation">
          {this.state.navigations.map((item: navigations) => (
            <div key={item.id} style={{flex: '0 0 25%', textAlign: "center", paddingBottom: '.5333rem'}}>
              <div style={{textAlign: "center" }}>
                <img src={item.pic_url} style={{width:'0.747rem', height: '0.747rem', margin: '0 auto'}} />
              </div>
              <p style={{marginTop: '.2133rem'}}>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="guide">
          <div className="guide-item">
            <div className="demand"></div>
            <p>发需求</p>
          </div>
          <div className="guide-item" style={{margin: '0 .32rem'}}>
            <div className="quick"></div>
            <p>快速订</p>
          </div>
          <div className="guide-item">
            <div className="activity"></div>
            <p>活动</p>
          </div>
        </div>
        <RFooter selectd="home" />  
      </div>
    )
  }
}
