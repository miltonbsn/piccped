import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class AdministracaoFluidos extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'Leia o caso clínico para prosseguir.',
				'Clique na intervenção que você julga correta',
				'Clique na intervenção que você julga correta',
				'Você finalizou este procedimento. Volte ao início para iniciar outro.'
			],
			caseTitle: 'Administração de Fluidos',
			caseDescription: 'Conforme a prescrição médica de Arthur, a Ceftriaxona e Dexametasona intravenosas estão prescritas e devem ser administradas. Faça sua avaliação sobre como deve ser a administração de fluidos no PICC.',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/administracao-fuidos.mp3',
			questions: [
				{
					title: 'Para garantir a administração de fluidos no PICC de forma segura você deve levar em consideração alguns conhecimentos teóricos, aponte qual/quais você buscaria para sua avaliação clínica e tomada de decisão.',
					list: [
						{ label: 'Reconhecer fármacos vesicantes, não-vesicantes e soluções irritantes', correct: true, checked: false },
						{ label: 'Checar a compatibilidade e caraterística dos fármacos', correct: true, checked: false },
						{ label: 'Reconhecer o risco de oclusão por resíduos lipídicos quando administrar soluções de nutrição parenteral 3-em-1', correct: true, checked: false },
						{ label: 'Identificar medicamentos/soluções com alto risco para precipitação quando em contato com outra', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						title: style.firstTitle,
						options: style.firstOptions
					}
				},
				{ 
					title: 'Agora, faça sua avaliação clínica e tomada de decisão quanto a administração dos medicamentos prescritos',
					list: [
						{ label: 'Não é necessário administração em bomba de infusão', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'É altamente recomendado  uso de bomba de infusão na administração de fluidos no PICC.' },
						{ label: 'Realizar a avaliação e inspeção do local de inserção e da permeabilidade do cateter antes de administrar o medicamento', correct: true, checked: false },
						{ label: 'Conectar a “torneirinha” e administrar a Ceftriaxona e Dexametasona  juntas', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'A Ceftriaxona por possuir pH de 6, apresenta alto risco de precipitação quanto em contato com outra. A administração destas medicações devem ser realizadas separadamente.' },
						{ label: 'Administrar Ceftriaxona e seguidamente a Dexametasona sem necessidade de realizar lavagem com SF 0,9% no intervalo dos medicamentos', correct: false, checked: false, errorImage: ['../../assets/svg/obstrucao.svg'], errorMessage: 'A Ceftriaxona por possuir pH de 6, apresenta alto risco de precipitação quando em contato com outra. Deve-se minimizar o risco de obstrução através de lavagem adequada com SF entre as infusões.' },
						{ label: 'Administrar Ceftriaxona, lavar o PICC com SF 0,9%, aproximadamente 1 ml  [2x o volume do cateter (0,25) + volume das conexões]. e instalar Dexametasona.', correct: true, checked: false }
					],
					scenario: '../../assets/scenarios/cenario-prevencao-infeccao-3.jpeg',
					style: {
						title: style.secondTitle,
						options: style.secondOptions
					}
				}
			],
			finalVideo: {
				title: 'Administração de medicação no PICC',
				poster: '../../assets/videos/administracao-medicacao-cover.png',
				video: '../../assets/videos/administracao-medicacao.mp4'
			}
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
