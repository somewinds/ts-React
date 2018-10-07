import * as React from 'react'
import './RSwiper.scss'

export default class RSwiper extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidMount () {
    this.handleInitUlWidth()
  }
  handleInitUlWidth () {
    let swiper: any = this.refs.test
    let _heiget = 0

    Array.from(swiper.children).forEach((item: any) => {
      _heiget += item.clientWidth
    });
    swiper.style.width = `${_heiget}px`
  }
  render () {
    return (
      <div className="RS-swiper">
        <div className="RS-view" ref="test">
          {
            (this.props.children as Array<any>).map((item: any, index: number) => (
                <div className="RS-item" key={index}>
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