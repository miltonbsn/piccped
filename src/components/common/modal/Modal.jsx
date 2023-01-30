import { h, Component } from 'preact'
import style from './style.less'
import { BtnPicc } from '../button/button'
import Transition from 'react-transition-group/Transition'
import TextComponent from '../text/Text'

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      in: false
    }
  }

  render() {
    return (
      <Transition in={this.props.show} timeout={300}>
        {(state) => (
          <div class={ [style.wraper, style[state]].join(' ') }>
            <div className={ style.modal }>
              <h2 className={style.title}>
                <TextComponent id={this.props.title}>{this.props.title}</TextComponent>
              </h2>
              <div className={style.description}>
                <p><TextComponent id={this.props.description}>{this.props.description}</TextComponent></p>
              </div>
              <BtnPicc label="Ok" color="flat" action={ () => this.props.close() }/>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}