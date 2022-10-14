import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class ManutencaoPermeabilidade extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'Leia o caso clínico para prosseguir.',
				'Clique na intervenção que você julga correta',
				'Clique na intervenção que você julga correta',
				'Clique na intervenção que você julga correta',
				'Você finalizou este procedimento. Volte ao início para iniciar outro.'
			],
			caseTitle: 'Manutenção da permeabilidade',
			caseDescription: 'Observando que Arthur vem fazendo uso de medicação intermitente (antibioticoterapia e corticoterapia) no PICC, faça sua avaliação em relação a manutenção da permeabilidade deste cateter.',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/manutencao-permeabilidade.mp3',
			questions: [
				{
					title: 'Observe o PICC de Arthur e identifique os fatores que favorecem a manutenção da permeabilidade do cateter',
					missingCorrectMessage: 'Falta (m) algum (ns) fator (es) que favorece (em) a permeabilidade do cateter, retorne e realize novamente sua avaliação',
					list: [
						{ label: 'Realizar flushing com SF 0,9% e lock', correct: true, checked: false },
						{ label: 'A substância  utilizada deve ser Heparina', correct: false, checked: false, errorMessage: 'Não é recomendado uso de heparina de rotina, apenas se houver indicação.' },
						{ label: 'Realizar o flushing aplicando a técnica de flushing pulsátil', correct: true, checked: false },
						{ label: 'Realizar o flushing aplicando a técnica de pressão positiva e lock', correct: true, checked: false },
						{ label: 'Apenas infundir o volume do flushing continuamente, sem aplicar demais técnicas', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'A técnica de flushing pulsátil e pressão positiva com o lock mostram-se eficazes na permeabilização do cateter e prevenção da obstrução.' }
					],
					scenario: '../../assets/scenarios/cenario_base.png',
					style: {
						title: style.firstTitle,
						options: style.firstOptions
					}
				},
				{ 
					title: 'Observe o PICC de Arthur e identifique os fatores que favorecem a manutenção da permeabilidade do cateter. Considere que não há infusão contínua no PICC, apenas uso de antibiótico intermitente',
					missingCorrectMessage: 'Falta (m) algum (ns) fator (es) que favorece (em) a permeabilidade do cateter, retorne e realize novamente sua avaliação',
					list: [
						{ label: 'O flushing e lock devem ser realizados a cada 6 hs ou de acordo com protocolo institucional', correct: true, checked: false },
						{ label: 'O flushing deve ser realizado ao início e ao término de cada medicação', correct: true, checked: false },
						{ label: 'Não é necessário realizar flushing e lock de rotina se a técnica de pressão positiva foi respeitada', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'A técnica de flushing pulsátil e pressão positiva com o lock mostram-se eficazes na permeabilização do cateter e prevenção da obstrução.' },
						{ label: 'Deve ser utilizado seringa de 1 ml para obter maior pressão', correct: false, checked: false, errorImage: ['../../assets/svg/rompimento.svg'], errorMessage: 'A seringa de 1 ml tem pressão excessiva, já que a pressão de infusão no PICC nunca deve exceder 25 psi.' },
						{ label: 'Utilizar sempre seringa de 10 ml ou seringa pré-preenchida', correct: true, checked: false },
						{ label: 'Utilizar bomba de infusão para administração de infusão contínua', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario_base.png',
					style: {
						title: style.secondTitle,
						options: style.secondOptions
					}
				},
				{ 
					title: 'Observe o PICC de Arthur e avalie qual deve ser o volume do flushing realizado para permeabilizar o cateter',
					list: [
						{ label: '0,5 ml', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'O volume realizado não atinge o recomendando.' },
						{ label: '1 ml', correct: true, checked: false },
						{ label: '3 ml', correct: false, checked: false, errorMessage: 'Não é necessário realizar um volume tão superior ao necessário.' },
						{ label: '5 ml', correct: false, checked: false, errorMessage: 'Não é necessário realizar um volume tão superior ao necessário.' },
						{ label: '10 ml', correct: false, checked: false, errorMessage: 'Não é necessário realizar um volume tão superior ao necessário.' }
					],
					scenario: '../../assets/scenarios/cenario_3FR.png',
					correctMessage: 'O volume atinge o recomendado: 2x o volume do cateter (0,25) + volume das conexões.',
					style: {
						title: style.thirdTitle,
						options: style.thirdOptions
					}
				}
			],
			finalVideo: {
				title: 'Permeabilização do PICC',
				poster: '../../assets/videos/permeabilizacao-picc-cover.png',
				video: '../../assets/videos/permeabilizacao-picc.mp4'
			}
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
