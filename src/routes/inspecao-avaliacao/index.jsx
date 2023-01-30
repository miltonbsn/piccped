import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class InspecaoAvaliacao extends Component {
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
				caseTitle: 'Avaliação do local de inserção',
				caseDescription: 'insertionPlaceCaseDescription',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/inspecao-avaliacao.mp3',
				questions: [
					{
						title: 'pointOutWhichSigns',
						list: [
							{ label: 'Exteriorização do cateter', correct: true, checked: false },
							{ label: 'Dor', correct: true, checked: false },
							{ label: 'Hiperemia', correct: true, checked: false },
							{ label: 'Exsudato', correct: true, checked: false },
							{ label: 'Integridade da sutura (se houver)', correct: true, checked: false },
							{ label: 'Edema', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_base.png',
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'possibleInfectionTitle',
						list: [
							{ label: 'Retirar o PICC imediatamente', correct: false, checked: false, errorImage: null, errorMessage: 'removePiccFeedbackWarning' },
							{ label: 'infectionSiteCorrectOption', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_inflamacao.png',
						correctMessage: 'infectionSiteCorrectMessage',
						style: {
							title: style.secondTitle,
							options: style.secondOptions
						}
					},
					{
						title: 'assessmentFrequencyTitle',
						list: [
							{ label: 'assessmentFrequencyWrongOption', correct: false, checked: false, errorImage: ['../../assets/svg/mau_posicionamento.svg', '../../assets/svg/infeccao.svg'], errorMessage: 'assessmentFrequencyFeedbackWarning' },
							{ label: 'assessmentFrequencyCorrectOption', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_3FR.png',
						correctMessage: 'assessmentFrequencyCorrectMessage',
						style: {
							title: style.thirdTitle,
							options: style.thirdOptions
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
