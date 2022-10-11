import { h, Component } from 'preact'
import { route } from 'preact-router'
import style from './style.less'
import { BtnPicc } from '../../components/common/button/button'
import { InfoBtn } from '../../components/common/button/button'
import Modal from '../../components/common/modal/Modal'
import Container from '../../components/common/container'

export default class Home extends Component {
	constructor(props) {
    super(props)
    
    this.state = {
			showModal: false,
			modal: {
				title: '',
				description: ''
			}
		}

		this.showModal = this.showModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.goToPage = this.goToPage.bind(this)
	}

	next() {
    this.slider.slickNext()
  }

	showModal(type) {
		
		if ( type == 'DESC' ) {
			this.setState({ modal: { 
				title: 'PICCPED', 
				description: 'Este app foi desenvolvido como produto de mestrado da Enfª Sabrina de Souza, programado e desenvolvido pelo programador Milton Bittencourt, sob orientação da Profª Dra Patrícia Kuerten Rocha, coorientação da Profª Dra Ariane Machado, Enfª Msc Andréia Tomazoni e Profª Dra Jane Cristina Anders. Qualquer reprodução, parcial ou total, sem autorização prévia dos autores, ensejará violação à direito autoral, passível de indenização pecuniária.' }, 
				showModal: true })
		} else {
			this.setState({ modal: { 
				title: 'Referências', 
				description: 'O conteúdo do app foi baseado em: ANVISA, 2017; CDC - CENTER FOR DISEASE CONTROL AND PREVENTION, 2016; INFUSION NURSE SOCIETY, 2016; KEIR; GIESINGER; DUNN, 2014; O’GRADY et al., 2011; QUEENSLAND GOVERNMENT, 2015; THE JOINT COMMISSION, 2012)' }, 
				showModal: true })
		}


	}
	closeModal() {
		this.setState({ showModal: false })
	}

	goToPage(url) {
		route(url)
	}

	render() {
		return (
			<Container>
				<div class={ style.wrapHome }>
          <div class={ style.logo }>
            <img src="../../assets/svg/brand.svg"/>
          </div>

          <div class={ style.wrapButtons }>
            <BtnPicc label="Começar" color="pink" icon="arrow-right" right action={ () => this.goToPage('/introduction') } />
						
						<div class={ style.infoBtn }>
            	<BtnPicc label="Sobre o app" color="orange" size="small" action={ () => this.showModal('DESC') } />
							<a class={style.btnLink} onClick={ () => this.showModal('REF') }>Referências</a>
						</div>
          </div>

          <div class={ style.logos }>
						<div class={ style.wrapLogos }>
            	<img src="../../assets/images/logos.png"/>
						</div>
          </div>
				</div>

				<Modal
					show={ this.state.showModal }
					close={ () => this.closeModal() }
					title={ this.state.modal.title }
					description={ this.state.modal.description } />
			</Container>
		)
	}
}
