import { h, Component } from 'preact'
import { BtnPicc } from '../common/button/button'
import BtnPlay from '../common/button/BtnPlay'
import { IconTitle } from '../common/titles/IconTitle'
import style from './style.less'
import TextComponent from '../common/text/Text'

export default class GeneralCase extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div class={style.wrapper}>
        <IconTitle icon="CG" label="generalClinicalCase" largeIcon class={style.title}/>

        <div class={style.content}>
          <p><TextComponent id="generalClinicalCaseDescription" /></p>
        </div>    
      </div>
    )
  }
}
