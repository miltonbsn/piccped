import { h, Component } from 'preact'
import style from './style.less'
import { route } from 'preact-router'
import { BackLink, IconLink, InfoBtn } from '../button/button'
import { IconTitle } from '../titles/IconTitle'

export default class TopBar extends Component {
  constructor(props) {
    super(props)

    this.goToPage = this.goToPage.bind(this)
    this.openComponent = this.openComponent.bind(this)
  }

  goToPage(url) {
    route(url)
  }

  openComponent(component) {
    this.props.action(component)
  }

  render() {
    return (
      <div class={style.topBar}>
        <div class={style.col}>
          <BackLink action={ () => this.goToPage('/procedures') } />
        </div>

        <div class={style.col}>
          <IconLink label="CG" action={ () => this.openComponent('CG') } />
          <IconLink label="C" action={ () => this.openComponent('C') } />
          <IconLink label="D" action={ () => this.openComponent('D') } />
          <IconLink label="P" action={ () => this.openComponent('P') } />
          <InfoBtn action={ () => this.openComponent('INFO') } />
        </div>
      </div>
    )
  }
}