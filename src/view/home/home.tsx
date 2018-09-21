import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import { Carousel, WingBlank } from 'antd-mobile';
import { getBanners } from '../../api'
import './home.scss'

export class  home extends React.Component<any, any> {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    let a 
    getBanners(90).then(res => {
      a = res
      console.log(a, 1)
    })
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
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
        <div>
          <Carousel
            autoplay
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  style={{ width: '100%', verticalAlign: 'top' }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <RFooter selectd="home" />
      </div>
    )
  }
}