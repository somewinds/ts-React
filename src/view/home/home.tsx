import * as React from "react";
import { RFooter } from '@/Footer/RFooter'
import { Carousel, WingBlank } from 'antd-mobile';
import './home.scss'

export class  home extends React.Component<any, any> {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
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
          <span></span>
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
        <RFooter />
      </div>
    )
  }
}