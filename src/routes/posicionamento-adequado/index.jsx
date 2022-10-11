import { h, Component } from 'preact'
import style from './style.less'
import Estories from '../../components/estories'

export default class PosicionamentoAdequado extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {
				instructions: [
					'Leia o caso clínico para prosseguir.',
					'Clique na intervenção que você julga correta',
					'Clique na intervenção que você julga correta',
					'Você finalizou este procedimento. Volte ao início para iniciar outro.'
				],
				caseTitle: 'Posicionamento Adequado',
				caseDescription: 'Durante a troca do curativo você atentou-se aos aspectos relacionados ao posicionamento adequado. Dê sequência a sua avaliação e realize sua tomada de decisão em relação ao posicionamento adequado após a troca do curativo.',
				audioGeneralCase: '../../assets/audio/general-case.mp3',
				audioCase: '../../assets/audio/posicionamento-adequado.mp3',
				questions: [
					{
						title: 'Observe o PICC de Arthur e identifique os fatores que previnem um posicionamento inadequado da ponta do cateter',
						list: [
							{ label: 'Inserção do PICC acima da zona flexora', correct: true, checked: false },
							{ label: 'Curativo com película transparente bem aderida', correct: true, checked: false },
							{ label: 'Curativo íntegro', correct: true, checked: false },
							{ label: 'Estabilização do cateter com o fixador sem sutura', correct: true, checked: false }
						],
						scenario: '../../assets/videos/scenario-posicionamento-adequado.mp4',
						coverScenario: '../../assets/scenarios/cover-scenario-posicionamento-adequado.png',
						style: {
							title: style.firstTitle,
							options: style.firstOptions
						}
					},
					{ 
						title: 'Em caso de exteriorização acidental do cateter, realize sua avaliação e tomada de decisão:',
						list: [
							{ label: 'Realizar a assepsia da pele e do cateter e reinserir a parte exteriorizada', correct: false, checked: false, errorImage: ['../../assets/svg/flebite.svg', '../../assets/svg/infeccao.svg'], errorMessage: 'Nenhum antisséptico ou técnica aplicada  tornará a pele ou cateter estéril.' },
							{ label: 'Manter a exteriorização do cateter e monitorar o posicionamento de sua ponta', correct: true, checked: false }
						],
						scenario: '../../assets/scenarios/cenario_exterior.png',
						correctMessage: 'A recomendação é que a troca seja realizada após 24 horas da inserção. Agora defina os materiais que você irá utilizar.',
						errorMessage: 'Nenhum antisséptico ou técnica aplicada tornará a pele ou cateter estéril!',
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
