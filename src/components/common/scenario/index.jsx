import { h } from 'preact'
import style from './style.less'

const Scenario = props => (
  <div class={ props.type == 'video' ? [style.scenario, style.video].join(' ') : style.scenario }>
    { props.type == 'video' ?
      <video src={ props.scenario } autoPlay loop></video>
    :
      <img src={ props.scenario } />
    }
  </div>
)

export default Scenario