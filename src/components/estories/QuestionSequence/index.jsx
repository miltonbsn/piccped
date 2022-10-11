import { h, Component } from 'preact'
import { TitleQuestion } from '../../common/titles/IconTitle'
import global from '../style.less'
import style from './style.less'
import BtnCheckIcon from '../../common/button/BtnCheckIcon'

export default class QuestionSequence extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div class={global.sliderItem}>
        <div class={ [style.title, this.props.style.wrapTitle].join(' ') }>
          <TitleQuestion label={this.props.title} class={this.props.style.title}/>
        </div>

        <div class={ style.wrapIcons }>
          { this.props.list.map( (item, i) => 
            <BtnCheckIcon icon={ item.icon } action={ () => this.props.select(i) } checked={ item.checked } />
          )}
        </div>
      </div>
    )
  }
}