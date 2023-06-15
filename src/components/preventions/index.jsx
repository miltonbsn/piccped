import { h, Component } from 'preact'
import Slider from 'react-slick'
import { BtnPicc } from '../common/button/button'
import TextComponent from '../common/text/Text'
import { IconTitle } from '../common/titles/IconTitle'
import style from './style.less'

export default class Preventions extends Component {
	constructor(props) {
    super(props)

    this.state = {
			preventions: [
				{
					title: 'preventionInfectionTitle',
					description: 'preventionInfectionDescription',
					image: '../../assets/svg/infeccao.svg'
				}, {
					title: 'preventionPhlebitisTitle',
					description: 'preventionPhlebitisDescription',
					image: '../../assets/svg/flebite.svg'
				}, {
					title: 'preventionObstructionTitle',
					description: 'preventionObstructionDescription',
					image: '../../assets/svg/obstrucao.svg'
				}, {
					title: 'preventionIncorrectPositioningTitle',
					description: 'preventionIncorrectPositioningDescription',
					image: '../../assets/svg/mau_posicionamento.svg'
				}, {
					title: 'preventThrombosisTitle',
					description: 'preventThrombosisDescription',
					image: '../../assets/svg/trombose.svg'
				}, {
					title: 'preventCatheterRuptureTitle',
					description: 'preventCatheterRuptureDescription',
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
        <IconTitle icon="M" label="Prevenções" subtitle="preventionsSubtitle" class={style.iconTitle}/>

        <Slider {...settingsInner}>
          { this.state.preventions.map((item) => (
            <div>
              <div class={style.innerItem}>
                <div class={style.figure} onClick={ () => this.showModal( item ) }>
                  <img src={ item.image }/>
                </div>
                <h3 class={style.title}>
									<TextComponent id={item.title}>{item.title}</TextComponent>
								</h3>
              </div> 
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}