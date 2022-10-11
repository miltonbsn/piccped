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

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Helmet>
					<link rel="apple-touch-icon" href="../assets/icons/apple-touch-icon.png" />
				</Helmet>
				<div class="container">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
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
		);
	}
}
