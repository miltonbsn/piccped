import { h, Component } from 'preact'

export default class Transition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      effect: ''
    }

    this.closeEffect = this.closeEffect.bind(this)
  }

  closeEffect() {
    this.setState({ show: false })
    setTimeout( function() {
      this.props.close()
    }.bind(this), 500)
  }

  componentWillMount() {
    this.setState({ show: true })
  }

  render() {
    if( this.state.show ){
      this.setState({ effect: 'animated fadeIn' })
    } else {
      this.setState({ effect: 'animated fadeOut' })
    }

    return (
      <div class={ this.state.effect }>
        { this.props.children }
      </div>
    )
  }
}