import { h, Component } from 'preact'
import style from './BtnCheckIcon.less'

export default class BtnCheckIcon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btnIcon],
      checked: false
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.btnIcon] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.btnIcon, style.touched] })
  }

  render () {
    return (
      <button class={ this.state.buttonClass.concat([ this.props.checked ? style.checked : null ]).join(' ') } onClick={this.props.action} onTouchStart={ () => this.enterBtn() } onTouchEnd={ () => this.leaveBtn() }>
        <img src={ this.props.icon }/>
      </button>
    )
  }
}