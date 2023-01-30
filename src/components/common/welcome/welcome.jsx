import { h } from 'preact'
import TextComponent from '../text/Text'
import style from './style.less'

export default props => (
  <div class={ [style.welcome, props.class].join(' ') }>
    <small><TextComponent id="welcome"/></small>
    <img src="../../../assets/svg/brand_typography.svg"/>
  </div>
)