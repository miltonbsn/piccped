import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'

export default class Popup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      in: false,
      styleBtn: [style.close].join(' ')
    }
  }

  enterBtn() {
    this.setState({ styleBtn: [style.close, style.touched].join(' ') })
  }
  leaveBtn() {
    this.setState({ styleBtn: [style.close].join(' ') })
  }

  render() {
    return (
      <Transition in={this.props.show} timeout={300}>
        {(state) => (
          <div class={ [style.wraper, style[state]].join(' ') }>
            <div class={ [style.popup, this.props.class].join(' ') }>
              <button class={ [this.state.styleBtn, 'closePopup'].join(' ') } onClick={ () => this.props.close() } onTouchStart={ () => this.enterBtn() } onTouchEnd={ () => this.leaveBtn() }>
                <i className="fa fa-close"></i>
              </button>
              { this.props.children }
            </div>
          </div>
        )}
      </Transition>
    )
  }
}