/* eslint-disable react/sort-comp */
import { h, Component } from 'preact';
import { IconTitle } from '../common/titles/IconTitle';
import style from './style.less';

export default class AcronymGlossary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			definitions: [
				'ASD - Adhesive securement devices',
				'CLABSI - Central line-associated bloodstream infection',
				'CVAD -  Central vascular access device',
				'ISD - Integrated securement device',
				'PICC - Peripherally inserted central catheter',
				'PIVC - Peripheral intravenous catheter',
				'SASS - Subcutaneous anchor securement system',
				'TA - Tissue adhesive'
			]
		};
	}

	showModal(state) {
		this.props.showModal(state);
	}

	render() {
		return (
			<div class={style.wrapper}>
				<IconTitle icon="AG" label="Acronym glossary" class={style.title} />

				<div class={style.content}>
					{this.state.definitions.map(definition => (
						<p>{definition}</p>
					))}
				</div>
			</div>
		);
	}
}
