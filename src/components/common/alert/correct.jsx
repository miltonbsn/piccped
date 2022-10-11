import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'
import { BtnPicc } from '../button/button'

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
              <h2 class={style.title}>Correto!</h2>
              
              <h3 class={style.subtitle}>{ this.props.message }</h3>
          
              <div class={style.wrapBtn}>
                <BtnPicc label="Próxima etapa" color="pink" icon="arrow-right" right style="width: 220px;" action={ this.props.nextQuestion } />
              </div>
          
              <div class={ style.nurse }></div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}