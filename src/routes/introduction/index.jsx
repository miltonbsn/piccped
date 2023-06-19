import { h, Component } from 'preact'
import { route } from 'preact-router'
import Transition from 'react-transition-group/Transition'
import style from './style.less'
import Welcome from '../../components/common/welcome/welcome'
import Slider from 'react-slick'
import { BtnPicc } from '../../components/common/button/button'
import { IconTitle, Title } from '../../components/common/titles/IconTitle'
import Modal from '../../components/common/modal/Modal'
import BtnPlay from '../../components/common/button/BtnPlay'
import Container from '../../components/common/container'
import Definitions from '../../components/definitions'
import Preventions from '../../components/preventions'
import GeneralCase from '../../components/generalCase'
import Player from '../../components/common/audio'
import TextComponent from '../../components/common/text/Text'
import AcronymGlossary from '../../components/acronymGlossary'

export default class Introduction extends Component {
	constructor(props) {
		super(props)

		this.state = {
			exitPage: false,
			showModal: false,
			modal: {
				title: '',
				description: ''
			},
			slider: {
				current: null
			},
			nurse: {
				show: true
			},
			btnSkip: {
				label: 'Pular',
				color: 'orange',
				style: 'width: 140px;'
			},
			audioPlaying: false,
			mp3: '../../assets/audio/general-case.mp3'
		}

		this.next = this.next.bind(this)
		this.showModal = this.showModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.currentSlider = this.currentSlider.bind(this)
		this.goToPage = this.goToPage.bind(this)
		this.playAudio = this.playAudio.bind(this)
		this.stopAudio = this.stopAudio.bind(this)
	}

	next() {
    this.slider.slickNext()
  }

	showModal( item ) {
		this.setState({ showModal: true, modal: { title: item.title, description: item.description } })
	}

	closeModal() {
		this.setState({ showModal: false })
	}

	currentSlider(e) {
		this.setState({ slider: { current: e } })
		if ( e < 2 ) {
			this.setState({ nurse: { show: true } })
		} else {
			this.setState({ nurse: { show: false } })
		}

		if ( e == 3 ) {
			this.setState({ btnSkip: { label: 'Procedimentos', color: 'pink', style: 'width: 200px;' } })
		} else {
			this.setState({ btnSkip: { label: 'Pular', color: 'orange', style: 'width: 140px;' } })
		}
	}

	goToPage(url) {
		route(url)
	}

	playAudio() {
		this.setState({ audioPlaying: true })
	}
	stopAudio() {
		this.setState({ audioPlaying: false })
	}

	render() {
		const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			afterChange: this.currentSlider,
			swipe: false,
			mobileFirst: true
    }

		return (
			<Container>
				<div class={ [style.nurse, ( this.state.nurse.show ? null : style.invisible )].join(' ') }></div>

				<Slider ref={ c => this.slider = c } {...settings}>
					<div key={1} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapFirstSlide}>
								<Welcome class={style.welcome} />
								<div class={style.description}>
									<p><TextComponent id="introductionDescription" /></p>
								</div>
							</div>
						</div>
					</div>

					<div key={2} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapSecondSlide}>
								<Welcome class={style.welcome} />
								
								<div class={style.description}>
									<p><TextComponent id="introductionLearningProcess" /></p>
								</div>

								<div className={style.btnDefinitions}>
									<BtnPicc label="Ver definições" color="blue" size="large" action={ this.next }/>
								</div>
							</div>
						</div>
					</div>

					<div key={3} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapContent}>
								<Definitions showModal={this.showModal} />
							</div>
						</div>
					</div>

					<div key={4} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapContent}>
								<Preventions showModal={this.showModal} />
							</div>
						</div>
					</div>

					<div key={5} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapContent}>
								<AcronymGlossary showModal={this.showModal} />
							</div>
						</div>
					</div>

					<div key={6} class="slider-item">
						<div class={style.item}>
							<div class={style.wrapContent}>
								<GeneralCase play={ this.playAudio } />
							</div>
						</div>
					</div>
				</Slider>

				<div class={ style.skipLink }>
					<div class={style.itemAction}>
						<BtnPicc label={this.state.btnSkip.label} icon="arrow-right" right color={this.state.btnSkip.color} style={this.state.btnSkip.style} action={ () => this.goToPage('/procedures') }/>
					</div>
				</div>

				<Modal
					show={ this.state.showModal }
					close={ () => this.closeModal() }
					title={ this.state.modal.title }
					description={ this.state.modal.description } />
				
				<Player mp3={ this.state.mp3 } play={ this.state.audioPlaying } stop={ () => this.stopAudio() } />
			</Container>
		)
	}
}
