import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Helmet } from 'react-helmet'

import Home from '../routes/home'
import Procedures from '../routes/procedures'
import InspecaoAvaliacao from '../routes/inspecao-avaliacao'
import CurativoPicc from '../routes/curativo-picc'
import PosicionamentoAdequado from '../routes/posicionamento-adequado'
import ManutencaoPermeabilidade from '../routes/manutencao-permeabilidade'
import AdministracaoFluidos from '../routes/administracao-fluidos'
import PrevencaoInfeccao from '../routes/prevencao-infeccao'
import Introduction from '../routes/introduction'
import { IntlProvider } from 'preact-i18n';
import definitionPTBR from '../translations/pt-BR.json';
import definitionEN from '../translations/en.json';

const getI18n = () => {
	const languageByLocalStorage = localStorage.getItem("i18n"); 
	if (languageByLocalStorage) return languageByLocalStorage;
	localStorage.setItem('i18n', 'pt-BR');
	return 'pt-BR';
};
export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	constructor(props) {
    super(props)
    
    this.state = {
			language: getI18n()
		}

		this.changeLanguage = this.changeLanguage.bind(this)
	}

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	changeLanguage(langKey) {
		localStorage.setItem('i18n', langKey);
		this.setState({ language: langKey });
	}
	
	render() {
		const { language } = this.state;

		return (
			<IntlProvider definition={language === 'pt-BR' ? definitionPTBR : definitionEN}>
				<div id="app">
					<Helmet>
						<link rel="apple-touch-icon" href="../assets/icons/apple-touch-icon.png" />
					</Helmet>
					<div class="container">
						<Router onChange={this.handleRoute}>
							<Home path="/" changeLanguage={this.changeLanguage} />
							<Introduction path="/introduction" />
							<Procedures path="/procedures" />
							<InspecaoAvaliacao path="/inspecao-avaliacao" />
							<CurativoPicc path="/curativo-picc" />
							<PosicionamentoAdequado path="/posicionamento-adequado" />
							<ManutencaoPermeabilidade path="/manutencao-permeabilidade" />
							<AdministracaoFluidos path="/administracao-fluidos" />
							<PrevencaoInfeccao path="/prevencao-infeccao" />
						</Router>
					</div>
				</div>
			</IntlProvider>
		);
	}
}
