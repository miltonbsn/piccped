import { h, Component } from 'preact'
import { BtnPicc } from '../common/button/button'
import { IconTitle } from '../common/titles/IconTitle'
import style from './style.less'

export default class Definitions extends Component {
	constructor(props) {
    super(props)

    this.state = {
			definitions: {
				segurancaDoPaciente: {
					title: "Segurança do paciente",
					description: "Redução a um mínimo aceitável do risco de dano desnecessário associado a assistência a saúde"
				},
				eventoAdverso: {
					title: "Evento adverso",
					description: "Incidente que resulta em dano ao paciente"
				},
				picc: {
					title: "PICC",
					description: "Cateter inserido através de veia  periférica, com progressão  da ponta até a junção cavoatrial"
				},
				simulacaoVirtual: {
					title: "Simulação virtual",
					description: "Técnica para potencializar experiências do mundo real em ambiente controlado de forma interativa"
				},
				raciocinioClinico: {
					title: "Raciocínio clínico",
					description: "Processo intelectual onde há avaliação da clínica do paciente"
				},
				tomadasDeDecisao: {
					title: "Tomada de decisão",
					description: "Processo intelectual que gera alguma conduta a ser seguida após a avaliação clínica do paciente"
				}
			}
    }
	}

	showModal(state) {
		this.props.showModal(state)
	}

  render() {
    return (
      <div class={style.wrapper}>
        <IconTitle icon="D" label="Definições" class={style.title}/>

				<div class={style.groupButtons}>
					<BtnPicc label="Segurança do Paciente" color="blue" block action={ () => this.showModal( this.state.definitions.segurancaDoPaciente ) }/>
					<BtnPicc label="Evento Adverso" color="blue" block action={ () => this.showModal( this.state.definitions.eventoAdverso ) }/>
					<BtnPicc label="PICC" color="blue" block action={ () => this.showModal( this.state.definitions.picc ) }/>
					<BtnPicc label="Simulação Virtual" color="blue" block action={ () => this.showModal( this.state.definitions.simulacaoVirtual ) }/>
					<BtnPicc label="Raciocínio Clínico" color="blue" block action={ () => this.showModal( this.state.definitions.raciocinioClinico ) }/>
					<BtnPicc label="Tomada de Decisão" color="blue" block action={ () => this.showModal( this.state.definitions.tomadasDeDecisao ) }/>
				</div>
      </div>
    )
  }
}