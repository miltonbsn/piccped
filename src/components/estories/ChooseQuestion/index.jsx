import { h, Component } from 'preact'
import { TitleQuestion } from '../../common/titles/IconTitle'
import * as utils from '../../common/utils'
import global from '../style.less'
import style from './style.less'
import BtnCheckVideo from '../../common/button/BtnCheckVideo'
import BtnCheck from '../../common/button/BtnCheck'

export default class ChooseQuestion extends Component {
  constructor(props) {
    super(props)
    
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem(i) {
    const changeState = utils.chooseItem(i, this.props.list)
    const newState = changeState.items
    this.setState({ newState })
    this.props.action()
    
    if ( changeState.valid ){
      this.props.nextQuestion(this.props.list[i].correctMessage)
    } else {
      this.props.errorQuestion(this.props.list[i].errorMessage)
    }
  }
  
  render() {
    return (
      <div class={global.sliderItem}>
        <div class={ [style.title, this.props.style.wrapTitle].join(' ') }>
          <TitleQuestion label={this.props.title} class={this.props.style.title}/>
        </div>

        <div class={ style.wrapIcons }>
          { this.props.list.map( (item, i) => 
            <BtnCheckVideo icon={ item.cover } action={ () => this.props.playVideo(item.video) } />
          )}
        </div>

        <div class={ [style.wrapList, this.props.style.wrapOptions].join(' ') }>
          { this.props.list.map( (item, i) => 
            <BtnCheck key={i} class={[style.btn, this.props.style.options].join(' ')} label={item.label} checked={item.checked} action={ () => this.selectItem(i) }/>
          ) }
        </div>
      </div>
    )
  }
}