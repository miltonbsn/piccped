import { h, Component } from 'preact'
import Transition from 'react-transition-group/Transition'

export default class Container extends Component {
  constructor(props) {
		super(props)

		this.state = {
			showPage: false
		}
  }

  componentDidMount() {
		this.setState({ showPage: true })
	}

  render() {
    return (
      <Transition in={this.state.showPage} timeout={300}>
				{(state) => (
					<div class={ ['wrap-app', state].join(' ') }>
            { this.props.children }
          </div>
				)}
			</Transition>
    )
  }
}