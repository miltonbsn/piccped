import { h, Component } from 'preact'
import style from './style.less'
import { TitleLg } from '../titles/IconTitle'
import { BtnPicc } from '../button/button'

export default class ProcedureFinished extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class={style.wrap}>
        <div class={style.title}>
          <TitleLg label="Procedimento finalizado!"/>
        </div>

        <div class={style.content}>
          Você chegou ao final deste procedimento. Volte para o início e continue promovendo a segurança do paciente em outro procedimento.
        </div>

        <div class={style.nurse}></div>

        <div class={style.btn}>
          <BtnPicc label="Procedimentos" color="pink"  icon="arrow-left" left action={ this.props.action } />
        </div>
      </div>
    )
  }
}