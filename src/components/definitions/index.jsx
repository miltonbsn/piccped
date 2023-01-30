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
					description: "patientSafetyDescription"
				},
				eventoAdverso: {
					title: "Evento adverso",
					description: "adverseReactionDescription"
				},
				picc: {
					title: "PICC",
					description: "piccDescription"
				},
				simulacaoVirtual: {
					title: "Simulação virtual",
					description: "virtualSimulationDescription"
				},
				raciocinioClinico: {
					title: "Raciocínio clínico",
					description: "clinicalReasoningDescription"
				},
				tomadasDeDecisao: {
					title: "Tomada de decisão",
					description: "decisionMakingDescription"
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
					<BtnPicc label="Segurança do paciente" color="blue" block action={ () => this.showModal( this.state.definitions.segurancaDoPaciente ) }/>
					<BtnPicc label="Evento adverso" color="blue" block action={ () => this.showModal( this.state.definitions.eventoAdverso ) }/>
					<BtnPicc label="PICC" color="blue" block action={ () => this.showModal( this.state.definitions.picc ) }/>
					<BtnPicc label="Simulação virtual" color="blue" block action={ () => this.showModal( this.state.definitions.simulacaoVirtual ) }/>
					<BtnPicc label="Raciocínio clínico" color="blue" block action={ () => this.showModal( this.state.definitions.raciocinioClinico ) }/>
					<BtnPicc label="Tomada de decisão" color="blue" block action={ () => this.showModal( this.state.definitions.tomadasDeDecisao ) }/>
				</div>
      </div>
    )
  }
}