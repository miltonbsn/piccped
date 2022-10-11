import { h, Component } from 'preact'
import style from './style.less'
import { TitleLg } from '../titles/IconTitle'
import { BtnPicc } from '../button/button'

export default class FinalVideo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class={ style.wrap }>
        <div class={ style.title }>
          <TitleLg label={ this.props.title }/>
        </div>

        <div class={ style.wrapVideo }>
          <div class={ style.video }>
            <img class={ style.poster } src={ this.props.poster }/>
            <button class={ style.btnPlay } onClick={ this.props.playVideo }><i class="fa fa-play"></i></button>
          </div>
        </div>

        <div class={ style.btn }>
          <BtnPicc label="Próximo" color="pink" icon="arrow-right" right action={ this.props.nextSlider } />
        </div>
      </div>
    )
  }
}