import { h, Component } from 'preact'
import style from './BtnCheckVideo.less'

export default class BtnCheckVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btnVideo],
      checked: false
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.btnVideo] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.btnVideo, style.touched] })
  }

  render () {
    return (
      <button 
        class={ this.state.buttonClass.concat([ this.props.checked ? style.checked : null ]).join(' ') } 
        onClick={this.props.action} 
        onTouchStart={ () => this.enterBtn() } 
        onTouchEnd={ () => this.leaveBtn() }
        style={`background-image: url('${ this.props.icon }')`}>
      </button>
    )
  }
}