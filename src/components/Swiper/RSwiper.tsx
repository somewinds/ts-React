import * as React from 'react'
import './RSwiper.scss'

interface swiperAttribute {
  padding?: number
}

export default class RSwiper extends React.Component<swiperAttribute, any> {
  private start = 0
  private move = 0
  private nowMove = 0
  private swiperItem: React.RefObject<HTMLDivElement>;

  static defaultProps = {
    padding:　0,
  }
  constructor (props: swiperAttribute) {
    super(props)
    this.state = {
      name: ''
    }
    this.swiperItem = React.createRef()
  }
  componentDidUpdate () {
    this.handleInitUlWidth()
  }
  handleTouchStart (event: TouchEvent){
    this.start = event.touches[0].screenX
  }
  handleTouchMove (event: TouchEvent) {
    let moveX = event.touches[0].screenX

    this.move = this.nowMove + (moveX - this.start) / 2
    
    if (this.swiperItem.current !== null) {
      this.swiperItem.current.style.transitionDuration = '0ms'
      this.swiperItem.current.style.transform= `translate3d(${this.move}px, 0px, 0px)`
    } else { console.error("Refs<swiperItem>: Is null") }
  }
  handleTouchEnd () {
    if (this.swiperItem.current !== null) {
      let maxX = this.swiperItem.current.clientWidth - document.body.clientWidth

      if (this.move < -maxX) {
        this.nowMove = -maxX
        this.swiperItem.current.style.transitionDuration = '300ms'
        this.swiperItem.current.style.transform= `translate3d(${-maxX}px, 0px, 0px)`
      } else if (this.move > 0) {
        this.nowMove = 0
        this.swiperItem.current.style.transitionDuration = '300ms'
        this.swiperItem.current.style.transform= 'translate3d(0px, 0px, 0px)'
      } else { 
        this.nowMove = this.move
      }
    } else { console.error("Refs<swiperItem>: Is null") }
  }
  handleInitUlWidth () {
    if (this.swiperItem.current !== null) {
      let _width = 0

      Array.from(this.swiperItem.current.children).forEach((item: any) => {
        _width += item.clientWidth
      });
      this.swiperItem.current.style.width = `${_width}px`
    } else { console.error("Refs<swiperItem>: Is null") }
  }
  render () {
    return (
      <div className="RS-swiper">
        <div className="RS-view" ref={this.swiperItem}>
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
