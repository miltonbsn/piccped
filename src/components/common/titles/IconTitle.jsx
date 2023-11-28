import { h } from 'preact'
import TextComponent from '../text/Text'
import style from './style.less'

export const IconTitle = (props) => (
  <h2 class={[style.iconTitle, props.class].join(' ')}>
    { props.largeIcon ?
      <span class={[style.icon, style.largeIcon].join(' ')}>{ props.icon }</span>
      :
      <span class={style.icon}>
        <TextComponent id={props.icon}>{props.icon}</TextComponent>
      </span>
    }
    <span class={style.label}>
      <TextComponent id={props.label}>{props.label}</TextComponent>
    </span>
    { props.subtitle ? <small class={style.subtitle}><TextComponent id={props.subtitle}>{props.subtitle}</TextComponent></small> : null }
  </h2>
)

export const Title = (props) => (
  <h2 class={[style.title, props.class].join(' ')}><TextComponent id={props.label}>{props.label}</TextComponent></h2>
)

export const TitleSm = (props) => (
  <h2 class={[style.titleSm, props.class].join(' ')}>
    <TextComponent id={props.label}>{props.label}</TextComponent>
    { props.subtitle ? <small class={style.subtitle}><TextComponent id={props.subtitle}>{props.subtitle}</TextComponent></small> : null }
  </h2>
)

export const TitleLg = (props) => (
  <h2 class={style.titleLg}>
    <TextComponent id={props.label}>{props.label}</TextComponent>
  </h2>
)

export const TitleQuestion = (props) => (
  <h2 class={[style.titleQuestion, props.class].join(' ')}>
    <TextComponent id={props.label}>{props.label}</TextComponent>
  </h2>
)