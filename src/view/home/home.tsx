import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import { Carousel } from 'antd-mobile';
import { getBanners, getNavigation, getHeadlineNews } from '../../api'
import './home.scss'

interface banners {
  id: number
  link: string
  pic_url: string
  title: string
}

interface navigations {
  id: number
  title: string
  pic_url: string
}
interface headLine {
  id: number
  title: number
  origin: string | null
}

export class home extends React.Component<any, any> {
  isCancelled = false
  constructor (props: any) {
    super(props)
    this.state = {
      banners: [],
      navigations: [],
      headLine: [],
      city_id: 90,
      showMarquee: false,
    }
  }
  componentWillMount() {
    this.getBanners()
    this.getNavigation()
    this.getHeadlineNews()
  }
  componentWillUnmount () {
    this.isCancelled = true
  }
  getBanners () {
    getBanners(this.state.city_id).then(({ banners }) => {
      !this.isCancelled && this.setState(({
        banners
      }))
    })
  }
  getNavigation () {
    getNavigation().then(({ navigations }) => {
      !this.isCancelled && this.setState({
        navigations
      })
    })
  }
  getHeadlineNews() {
    getHeadlineNews().then(({ headLine }) => {
      !this.isCancelled && this.setState({
        headLine,
        showMarquee: true
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
        <div className="search">
          <div className="city">
            <span className="name">杭州</span>
            <span className="icon-down"></span>
          </div>
          <div className="search-input">
            <span className="icon-search"></span>
            <span className="input">搜索小区/商圈/园区等关键词</span>
          </div>
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
        {this.state.showMarquee ? <div className="marquee">
          <div className="marquee-content">
            <span className="dynamic"></span>
            <Carousel className="marquee-item"
              vertical
              dots={false}
              autoplay
              infinite
            >
            {this.state.headLine.map((item: headLine) => (
                <div className="ellipsis" style={{ width: '100%'}} key={item.id}>{item.title}</div>
              ))}
            </Carousel>
          </div>
        </div> : null}
        <RFooter selectd="home" />  
      </div>
    )
  }
}
