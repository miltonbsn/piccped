import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class InspecaoAvaliacao extends Component {
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
				caseTitle: 'Inspeção e Avaliação',
				caseDescription: 'A primeira observação que você irá realizar enquanto enfermeiro é em relação a inspeção e avaliação do sítio de inserção do PICC. Desta maneira, faça sua avaliação clínica e tomada de decisão frente ao exposto.',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/inspecao-avaliacao.mp3',
				questions: [
					{
						title: 'Indique quais sinais você deverá estar atento ao realizar a inspeção do local',
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
						title: 'Ao identificar alguns sinais de possível infecção local, ou seja, no sítio de inserção, como eritema e endurecimento, realize sua tomada de decisão:',
						list: [
							{ label: 'Retirar o PICC imediatamente', correct: false, checked: false, errorImage: null, errorMessage: 'Os sinais locais não devem ser utilizados como único indicador de infecção relacionado ao PICC. Faça novamente sua avaliação!' },
							{ label: 'É possível manter o PICC e realizar as intervenções indicadas frente à infecção local, se os sinais não estiverem correlacionados à sinais sistêmicos, como: febre, taquicardia, hipotensão ou taquipneia', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_inflamacao.png',
						correctMessage: 'A infecção local raramente está relacionada a ICSRC. Recomenda-se avaliar continuamente a evolução dos sinais locais e atentar para presença de sinais sistêmicos.',
						style: {
							title: style.secondTitle,
							options: style.secondOptions
						}
					},
					{
						title: 'Em relação a frequência da avaliação e inspeção do sítio de inserção do PICC',
						list: [
							{ label: 'Deve ser realizada a cada 7 dias', correct: false, checked: false, errorImage: ['../../assets/svg/mau_posicionamento.svg', '../../assets/svg/infeccao.svg'], errorMessage: 'Isto pode ocasionar a ICSRC e até mesmo o posicionamento inadequado.' },
							{ label: 'Deve ser realizada a cada 6 horas e a cada troca de curativo', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_3FR.png',
						correctMessage: 'A recomendação é que o sítio de inserção seja avaliado a cada 6 horas e a cada troca de curativos. Agora defina sua avaliação.',
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
