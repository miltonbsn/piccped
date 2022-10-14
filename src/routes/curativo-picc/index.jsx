import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class CurativoPicc extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {
				instructions: [
					'Leia o caso clínico para prosseguir.',
					'Clique na intervenção que você julga correta',
					'Clique na intervenção que você julga correta',
					'Clique na intervenção que você julga correta',
					'Você finalizou este procedimento. Volte ao início para iniciar outro.'
				],
				caseTitle: 'Curativo do PICC',
				caseDescription: 'Durante a avaliação do sítio de inserção do PICC de Arthur, você observou que o curativo, o qual foi realizado com membrana transparente semipermeável no momento da inserção, há 24 horas, encontra-se com sangue envelhecido. Faça sua avaliação clínica e tomada de decisão frente ao exposto.',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/curativo-picc.mp3',
				questions: [
					{
						title: 'O que você deve fazer?',
						list: [
							{ label: 'Trocar curativo', correct: true, checked: false },
							{ label: 'Aguardar 48 horas para trocar', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'Infecção de Corrente Sanguínea Relacionada ao Cateter Central (ICSRC). Ao apresentar sujidade o curativo deve ser trocado.' }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						correctMessage: 'Quando há presença de gaze no curativo, a recomendação é que a troca seja realizada após 48 horas da inserção, quando este encontra-se limpo e íntegro. No entanto, na presença de sujidade ou ruptura da integridade, a troca deve ser realizada imediatamente.',
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'Selecione os materiais necessários para troca do curativo do PICC',
						missingCorrectMessage: 'Falta (m) material (is) para realização da troca do curativo visando prevenir eventos adversos, retorne e realize novamente sua avaliação',
						list: [
							{ label: 'Gaze não-estéril', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'Deve ser mantida técnica asséptica para troca  do curativo.' },
							{ label: 'Fixador sem sutura', correct: true, checked: false },
							{ label: 'Membrana transparente semipermeável', correct: true, checked: false },
							{ label: 'Pacote de curativo e gaze estéril', correct: true, checked: false },
							{ label: 'Soro Fisiológico 0,9%', correct: true, checked: false },
							{ label: 'Clorexidina 0,5%', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						style: {
							title: style.secondTitle,
							options: style.secondOptions
						}
					},
					{
						title: 'Selecione os passos a serem realizados na troca do curativo',
						missingCorrectMessage: 'Falta (m) algum (ns) passo (s) para realização da troca do curativo visando prevenir eventos adversos, retorne e realize novamente sua avaliação',
						list: [
							{ label: 'Higienizar as mãos', correct: true, checked: false },
							{ label: 'Remover sangue com gaze embebida em soro', correct: true, checked: false },
							{ label: 'Remover sangue com gaze embebida em Clorexidina', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg'], errorMessage: 'Não é recomendado a remoção do sangue do sítio de inserção com Clorexidina' },
							{ label: 'Curativo apenas com membrana transparente semipermeável, sem uso de dispositivo de estabilização do cateter', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg', '../../assets/svg/mau_posicionamento.svg'], errorMessage: 'É indicado o uso de fixador sem sutura para auxiliar na estabilização do cateter.' },
							{ label: 'Curativo com membrana transparente semipermeável', correct: true, checked: false },
							{ label: 'Utilizar fixador sem sutura para estabilização do cateter', correct: true, checked: false },
							{ label: 'Realizar assepsia com gaze embebida em Clorexidina 0,5%', correct: true, checked: false }
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
					video: '../../assets/videos/troca-curativo.mp4'
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