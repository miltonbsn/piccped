import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'
import Audio from 'react-audio-player'

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      in: false,
      audio: {},
      mp3: null,
      play: false
    }
    
    this.stopAudio = this.stopAudio.bind(this)
  }

  componentDidMount() {
    const audio = this.audioPlayer.audioEl
    this.setState({ audio })
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.play != this.state.play ){
      if ( nextProps.play ){
        this.setState({ play: true, mp3: nextProps.mp3 })
        this.state.audio.play()
        
        this.state.audio.addEventListener("ended", () => this.stopAudio())
      } else {
        this.setState({ play: false })
        this.stopAudio()
      }
    }
  }

  stopAudio() {
    this.state.audio.pause()
    this.state.audio.currentTime = 0
    this.props.stop()
  }

  render() {
    
    return (
      <Transition in={this.props.play} timeout={300}>
        {(state) => (
          <div class={ [style.player, style[state]].join(' ') } onClick={ () => this.props.stop() }>
            <i class={[`fa fa-pause ${style.icon}`]}></i>
            <Audio src={ this.props.mp3 } ref={(element) => { this.audioPlayer = element; }} />
          </div>
        )}
      </Transition>
    )
  }
}