import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      in: false,
      video: {},
      mp4: null,
      play: false,
      loop: false
    }
    
    this.stop = this.stop.bind(this)
  }

  componentDidMount() {
    const video = document.getElementById('videoPopup')
    this.setState({ video })
    this.state.video.pause()
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.play != this.state.play ){
      if ( nextProps.play ){
        this.setState({ play: true, mp4: nextProps.mp4, loop: nextProps.loop })
        setTimeout(function() {
          this.state.video.play()
        }.bind(this), 10);
        
        !this.state.loop ? this.state.video.addEventListener("ended", () => this.stop()) : null
      } else {
        this.setState({ play: false })
        this.stop()
      }
    }
  }

  stop() {
    this.state.video.pause()
    this.state.video.currentTime = 0
    this.props.stop()
  }

  render() {
    return (
      <Transition in={this.props.play} timeout={300}>
        {(state) => (
          <div class={ [style.player, style[state]].join(' ') }>
            { this.props.canClose ?
              <button class={ style.close } onClick={ () => this.stop() }><i class="fa fa-close"></i></button>
            : null }
            
            <div class={ style.wrapVideo }>
              <video id="videoPopup" class={ this.props.isScenario ? [style.video, style.scenario].join(' ') : style.video } src={ this.state.mp4 } loop={ this.state.loop } muted></video>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}