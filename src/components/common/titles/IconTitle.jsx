import { h } from 'preact'
import style from './style.less'

export const IconTitle = (props) => (
  <h2 class={[style.iconTitle, props.class].join(' ')}>
    { props.largeIcon ?
      <span class={[style.icon, style.largeIcon].join(' ')}>{ props.icon }</span>
      :
      <span class={style.icon}>{ props.icon }</span>
    }
    <span class={style.label}>{ props.label }</span>
    { props.subtitle ? <small class={style.subtitle}>{ props.subtitle }</small> : null }
  </h2>
)

export const Title = (props) => (
  <h2 class={[style.title, props.class].join(' ')}>{ props.label }</h2>
)

export const TitleSm = (props) => (
  <h2 class={[style.titleSm, props.class].join(' ')}>
    { props.label }
    { props.subtitle ? <small class={style.subtitle}>{ props.subtitle }</small> : null }
  </h2>
)

export const TitleLg = (props) => (
  <h2 class={style.titleLg}>
    { props.label }
  </h2>
)

export const TitleQuestion = (props) => (
  <h2 class={[style.titleQuestion, props.class].join(' ')}>
    { props.label }
  </h2>
)