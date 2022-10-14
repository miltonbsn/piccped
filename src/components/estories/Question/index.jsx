import { h, Component } from 'preact'
import { TitleQuestion, Title } from '../../common/titles/IconTitle'
import BtnScenario from '../../common/button/BtnScenario'
import BtnCheck from '../../common/button/BtnCheck'
import * as utils from '../../common/utils'
import global from '../style.less'
import style from './style.less'
import { BtnPicc } from '../../common/button/button'

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.list
    };

    this.selectItem = this.selectItem.bind(this)
    this.verifyQuestions = this.verifyQuestions.bind(this)
  }

  verifyQuestions() {
    const { questions } = this.state;

    if (questions.some(question => question.correct && !question.checked)) {
      this.props.showErrorMissingCorrect();
    }

    if (questions.every(question => (question.correct && question.checked) || (!question.correct && !question.checked))) {
      this.props.nextQuestion();
    }
  }


  selectItem(i) {
    const changeState = utils.chooseItem(i, this.props.list)
    const newState = changeState.items
    this.setState({ questions: newState })
    this.props.action()
  
    if (!changeState.valid) {
      this.props.errorQuestion(i)
    }
  }
  
  render() {
    return (
      <div class={global.sliderItem}>
        <div class={ [style.title, this.props.style.wrapTitle].join(' ') }>
          { this.props.subtitle ? <Title label={this.props.subtitle} class={this.props.style.subTitle} /> : null }
          <TitleQuestion label={this.props.title} class={this.props.style.title}/>
        </div>

        { this.props.scenario ?
          <div class={ style.wrapScenario }>
            <BtnScenario label="Cenário" icon={ this.props.coverScenario ? this.props.coverScenario : this.props.scenario } class={style.btnScenario} action={ this.props.openScenario } />
          </div>
        : null }

        <div class={ [style.wrapList, this.props.style.wrapOptions].join(' ') }>
          { this.props.list.map( (item, i) => 
            <BtnCheck key={i} class={[style.btn, this.props.style.options].join(' ')} label={item.label} checked={item.checked} action={ () => this.selectItem(i) }/>
          ) }
        </div>

        <BtnPicc label="Avançar" color="orange" icon="arrow-right" right style="width: 220px;" action={ this.verifyQuestions } />
      </div>
    )
  }

}