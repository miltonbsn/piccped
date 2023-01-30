import { h, Component } from 'preact'
import { IconTitle, TitleSm } from '../../common/titles/IconTitle'
import BtnPlay from '../../common/button/BtnPlay'
import { BtnPicc } from '../../common/button/button'
import global from '../style.less'
import style from './style.less'
import TextComponent from '../../common/text/Text'

export default class Case extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class={[global.sliderItem, this.props.style].join(' ')}>
        <div class={style.title}>
          <IconTitle icon="C" label="Caso clínico"/>
          <TitleSm label={this.props.title}/>
        </div>

        <div class={ this.props.noAction ? style.contentLarge : style.content }>
          <span>
            <p><TextComponent id={this.props.description}>{this.props.description}</TextComponent></p>
          </span>
        </div>

        { !this.props.noAction ?
          <div class={style.btnNext}>
            <BtnPicc label="Next" color="pink" icon="arrow-right" right action={ this.props.nextSlider } />
          </div>
        : null }
      </div>
    )
  }

}