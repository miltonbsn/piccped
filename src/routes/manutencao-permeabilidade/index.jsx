import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'
import { getVideoPath } from '../../utils/i18nHelper'

export default class ManutencaoPermeabilidade extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'readTheClinicalCase',
				'clickOnTheIntervention',
				'clickOnTheIntervention',
				'clickOnTheIntervention',
				'finishedProcedure'
			],
			caseTitle: 'Manutenção da permeabilidade',
			caseDescription: 'permeabilityMaintenanceCaseDescription',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/manutencao-permeabilidade.mp3',
			questions: [
				{
					title: 'permeabilityMaintenanceTitle',
					missingCorrectMessage: 'permeabilityMaintenanceTitleMissingCorrectMessage',
					list: [
						{ label: 'performFlushingSodiumChloride', correct: true, checked: false },
						{ label: 'pulsatileFlushing', correct: true, checked: false },
						{ label: 'flushingPositivePressure', correct: true, checked: false },
						{ label: 'flushingWithoutOtherTechniques', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'flushingWithoutOtherTechniquesErrorMessage' }
					],
					scenario: '../../assets/scenarios/cenario_base.png',
					style: {
						title: style.firstTitle,
						options: style.firstOptions
					}
				},
				{
					title: 'maintenanceOfCatheterTitle',
					missingCorrectMessage: 'maintenanceOfCatheterMissingCorrectMessage',
					list: [
						{ label: 'forNeonatesItIsNotRecommended', correct: true, checked: false, onlyEnglish: true },
						{ label: 'flushingAndLockingEverySixHours', correct: true, checked: false },
						{ label: 'flushingBeginningAndAtTheEnd', correct: true, checked: false },
						{ label: 'notNecessaryFlushingAndLocking', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'notNecessaryFlushingAndLockingErrorMessage' },
						{ label: 'alwaysUseSyringe', correct: true, checked: false },
						{ label: 'useInfusionPump', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario_base.png',
					style: {
						title: style.secondTitle,
						options: style.secondOptions
					}
				},
				{ 
					title: 'flushingVolumeTitle',
					list: [
						{ label: '0,5 ml', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'flushingVolumeErrorMessage' },
						{ label: '1 ml', correct: true, checked: false },
						{ label: '3 ml', correct: false, checked: false, errorMessage: 'notNecessaryVolume' },
						{ label: '5 ml', correct: false, checked: false, errorMessage: 'notNecessaryVolume' },
						{ label: '10 ml', correct: false, checked: false, errorMessage: 'notNecessaryVolume' }
					],
					scenario: '../../assets/scenarios/cenario_3FR.png',
					correctMessage: 'flushingVolumeCorrectMessage',
					style: {
						title: style.thirdTitle,
						options: style.thirdOptions
					}
				}
			],
			finalVideo: {
				title: 'piccPermeabilization',
				poster: '../../assets/videos/permeabilizacao-picc-cover.png',
				video: `../../assets/videos/${getVideoPath('permeabilizacao-picc')}.mp4`
			}
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
