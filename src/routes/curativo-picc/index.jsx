import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'
import { getVideoPath } from '../../utils/i18nHelper'

export default class CurativoPicc extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {
				instructions: [
					'readTheClinicalCase',
					'clickOnTheIntervention',
					'clickOnTheIntervention',
					'clickOnTheIntervention',
					'finishedProcedure'
				],
				caseTitle: 'Curativo do PICC',
				caseDescription: 'dressingChangesCaseDescription',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/curativo-picc.mp3',
				questions: [
					{
						title: 'whatShouldYouDo',
						list: [
							{ label: 'Trocar curativo', correct: true, checked: false },
							{ label: 'wait48hours', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'dressingChangesWrongFeedback' }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						correctMessage: 'dressingChangesCorrectMessage', 
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'dressingChangesMaterialsTitle',
						missingCorrectMessage: 'dressingChangesMaterialsMissingCorrectMessage',
						list: [
							{ label: 'nonSterileGauze', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'nonSterileGauzeWrongFeedback' },
							{ label: 'adhesiveSecurementDevices', correct: true, checked: false },
							{ label: 'transparentSemipermeableMembrane', correct: true, checked: false },
							{ label: 'dressingChangeKit', correct: true, checked: false },
							{ label: 'sodiumChloride', correct: true, checked: false },
							{ label: 'alcoholBasedChlorhexidine', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						style: {
							title: style.secondTitle,
							options: style.secondOptions
						}
					},
					{
						title: 'dressingChangesStepsTitle',
						missingCorrectMessage: 'dressingChangesStepsMissingCorrectMessage',
						list: [ 
							{ label: 'performHandHygiene', correct: true, checked: false },
							{ label: 'removeBloodWithSodiumChloride', correct: true, checked: false },
							{ label: 'removeBloodWithSoakedGauze', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg'], errorMessage: 'removeBloodWithSoakedGauzeWrongFeedback' },
							{ label: 'dressingWithTSM', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg', '../../assets/svg/mau_posicionamento.svg'], errorMessage: 'dressingWithTSMWrongFeedback' },
							{ label: 'useTSM', correct: true, checked: false },
							{ label: 'useAdhesiveSecurement', correct: true, checked: false },
							{ label: 'performAsepsis', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						style: {
							title: style.thirdTitle,
							options: style.thirdOptions
						}
					}
				],
				finalVideo: {
					title: 'Troca de Curativo',
					poster: '../../assets/videos/troca-curativo-poster.png',
					video: `../../assets/videos/${getVideoPath('troca-curativo')}.mp4`
				}
			}
		}
	}

	render() {
		return (
			<Estories {...this.state.data} />
		)
	}
}