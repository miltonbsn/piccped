import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'
import { getVideoPath } from '../../utils/i18nHelper'

export default class PrevencaoInfeccao extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'readTheClinicalCase',
				'clickOnTheIntervention',
				'clickOnTheIntervention',
				'finishedProcedure'
			],
			caseTitle: 'preventionOfCatheterBloodstreamInfection',
			caseDescription: 'infectionPreventionCaseDescription',
			caseDescriptionModal: 'preventionOfClabsiDescription',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/prevencao-infeccao.mp3',
			styleCase: style.case,
			questions: [
				{
					title: 'electrolyteReplacementQuestionTitle',
					list: [
						{ label: 'animationOne', correct: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'electrolyteReplacementQuestionErrorMessage' },
						{ label: 'animationTwo', correct: true, errorImage: ['../../assets/svg/infeccao.svg'], correctMessage: 'electrolyteReplacementQuestionCorrectMessage' }
					],
					correctMessage: 'electrolyteReplacementQuestionCorrectMessage',
					style: {
						wrapTitle: style.secondWrapTitle,
						title: style.secondTitle,
						wrapOptions: style.secondWrapOptions,
						options: style.secondOptions,
						subTitle: style.subtitle
					}
				},
				{
					title: 'How soon after PICC insertion can the PICC be used if the tip position has been confirmed as being in a central position?',
					list: [
						{ label: 'immediately', correct: true, checked: false },
						{ label: '12hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario-prevenscao-infeccao-1.png',
					correctMessage: 'It is possible to use the PICC immediately as long as the tip position has been confirmed as being in a central position.',
					style: {
						wrapTitle: style.secondWrapTitle,
						title: style.secondTitle,
						wrapOptions: style.secondWrapOptions,
						options: style.secondOptions,
						subTitle: style.subtitle
					}
				},
				{
					subtitle: 'peripheralIntravenousCatheter',
					title: 'peripheralVenousAccessTitle',
					list: [
						{ label: 'immediately', correct: true, checked: false },
						{ label: '12hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario-prevenscao-infeccao-1.png',
					correctMessage: 'peripheralVenousAccessTitleCorrectMessage',
					style: {
						wrapTitle: style.firstWrapTitle,
						title: style.firstTitle,
						wrapOptions: style.firstWrapOptions,
						options: style.firstOptions,
						subTitle: style.subtitle
					}
				},
				{
					title: 'connectorsAndHubsTitle',
					subtitle: 'connectorsAndHubs',
					list: [
						{ label: '12hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg']  },
						{ label: 'upTo96hours', correct: true, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario_3FR.png',
					style: {
						wrapTitle: style.secondWrapTitle,
						title: style.secondTitle,
						wrapOptions: style.secondWrapOptions,
						options: style.secondOptions,
						subTitle: style.subtitle
					},
					correctMessage: 'Você selecionou a opção correta!'
				},
				{
					title: 'equipamentsExchangeInterval',
					// subtitle: 'solutionWithoutLipid',
					list: [
						{ label: '12hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'upTo96hours', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						wrapTitle: style.secondWrapTitle,
						wrapOptions: style.secondWrapOptions,
						subTitle: style.subtitle
					},
					correctMessage: 'Você selecionou a opção correta!'
				},
				{
					title: 'administeredSolutionTitle',
					// subtitle: 'solutionWithLipid',
					list: [
						{ label: '36hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '12or24hours', correct: true, checked: false },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'upTo96hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						wrapTitle: style.secondWrapTitle,
						wrapOptions: style.secondWrapOptions,
						subTitle: style.subtitle
					},
					correctMessage: 'Você selecionou a opção correta!'
				},
				{
					title: 'changeIntervalForEquipamentsTitle',
					list: [
						{ label: 'within4hours', correct: true, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24hours', correct: false, checked: false },
						{ label: '48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'upTo96hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						wrapTitle: style.secondWrapTitle,
						wrapOptions: style.secondWrapOptions,
						subTitle: style.subtitle
					},
					correctMessage: 'Você selecionou a opção correta!'
				}
			],
			questionsSequence: [
				{
					title: 'sequencePermeabilizationTitle',
					list: [
						{ sequence: [3], checked: false, label: 'prepareTheMaterials', icon: '../../assets/svg/icons_bandeja.svg', video: '../../assets/videos/question-video-bandeja.mp4', cover: '../../assets/videos/question-video-bandeja-cover.png' },
						{ sequence: [5, 2], checked: false, label: 'donNonSterileGloves', icon: '../../assets/svg/icons_luva.svg', video: '../../assets/videos/question-video-luva.mp4', cover: '../../assets/videos/question-video-luva-cover.png' },
						{ sequence: [4, 1], checked: false, label: 'performHandHygieneWithAlcohol', icon: '../../assets/svg/icons_alcool.svg', video: '../../assets/videos/question-video-alcool.mp4', cover: '../../assets/videos/question-video-alcool-cover.png' },
						{ sequence: [1, 4], checked: false, label: 'handwashing', icon: '../../assets/svg/icons_pia.svg', video: '../../assets/videos/question-video-pia.mp4', cover: '../../assets/videos/question-video-pia-cover.png' },
						{ sequence: [2, 5], checked: false, label: 'donNonSterileGloves', icon: '../../assets/svg/icons_luva.svg', video: '../../assets/videos/question-video-luva.mp4', cover: '../../assets/videos/question-video-luva-cover.png' }
					],
					videoFinal: { video: '../../assets/videos/question-video-flush.mp4', cover: '../../assets/videos/question-video-flush-cover.png' },
					style: {}
				}
			],
			sliderText: ''
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
