import { h, Component } from 'preact'
import style from './style.less'
import { route } from 'preact-router'
import Container from '../../components/common/container'
import { TitleSm } from '../../components/common/titles/IconTitle'
import { BtnPicc } from '../../components/common/button/button'
import { renderWhenEnglish } from '../../utils/i18nHelper'

export default class Procedures extends Component {
	constructor() {
		super()

		this.state = {
			exitPage: false,
			procedures: [
				{ label: 'Avaliação do local de inserção', url: '/inspecao-avaliacao' },
				{ label: 'Curativo do PICC', url: '/curativo-picc' },
				{ label: 'Posicionamento adequado', url: '/posicionamento-adequado' },
				{ label: 'Manutenção da permeabilidade', url: '/manutencao-permeabilidade' },
				{ label: 'Administração de fluidos', url: '/administracao-fluidos' },
				{ label: 'Prevenção de infecção', url: '/prevencao-infeccao' }
			]
		}

		this.goToPage = this.goToPage.bind(this)
	}

	goToPage(url) {
		route(url)
	}

	render() {
		return (  
			<Container>
				<div class={style.wrap}>
					<TitleSm label="Procedimentos de manutenção" subtitle={renderWhenEnglish() ? '' : 'maintenanceProceduresSubtitle'} class={style.title} />

					<div class={style.proceduresItems}>
						{ this.state.procedures.map( (item, i) =>
							<BtnPicc key={i} label={item.label} color="blue" block action={ () => this.goToPage(item.url) }/>
						)}
					</div>

					<div className={style.btnBegin}>
						<BtnPicc label="Início" color="orange" icon="arrow-left" style="width: 140px;" left action={ () => this.goToPage('/introduction') }/>
					</div>
				</div>
			</Container>
		)
	}
}
