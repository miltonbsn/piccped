import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'
import { BtnPicc } from '../button/button'
import TextComponent from '../text/Text'
export default class CorrectAlert extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Transition in={this.props.show} timeout={300}>
        {(state) => (
          <div class={ [style.wraper, style[state]].join(' ') }>
            <div class={ [style.alert, style.correct].join(' ') }>
              <h2 class={style.title}><TextComponent id="Correto!" /></h2>
              
              <h3 class={style.subtitle}>
                <TextComponent id={this.props.message}>{this.props.message}</TextComponent>
              </h3>
          
              <div class={style.wrapBtn}>
                <BtnPicc label="nextStep" color="pink" icon="arrow-right" right style="width: 220px;" action={ this.props.nextQuestion } />
              </div>
          
              <div class={ style.nurse }></div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}