import { h, Component } from 'preact'
import Slider from 'react-slick'
import { BtnPicc } from '../common/button/button'
import { IconTitle } from '../common/titles/IconTitle'
import style from './style.less'

export default class Preventions extends Component {
	constructor(props) {
    super(props)

    this.state = {
			preventions: [
				{
					title: 'Infecção de Corrente Sanguínea Relacionada ao Cateter Central (ICSRC)',
					description: 'Colonização da ponta do cateter pela migração de microorganismos da pele circundante, contaminação do hub, contaminação externa ou a partir de solução ou equipamentos de infusão contaminados.',
					image: '../../assets/svg/infeccao.svg'
				}, {
					title: 'Flebite',
					description: 'Inflamação da camada íntima da veia. Existem três tipos de flebite: mecânica, química e infecciosa.',
					image: '../../assets/svg/flebite.svg'
				}, {
					title: 'Obstrução',
					description: 'Oclusão do lúmen devido à formação de coágulo sanguíneo ou precipitado de fármacos na extremidade que se encontra no interior do vaso impedindo a infusão da solução intravenosa.',
					image: '../../assets/svg/obstrucao.svg'
				}, {
					title: 'Posicionamento incorreto',
					description: 'Localização da ponta do cateter diferente da prevista (junção cavoatrial), podendo acarretar em diversos eventos adversos, tais como pneumotórax, infiltração/extravasamento, tamponamento cardíaco, arritmia, dentre outros.',
					image: '../../assets/svg/mau_posicionamento.svg'
				}, {
					title: 'Trombose',
					description: 'Formação de trombo devido ao permanente contato do cateter com endotélio, que é precedido pelo fenômeno irritativo e inflamatório.',
					image: '../../assets/svg/trombose.svg'
				}, {
					title: 'Ruptura do cateter',
					description: 'Parte do cateter rompe-se, podendo migrar pela corrente sanguínea, causando trombose ou embolia por cateter.',
					image: '../../assets/svg/rompimento.svg'
				}
			]
    }
	}

	showModal(state) {
		this.props.showModal(state)
	}

  render() {
    const settingsInner = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			className: 'preventions',
			swipe: false,
			fade: true
    }

    return (
      <div class={style.wrapper}>
        <IconTitle icon="P" label="Prevenções" subtitle="Com o manejo correto na manutenção do PICC você irá prevenir:" class={style.iconTitle}/>

        <Slider {...settingsInner}>
          { this.state.preventions.map((item) => (
            <div>
              <div class={style.innerItem}>
                <div class={style.figure} onClick={ () => this.showModal( item ) }>
                  <img src={ item.image }/>
                </div>
                <h3 class={style.title}>{ item.title }</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}