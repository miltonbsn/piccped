import { h, Component } from 'preact'
import TextComponent from '../text/Text'
import style from './BtnCheck.less'

export default class BtnCheck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btn, this.props.class],
      checked: false
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.btn, this.props.class] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.btn, this.props.class, style.touched] })
  }

  render () {
    return (
      <button class={ this.state.buttonClass.concat([ this.props.checked ? style.checked : null ]).join(' ') } onClick={this.props.action} onTouchStart={ () => this.enterBtn() } onTouchEnd={ () => this.leaveBtn() }>
        <span class={style.label}>
          <TextComponent id={this.props.label}>{this.props.label}</TextComponent>
        </span>
        <span class={style.icon}>
          { this.props.checked ? <i class="fa fa-check"></i> : null }
        </span>
      </button>
    )
  }
}