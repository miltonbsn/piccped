import { h } from 'preact'
import style from './style.less'

export default props => (
  <div class={ [style.welcome, props.class].join(' ') }>
    <small>Bem vindo(a) ao</small>
    <img src="../../../assets/svg/brand_typography.svg"/>
  </div>
)