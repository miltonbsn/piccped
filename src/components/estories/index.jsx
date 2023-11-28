/* eslint-disable react/jsx-no-bind */
import { h, Component } from 'preact'
import style from './style.less'
import Slider from 'react-slick'
import { route } from 'preact-router'
import { TitleQuestion } from '../common/titles/IconTitle'
import { BtnPicc } from '../common/button/button'
import Modal from '../common/modal/Modal'
import TopBar from '../common/topBar'
import Container from '../common/container'
import Definitions from '../definitions'
import Preventions from '../preventions'
import GeneralCase from '../generalCase'
import Question from './Question'
import ProcedureFinished from '../common/ProcedureFinished'
import Case from './Case'
import Popup from '../common/popup'
import Player from '../common/audio'
import Scenario from '../common/scenario'
import CorrectAlert from '../common/alert/correct'
import ErrorAlert from '../common/alert/error'
import FinalVideo from '../common/finalVideo'
import Video from '../common/video'
import QuestionSequence from './QuestionSequence'
import ChooseQuestion from './ChooseQuestion'
import AcronymGlossary from '../acronymGlossary'
import { renderWhenEnglish } from '../../utils/i18nHelper'

export default class Stories extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showModal: false,
			slider: {
				current: 0
			},
			showPopup: false,
			popupComponent: '',
			modal: {},
			playCase: false,
			playGeneralCase: false,
			scenario: '',
			showCorrectAlert: false,
			showErrorAlert: {
				show: false,
				imageError: null,
				errorMessage: null
			},
			correctMessage: '',
			currentQuestion: '',
			playVideo: false,
			fileVideo: null,
			loopVideo: false,
			isScenarioVideo: false,
			canClose: true,
			questionsSequence: {
				questions: [],
				sequence: 0,
				totalSequence: 0
			},
			playVideoFinalSequence: false,
			alertAfterVideo: false
		}

		this.next = this.next.bind(this)
		this.goToPage = this.goToPage.bind(this)
		this.showModal = this.showModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.currentSlider = this.currentSlider.bind(this)
		this.showPopup = this.showPopup.bind(this)
		this.closePopup = this.closePopup.bind(this)
		this.playAudio = this.playAudio.bind(this)
		this.stopAudio = this.stopAudio.bind(this)
		this.showCorrectAlert = this.showCorrectAlert.bind(this)
		this.nextQuestion = this.nextQuestion.bind(this)
		this.showErrorAlert = this.showErrorAlert.bind(this)
		this.updateCurrentQuestion = this.updateCurrentQuestion.bind(this)
		this.closeErrorAlert = this.closeErrorAlert.bind(this)
		this.playVideo = this.playVideo.bind(this)
		this.stopVideo = this.stopVideo.bind(this)
		this.showErrorAlertSequence = this.showErrorAlertSequence.bind(this)
		this.selectSequence = this.selectSequence.bind(this)
		this.showErrorAlertChooseQuestion = this.showErrorAlertChooseQuestion.bind(this)
		this.showErrorMissingCorrect = this.showErrorMissingCorrect.bind(this);
	}

	componentWillMount() {
		if ( this.props.questionsSequence ) {
			this.setState({ questionsSequence: { questions: this.props.questionsSequence[0].list, sequence: 0, totalSequence: this.props.questionsSequence[0].list.length } })
		}
	}

	next() {
		this.slider.slickNext()
	}
	
	goToPage(url) {
		route(url)
	}

	currentSlider(e) {
		this.setState({ slider: { current: e } })
	}

	showModal(state) {
		this.setState({ showModal: true, modal: state })
	}
	closeModal() {
		this.setState({ showModal: false })
	}

	showPopup(component, scenario) {
		if ( component == 'INFO' ){
			let currentSlider = this.state.slider.current
			this.showModal({ description: this.props.instructions[currentSlider] })
		} else if ( component == 'S' ){
			let format = scenario.slice(-3)
			if ( format == 'mp4' ) {
				this.playVideo(scenario, true, true)
			} else {
				this.setState({ showPopup: true, popupComponent: component, scenario })
			}
		} else if ( component == 'NEXT' ){
			this.setState({ showPopup: true, popupComponent: component })
		} else {
			this.setState({ showPopup: true, popupComponent: component })
		}
	}
	closePopup() {
		this.setState({ showPopup: false })
	}

	showCorrectAlert(msg) {
		let message = msg

		if ( !msg )
			message = 'Você selecionou as opções corretas!'

		this.setState({ showCorrectAlert: true, correctMessage: message })
	}
	nextQuestion() {
		this.setState({ showCorrectAlert: false })
		this.next()
	}

	showErrorMissingCorrect(message = 'missingItemsMessage') {
		this.setState({
			showErrorAlert: {
				show: true,
				errorImage: ['../../assets/svg/nurse_sad.svg'],
				errorMessage: message
			}
		});
	}

	showErrorAlert(i) {
		let currentAsk = this.props.questions[this.state.currentQuestion].list[i]
		let message = currentAsk.errorMessage
		
		!currentAsk.correct ? this.setState({ showErrorAlert: { show: true, errorImage: currentAsk.errorImage, errorMessage: message } }) : null
	}
	closeErrorAlert() {
		let alert = this.state.showErrorAlert
		alert.show = false
		this.setState({ showErrorAlert: alert })
	}
	updateCurrentQuestion(i) {
		this.setState({ currentQuestion: i })
	}

	showErrorAlertSequence(msg) {
		this.setState({ showErrorAlert: { show: true, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: msg } })
	}
	showErrorAlertChooseQuestion(msg) {
		this.setState({ showErrorAlert: { show: true, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: msg } })
	}

	playAudio(type) {
		if ( type == 'C' )
			this.setState({ playCase: true })
		if ( type == 'CG' )
			this.setState({ playGeneralCase: true })
	}
	stopAudio(type) {
		if ( type == 'C' )
			this.setState({ playCase: false })
		if ( type == 'CG' )
			this.setState({ playGeneralCase: false })
	}

	playVideo(video, loop = false, isScenario = false) {
		this.setState({ playVideo: true, fileVideo: video, loopVideo: loop, isScenarioVideo: isScenario })
	}
	stopVideo() {
		this.setState({ playVideo: false })
		
		setTimeout(function() {
			if ( this.state.playVideoFinalSequence ) {
				this.playVideo(this.props.questionsSequence[0].videoFinal.video)
				setTimeout(function() {
					this.setState({ playVideoFinalSequence: false, alertAfterVideo: true })
				}.bind(this), 10);
			}
			if ( this.state.alertAfterVideo ) {
				this.showCorrectAlert()
				this.setState({ alertAfterVideo: false })
			}
		}.bind(this), 10);
	}

	selectSequence(item) {
		let sequence = this.state.questionsSequence.questions[item].sequence;
		let currentSequence = this.state.questionsSequence.sequence + 1;

		if (sequence.includes(currentSequence)) {
			let questions = this.state.questionsSequence;
			questions.questions[item].checked = true;
			questions.sequence = currentSequence;

			this.setState({ questionsSequence: questions });
			
			if ( questions.questions.every(item => item.checked) ) {
				this.showCorrectAlert();
			}
		} else {
			this.showErrorAlertSequence('selectRightSequence');
		}
	}

	render() {
		const settings = {
			dots: false,
			arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			swipe: false,
			accessibility: false,
			mobileFirst: true,
			afterChange: this.currentSlider,
			className: 'sliderBarTop'
		}

		return (
			<Container>
				<div class={style.wrapSlide}>
					<TopBar action={ this.showPopup } />

					<Slider ref={ c => this.slider = c } {...settings}>
						<div class="slider-item">
							<Case nextSlider={ () => this.next() } play={ () => this.playAudio('C') } title={this.props.caseTitle} description={this.props.caseDescription} style={this.props.styleCase} />
						</div>

						{ this.props.questionsSequence ? this.props.questionsSequence.map( (item, i) =>
							<div class="slider-item" key={i}>
								<QuestionSequence { ...item }
									errorQuestion={ this.showErrorAlertSequence }
									playVideo={ this.playVideo }
									select={ this.selectSequence } />
							</div>
						) : null }

						{ this.props.chooseQuestions && !renderWhenEnglish() ? this.props.chooseQuestions.map( (item, i) =>
							<div class="slider-item" key={i}>
								<ChooseQuestion { ...item }
									playVideo={ this.playVideo }
									errorQuestion={ () => this.showErrorAlertChooseQuestion('electrolyteReplacementQuestionErrorMessage') }
									nextQuestion={ () => this.showCorrectAlert('electrolyteReplacementQuestionCorrectMessage') }
									playVideo={ this.playVideo }
									action={ () => this.updateCurrentQuestion(i) } />
							</div>
						) : null }

            { this.props.questions ? this.props.questions.map( (item, i) => 
							!item.onlyEnglish || (item.onlyEnglish && renderWhenEnglish()) ? (
								<div class="slider-item" key={i}>
									<Question
										nextSlider={ () => this.next() }
										title={item.title}
										subtitle={item.subtitle}
										list={item.list}
										style={item.style}
										scenario={ item.scenario }
										additionalInformation={item.additionalInformation}
										coverScenario={ item.coverScenario ? item.coverScenario : null }
										openScenario={ () => this.showPopup('S', item.scenario) }
										nextQuestion={ () => this.showCorrectAlert(item.correctMessage) }
										action={ () => this.updateCurrentQuestion(i) }
										errorQuestion={ this.showErrorAlert } 
										showErrorMissingCorrect={() => this.showErrorMissingCorrect(item.missingCorrectMessage)}	
									/>
								</div>
							) : null
            ) : null }

						{ this.props.sliderText ?
							<div class="slider-item">
								<div class={style.sliderItem}>
									<div class={style.sliderText}>
										<TitleQuestion label={this.props.sliderText} class={style.title} />

										<BtnPicc label="Next" color="pink" icon="arrow-right" right action={ () => this.next() } />
									</div>
								</div>
							</div>
						: null }

						{this.props.penultimateVideo && renderWhenEnglish() ?
							<div class="slider-item">
								<div class={style.sliderItem}>
									<FinalVideo {...this.props.penultimateVideo}
										playVideo={() => this.playVideo(this.props.penultimateVideo.video)}
										nextSlider={() => this.next()}
									/>
								</div>
							</div>
							: null }

						{this.props.finalVideo ?
							<div class="slider-item">
								<div class={style.sliderItem}>
									<FinalVideo {...this.props.finalVideo}
										playVideo={() => this.playVideo(this.props.finalVideo.video)}
										nextSlider={() => this.next()}
									/>
								</div>
							</div>
							: null }

						<div class="slider-item">
							<div class={style.sliderItem}>
								<ProcedureFinished action={ () => this.goToPage('/procedures') } />
							</div>
						</div>
					</Slider>
				</div>

				<Popup show={ this.state.showPopup } close={ () => this.closePopup() } class={ [this.state.popupComponent == 'S' ? style.imageScenario : null, this.state.popupComponent == 'NEXT' ? style.alert : null].join(' ') }>
					{ this.state.popupComponent == 'CG' ? <GeneralCase play={ () => this.playAudio('CG') } /> : null }
					{ this.state.popupComponent == 'C' ? <Case class={style.noPadding} noAction play={ () => this.playAudio('C') } title={this.props.caseTitle} description={this.props.caseDescriptionModal || this.props.caseDescription}/> : null }
					{ this.state.popupComponent == 'D' ? <Definitions showModal={ this.showModal } /> : null }
					{ this.state.popupComponent == 'AG' ? <AcronymGlossary showModal={ this.showModal } /> : null }
					{ this.state.popupComponent == 'P' ? <Preventions showModal={ this.showModal } /> : null }
					{ this.state.popupComponent == 'S' ? <Scenario scenario={ this.state.scenario } /> : null }
					{ this.state.popupComponent == 'V' ? <Scenario scenario={ this.state.scenario } type="video" /> : null }
				</Popup>

				<CorrectAlert show={ this.state.showCorrectAlert } nextQuestion={ () => this.nextQuestion() } message={ this.state.correctMessage } />
				<ErrorAlert show={ this.state.showErrorAlert.show } image={ this.state.showErrorAlert.errorImage } message={ this.state.showErrorAlert.errorMessage } close={ this.closeErrorAlert } />

				<Modal
					show={ this.state.showModal }
					close={ () => this.closeModal() }
					title={ this.state.modal.title }
					description={ this.state.modal.description } />
				
				<Player mp3={this.props.audioCase} play={ this.state.playCase } stop={ () => this.stopAudio('C') } />
				<Player mp3={this.props.audioGeneralCase} play={ this.state.playGeneralCase } stop={ () => this.stopAudio('CG') } />

				<Video mp4={ this.state.fileVideo } play={ this.state.playVideo } stop={ () => this.stopVideo() } loop={ this.state.loopVideo } isScenario={ this.state.isScenarioVideo } canClose={ this.state.canClose }/>
			</Container>
		)
	}
}
