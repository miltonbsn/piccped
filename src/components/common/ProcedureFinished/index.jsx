import { h, Component } from 'preact'
import style from './style.less'
import { TitleLg } from '../titles/IconTitle'
import { BtnPicc } from '../button/button'
import TextComponent from '../text/Text'

export default class ProcedureFinished extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class={style.wrap}>
        <div class={style.title}>
          <TitleLg label="wellDone"/>
        </div>

        <div class={style.content}>
          <TextComponent id="endOfProcedure" />
        </div>
  
        <div class={style.nurse}></div>

        <div class={style.btn}>
          <BtnPicc label="backToProcedures" color="pink"  icon="arrow-left" left action={ this.props.action } />
        </div>
      </div>
    )
  }
}