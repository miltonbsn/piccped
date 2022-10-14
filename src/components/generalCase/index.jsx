import { h, Component } from 'preact'
import { BtnPicc } from '../common/button/button'
import BtnPlay from '../common/button/BtnPlay'
import { IconTitle } from '../common/titles/IconTitle'
import style from './style.less'

export default class GeneralCase extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div class={style.wrapper}>
        <IconTitle icon="CG" label="Caso clínico geral" largeIcon class={style.title}/>

        <div class={style.content}>
          <p>Arthur, 2 anos, foi submetido a passagem de PICC há um dia devido a fragilidade venosa e necessidade de antibioticoterapia por 10 dias (Ceftriaxone) e corticoterapia (Dexametasona) por 5 dias. O PICC de 3 fr foi inserido com sucesso na terceira tentativa de punção, em veia basílica na fossa antecubital direita. O comprimento do cateter estimado foi de 30 cm, tendo progressão dos 30 cm. No momento da inserção a enfermeira realizou o teste para confirmação do refluxo sanguíneo, confirmando-o e a infusão de soro fisiológico foi realizada sem resistência. Após isso, o raio-x evidenciou o posicionamento da ponta do cateter na junção cavoatrial.</p>
          <p>No plantão do dia seguinte, você, enfermeiro da Unidade, fez a avaliação geral de Arthur e agora precisa avaliar os aspectos relacionados ao PICC.</p>
        </div>    
      </div>
    )
  }
}