import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class PrevencaoInfeccao extends Component {
	constructor(props) {
		super(props)

		this.state = {
			instructions: [
				'Leia o caso clínico para prosseguir.',
				'Clique na intervenção que você julga correta',
				'Clique na intervenção que você julga correta',
				'Você finalizou este procedimento. Volte ao início para iniciar outro.'
			],
			caseTitle: 'Prevenção de Infecção de Corrente Sanguínea Relacionada a Cateter',
			caseDescription: 'Você tem como prioridade a segurança do paciente e uma de suas preocupações é a prevenção de infecção. Sabendo que Arthur está em um ambiente hospitalar, você prevê que as bactérias e microorganismos estão rodeando Arthur por todos os lados. Faça seu raciocínio clínico e tome sua decisão em cada contexto apresentado a seguir a fim de evitar que bactérias e demais microorganismos invadam a corrente sanguínea de Arthur.',
			audioGeneralCase: '../../assets/audio/general-case.mp3',
			audioCase: '../../assets/audio/prevencao-infeccao.mp3',
			styleCase: style.case,
			questions: [
				{
					subtitle: 'Novo acesso venoso',
					title: 'Imediatamente antes do PICC ser inserido, Arthur possuía um acesso venoso periférico. Ao realizar a passagem do PICC e detectar um posicionamento adequado, o enfermeiro orientou que a infusão do medicamento que estava ocorrendo no acesso venoso periférico passasse a ser administrada no cateter central. Avalie quando deve ocorrer a troca da solução, equipo e conexões neste caso.',
					list: [
						{ label: 'Imediatamente', correct: true, checked: false },
						{ label: '12 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
					],
					scenario: '../../assets/scenarios/cenario-prevenscao-infeccao-1.png',
					correctMessage: 'Na vigência de um novo acesso venoso, seja periférico ou central, todos os conectores e equipos devem ser trocados!',
					style: {
						wrapTitle: style.firstWrapTitle,
						title: style.firstTitle,
						wrapOptions: style.firstWrapOptions,
						options: style.firstOptions,
						subTitle: style.subtitle
					}
				},
				{
					title: 'Agora faça sua avaliação em relação ao intervalo de troca de conectores, quando não há infusão de lipídeos, componentes sanguíneos ou derivados.',
					subtitle: 'Conectores e hubs',
					list: [
						{ label: '12 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72 Horas', correct: true, checked: false },
						{ label: 'até 96 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
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
					title: 'Faça sua avaliação em relação ao intervalo de troca do equipo de acordo com cada solução administrada',
					subtitle: 'Solução que não contém lipídeo, componentes sanguíneos ou derivados',
					list: [
						{ label: '12 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '48 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72 Horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'até 96 horas', correct: true, checked: false }
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
					title: 'Agora faça sua avaliação em relação ao intervalo de troca do equipo de acordo com cada solução administrada',
					subtitle: 'Solução contém lipídeo/nutrição parenteral com lipídeo - Heparina',
					list: [
						{ label: '12 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24 horas', correct: true, checked: false },
						{ label: '48 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72 Horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'até 96 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
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
					title: 'Agora selecione o intervalo de troca dos equipos e conectores caso haja a transfusão de concentrado de hemácias em 4 horas:',
					subtitle: 'Todos os componentes sanguíneos para infusão contínua',
					list: [
						{ label: 'dentro de 4 horas', correct: true, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '24 horas', correct: false, checked: false },
						{ label: '48 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: '72 Horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] },
						{ label: 'até 96 horas', correct: false, checked: false, errorImage: ['../../assets/svg/infeccao.svg'] }
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
					title: 'Você realizará a permeabilização do cateter. Clique nos objetos para apontar os passos corretos para o procedimento.',
					list: [
						{ sequence: 2, checked: false, label: 'Preparar os materiais e levar ao leito', icon: '../../assets/svg/icons_bandeja.svg', video: '../../assets/videos/question-video-bandeja.mp4', cover: '../../assets/videos/question-video-bandeja-cover.png' },
						{ sequence: 3, checked: false, label: 'Higienizar as mãos com álcool 70%', icon: '../../assets/svg/icons_alcool.svg', video: '../../assets/videos/question-video-alcool.mp4', cover: '../../assets/videos/question-video-alcool-cover.png' },
						{ sequence: 1, checked: false, label: 'Lavagem das mãos', icon: '../../assets/svg/icons_pia.svg', video: '../../assets/videos/question-video-pia.mp4', cover: '../../assets/videos/question-video-pia-cover.png' },
						{ sequence: 4, checked: false, label: 'Calçar luvas não-estéreis', icon: '../../assets/svg/icons_luva.svg', video: '../../assets/videos/question-video-luva.mp4', cover: '../../assets/videos/question-video-luva-cover.png' },
					],
					videoFinal: { video: '../../assets/videos/question-video-flush.mp4', cover: '../../assets/videos/question-video-flush-cover.png' },
					style: {}
				}
			],
			chooseQuestions: [
				{
					title: 'Arthur começou uma reposição hidroeletrolítica intravenosa e sairá do leito para o banho, o enfermeiro, por sua vez, optou por desconectar a infusão. Avalie as duas animações em relação ao sistema de infusão – clique no ícone da animação para assisti-las – e após isto escolha o rótulo que você julgue que apresente a conduta adequada "animação 1" ou "animação 2".',
					list: [
						{ label: 'Animação 1', correct: false, video: '../../assets/videos/question-video-error.mp4', cover: '../../assets/videos/question-video-error-cover.png', errorImage: '../../assets/svg/infeccao.svg', errorMessage: 'A desconexão do sistema de infusão não deve ser realizada intermitentemente, se este sistema de infusão for aberto e desconectado o conjunto deverá ser trocado e um novo sistema de infusão deve ser inserido.' },
						{ label: 'Animação 2', correct: true, video: '../../assets/videos/question-video-correct.mp4', cover: '../../assets/videos/question-video-correct-cover.png', correctMessage: 'Parabéns, você preveniu que a ICSRC atingisse Arthur!' }
					],
					style: {}
				}
			],
			sliderText: 'O diagnóstico de ICSRC deve ser realizado de maneira precoce por meio dos sinais de infecção, incluindo eritema, dor, exsudato, rubor, sensibilidade, edema e sinais sistêmicos de sepse. O PICC não deve ser rotineiramente substituído, mas quando houver indicações de infecção clínica.'
		}
	}

	render() {
		return (
			<Estories {...this.state} />
		)
	}
}
