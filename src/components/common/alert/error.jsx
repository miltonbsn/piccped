import { h, Component } from 'preact'
import style from './style.less'
import Transition from 'react-transition-group/Transition'
import { BtnPicc } from '../button/button'
import TextComponent from '../text/Text'

export default class ErrorAlert extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Transition in={this.props.show} timeout={300}>
        {(state) => (
          <div class={ [style.wraper, style[state]].join(' ') }>
            <div class={ [style.alert, style.error].join(' ') }>
              {/* <h2 class={style.title}>Errado!</h2> */}
              
              { this.props.message ? <h3 class={style.subtitle}><TextComponent id={this.props.message}>{this.props.message}</TextComponent></h3> : null }
          
              <div class={`${style.wrapBtn} ${ this.props.message ? '' : style.noMessage }`}>
                <BtnPicc label="tryAgain" color="orange" style="width: 230px;" action={ this.props.close } />
              </div>

              <div class={`${style.wrapImage} ${ this.props.message ? '' : style.noMessage }`}>
                { this.props.image ? this.props.image.map( (image, i) => 
                  <img src={image} class={ this.props.image.length == 1 ? style.unique : null }/>
                ) :
                  <div class={ style.nurse }></div>
                }
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}