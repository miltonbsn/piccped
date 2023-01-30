import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'
import { getVideoPath } from '../../utils/i18nHelper'

export default class AdministracaoFluidos extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'readTheClinicalCase',
				'clickOnTheIntervention',
				'clickOnTheIntervention',
				'finishedProcedure'
			],
			caseTitle: 'Administração de Fluidos',
			caseDescription: 'fluidAdministrationCaseDescription',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/administracao-fuidos.mp3',
			questions: [
				{
					title: 'fluidAdministrationTitle',
					missingCorrectMessage: 'fluidAdministrationMissingCorrectMessage',
					list: [
						{ label: 'recognizeVesicantDrugs', correct: true, checked: false },
						{ label: 'checkCompatibility', correct: true, checked: false },
						{ label: 'recognizeTheRiskOfOcclusion', correct: true, checked: false },
						{ label: 'identifiySolutionsWithAHighRisk', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						title: style.firstTitle,
						options: style.firstOptions
					}
				},
				{ 
					title: 'administrationOfThePrescribedDrugsTitle',
					missingCorrectMessage: 'administrationOfThePrescribedDrugsMissingCorrectMessage',
					list: [
						{ label: 'noInfusionPump', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'noInfusionPumpErrorMessage' },
						{ label: 'performTheAssessment', correct: true, checked: false },
						{ label: 'connectTheStopcocks', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'connectTheStopcocksErrorMessage' },
						{ label: 'administerCeftriaxoneAndDexamethasone', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'administerCeftriaxoneAndDexamethasoneErrorMessage' },
						{ label: 'administerCeftriaxoneAndWash', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						title: style.secondTitle,
						options: style.secondOptions
					}
				}
			],
			finalVideo: {
				title: 'medicationAdminstrationOnThePicc',
				poster: '../../assets/videos/administracao-medicacao-cover.png',
				video: `../../assets/videos/${getVideoPath('administracao-medicacao')}.mp4`
			}
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
