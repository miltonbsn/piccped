import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class PosicionamentoAdequado extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {
				instructions: [
					'readTheClinicalCase',
					'clickOnTheIntervention',
					'clickOnTheIntervention',
					'finishedProcedure'
				],
				caseTitle: 'Posicionamento adequado',
				caseDescription: 'correctPositioningCaseDescription',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/posicionamento-adequado.mp3',
				questions: [
					{
						title: 'correctPositioningTitle',
						missingCorrectMessage: 'correctPositioningMissingCorrectMessage',
						list: [
							{ label: 'insertionOfThePicc', correct: true, checked: false },
							{ label: 'dressingWithTransparentMembrane', correct: true, checked: false },
							{ label: 'dressingIntegrity', correct: true, checked: false },
							{ label: 'catheterStabilization', correct: true, checked: false }
						],
						scenario: '../../assets/videos/scenario-posicionamento-adequado.mp4',
						coverScenario: '../../assets/scenarios/cover-scenario-posicionamento-adequado.png',
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'accidentalExteriorizationTitle',
						list: [
							{ label: 'performSkinAndCatheter', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg', '../../assets/svg/infeccao.svg'], errorMessage: 'accidentalExteriorizationErrorMessage' },
							{ label: 'maintainTheCatheterExteriorization', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_exterior.png',
						correctMessage: 'accidentalExteriorizationCorrectMessage',
						errorMessage: 'accidentalExteriorizationErrorMessage',
						style: {
							title: style.secondTitle,
							options: style.secondOptions
						}
					}
				]
			}
		}
	}

	render() {
		return (
			<Estories {...this.state.data} />
		)
	}
}
