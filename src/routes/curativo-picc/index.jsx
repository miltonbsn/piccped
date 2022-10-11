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
				caseDescription: 'Durante a avaliação do sítio de inserção do PICC de Arthur, você observou que o curativo, o qual foi realizado com gaze e película transparente no momento da inserção, há 24 horas, encontra-se com sangue envelhecido. Faça sua avaliação clínica e tomada de decisão frente ao exposto.',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/curativo-picc.mp3',
				questions: [
					{
						title: 'O que você deve fazer?',
						list: [
							{ label: 'Trocar curativo', correct: true, checked: false },
							{ label: 'Aguardar 48 horas para trocar', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'Infecção de Corrente Sanguínea Relacionada ao Cateter Central (ICSRC)' }
						],
						scenario: '../../assets/scenarios/cenario_gaze.png',
						correctMessage: 'A recomendação é que a troca seja realizada após 24 horas da inserção. Agora defina os materiais que você irá utilizar.',
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'Selecione os materiais necessários para troca do curativo do PICC',
						list: [
							{ label: 'Gaze não-estéril', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'], errorMessage: 'Deve ser mantida técnica asséptica para troca  do curativo.' },
							{ label: 'Fixador sem sutura', correct: true, checked: false },
							{ label: 'Película transparente', correct: true, checked: false },
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
						list: [
							{ label: 'Higienizar as mãos', correct: true, checked: false },
							{ label: 'Remover sangue com gaze embebida em soro', correct: true, checked: false },
							{ label: 'Remover sangue com gaze embebida em Clorexidina', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg'], errorMessage: 'Não é recomendado a remoção do sangue do sítio de inserção com Clorexidina' },
							{ label: 'Curativo apenas com película transparente', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg', '../../assets/svg/mau_posicionamento.svg'], errorMessage: 'É indicado o uso de fixador sem sutura para auxiliar na estabilização do cateter.' },
							{ label: 'Curativo com película transparente', correct: true, checked: false },
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