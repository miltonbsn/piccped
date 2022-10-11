import { h, Component } from 'preact'
import style from './BtnScenario.less'

export default class BtnScenario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btnScenario, this.props.class]
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.btnScenario, this.props.class] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.btnScenario, this.props.class, style.touched] })
  }

  render () {
    return (
      <button class={ this.state.buttonClass.join(' ') } onTouchStart={ () => this.enterBtn() } onTouchEnd={ () => this.leaveBtn() } onClick={ () => this.props.action() }>
        <span class={ style.icon } style={`background-image: url('${this.props.icon}')`}></span>
        <span class={ style.label }>
          <i class="fa fa-expand"></i>
          { this.props.label }
        </span>
      </button>
    )
  }
}