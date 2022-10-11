import { h, Component } from 'preact'
import style from './BtnPlay.less'
import Audio from 'react-audio-player'

export default class BtnPlay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btnPlay, this.props.class],
      audio: {},
      mp3: '../../../assets/audio/general-case.mp3',
      play: false
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
    this.stopAudio = this.stopAudio.bind(this)
  }

  componentDidMount() {
    const audio = this.audioPlayer.audioEl
    this.setState({ audio })
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.btnPlay, this.props.class] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.btnPlay, this.props.class, style.touched] })
  }
  toggleAudio() {
    if ( this.state.audio.currentTime == 0 ){
      this.setState({ play: true })
      this.state.audio.play()
      this.props.playAudio()
      
      this.state.audio.addEventListener("ended", () => this.stopAudio())
    } else {
      this.stopAudio()
    }
  }
  stopAudio() {
    this.setState({ play: false })
    this.state.audio.pause()
    this.state.audio.currentTime = 0
    this.props.stopAudio()
  }

  render () {

    return (
      <button class={
        this.state.buttonClass.join(' ') } 
        onTouchStart={ () => this.enterBtn() } 
        onTouchEnd={ () => this.leaveBtn() }
        onClick={ () => this.props.play() } >
        
        <span class={ style.icon }>
          <img src={ this.props.icon }/>
        </span>
        
        <span class={ style.label }>
          <i class="fa fa-play"></i>
          { this.props.label }
        </span>

        <Audio src={ this.state.mp3 } ref={(element) => { this.audioPlayer = element; }} />
      </button>
    )
  }
}