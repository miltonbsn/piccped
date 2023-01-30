import { h, Component } from 'preact'
import { route } from 'preact-router'
import style from './style.less'
import { BtnPicc } from '../../components/common/button/button'
import { InfoBtn } from '../../components/common/button/button'
import Modal from '../../components/common/modal/Modal'
import Container from '../../components/common/container'
import TextComponent from '../../components/common/text/Text'

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
			this.setState({
				modal: { 
					title: 'PICCPED',
					description: 'aboutTheApp'
				}, 
				showModal: true
			})
		} else {
			this.setState({ 
				modal: { 
					title: 'Referências', 
					description: 'sourceDescription' 
				},
				showModal: true
			})
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
            	<BtnPicc label="about" color="orange" size="small" action={ () => this.showModal('DESC') } />
							<a class={style.btnLink} onClick={ () => this.showModal('REF') }><TextComponent id="Referências"></TextComponent></a>
						</div>

						<div class={style.linksWrapper}>
							<a onClick={() => this.props.changeLanguage('pt-BR')}><TextComponent id="Portuguese"></TextComponent></a>
							|
							<a onClick={() => this.props.changeLanguage('en')}><TextComponent id="English"></TextComponent></a>
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
