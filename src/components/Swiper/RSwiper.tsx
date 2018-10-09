import * as React from 'react'
import './RSwiper.scss'

interface swiperAttribute {
  padding?: number
}

export default class RSwiper extends React.Component<swiperAttribute, any> {
  static start = 0
  static move = 0
  static nowMove = 0

  static defaultProps = {
    padding:　0,
  }
  constructor (props: swiperAttribute) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidUpdate () {
    this.handleInitUlWidth()
  }
  handleTouchStart (event: any){
    event.preventDefault()

    RSwiper.start = event.touches[0].screenX
  }
  handleTouchMove (event: any) {
    let moveX = event.touches[0].screenX
    let swiper: any = this.refs.swiperItem

    RSwiper.move = RSwiper.nowMove + (moveX - RSwiper.start) / 2
    swiper.style.transitionDuration = '0ms'
    swiper.style.transform= `translate3d(${RSwiper.move}px, 0px, 0px)`
  }
  handleTouchEnd () {
    let swiper: any = this.refs.swiperItem
    let maxX = swiper.clientWidth - document.body.clientWidth

    if (RSwiper.move < -maxX) {
      RSwiper.nowMove = -maxX
      swiper.style.transitionDuration = '300ms'
      swiper.style.transform= `translate3d(${-maxX}px, 0px, 0px)`
    } else if (RSwiper.move > 0) {
      RSwiper.nowMove = 0
      swiper.style.transitionDuration = '300ms'
      swiper.style.transform= 'translate3d(0px, 0px, 0px)'
    } else { 
      RSwiper.nowMove = RSwiper.move 
    }
  }
  handleInitUlWidth () {
    let swiper: any = this.refs.swiperItem
    let _width = 0

    Array.from(swiper.children).forEach((item: any) => {
      _width += item.clientWidth
    });
    swiper.style.width = `${_width}px`
  }
  render () {
    return (
      <div className="RS-swiper">
        <div className="RS-view" ref="swiperItem">
          {
            (this.props.children as Array<any>).map((item: any, index: number) => (
                <div className="RS-item" 
                  onTouchStart={this.handleTouchStart.bind(this)} 
                  onTouchMove={this.handleTouchMove.bind(this)} 
                  onTouchEnd={this.handleTouchEnd.bind(this)} 
                  key={index} 
                  style={{padding: `0 ${this.props.padding}px`}}
                >
                  {item}
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}