import { h, Component } from 'preact'
import TextComponent from '../text/Text'
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
    const { label, icon, checked, action } = this.props;

    return (
      <div class={style.align}>
        <button class={this.state.buttonClass.concat([ checked ? style.checked : null ]).join(' ')} onClick={action} onTouchStart={() => this.enterBtn()} onTouchEnd={() => this.leaveBtn()}>
          <img src={icon} />
        </button>
        <span class={style.iconLabel}>
          <TextComponent id={this.props.label}>{this.props.label}</TextComponent>
        </span>
      </div>
    )
  }
}