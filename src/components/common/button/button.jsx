import { h, Component } from 'preact'
import TextComponent from '../text/Text';
import style from './style.less'

export class BtnPicc extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.btn, style[this.props.color], style[this.props.size]]
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  componentWillReceiveProps() {
    setTimeout( function() {
      this.props.block ?
        this.setState({ buttonClass: [style.btn, style[this.props.color], style[this.props.size], style.block] })
      :
        this.setState({ buttonClass: [style.btn, style[this.props.color], style[this.props.size]] })

    }.bind(this), 10 )
  }

  leaveBtn() {
    if( this.props.block ) {
      this.setState({ touched: false, buttonClass: [style.btn, style[this.props.color], style[this.props.size], style.block] })
    } else {
      this.setState({ touched: false, buttonClass: [style.btn, style[this.props.color], style[this.props.size]] })
    }
  }
  enterBtn() {
    if( this.props.block ) {
      this.setState({ touched: true, buttonClass: [style.btn, style[this.props.color], style[this.props.size], style.block, style.touched] })
    } else {
      this.setState({ touched: true, buttonClass: [style.btn, style[this.props.color], style[this.props.size], style.touched] })
    }
  }

  render () {
    return (
      <button class={ this.state.buttonClass.join(' ') } style={this.props.style} onClick={this.props.action} onTouchStart={ () => this.enterBtn() } onTouchEnd={ () => this.leaveBtn() }>
        <span class={style.label}>
          { this.props.icon && this.props.left ?
            <i className={`${style.icon} fa fa-${this.props.icon} ${this.props.left ? style.left : null}`}></i> :   null }
          <TextComponent id={this.props.label}>{this.props.label}</TextComponent>
          { this.props.icon && this.props.right ?
            <i className={`${style.icon} fa fa-${this.props.icon} ${this.props.right ? style.right : null}`}></i> : null }
        </span>
      </button>
    )
  }
}

export class BackLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.backLink]
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.backLink] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.backLink, style.touched] })
  }

  render () {
    return (
      <button
        class={ this.state.buttonClass.join(' ') } 
        onTouchStart={ () => this.enterBtn() } 
        onTouchEnd={ () => this.leaveBtn() }
        onClick={ this.props.action }>
          <i class="fa fa-arrow-left"></i>
      </button>
    )
  }
}

export class IconLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.IconLink]
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  componentWillReceiveProps() {
    if ( this.props.label.length > 1 )
      this.setState({ buttonClass: [style.IconLink, style.large] })
  }

  leaveBtn() {
    if ( this.props.label.length > 1 )
      this.setState({ touched: false, buttonClass: [style.IconLink, style.large] })
    else
      this.setState({ touched: false, buttonClass: [style.IconLink] })
  }
  enterBtn() {
    if ( this.props.label.length > 1 )
      this.setState({ touched: true, buttonClass: [style.IconLink, style.large, style.touched] })
    else
      this.setState({ touched: true, buttonClass: [style.IconLink, style.touched] })
  }

  render() {
    return (
      <button
        class={ this.state.buttonClass.join(' ') }
        onTouchStart={ () => this.enterBtn() }
        onTouchEnd={ () => this.leaveBtn() }
        onClick={ this.props.action }>
          <span>
            <TextComponent id={this.props.label}>{this.props.label}</TextComponent>
          </span>
      </button>
    )
  }
}

export class InfoBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      touched: false,
      buttonClass: [style.infoBtn]
    }

    this.enterBtn = this.enterBtn.bind(this)
    this.leaveBtn = this.leaveBtn.bind(this)
  }

  leaveBtn() {
    this.setState({ touched: false, buttonClass: [style.infoBtn] })
  }
  enterBtn() {
    this.setState({ touched: true, buttonClass: [style.infoBtn, style.touched] })
  }

  render() {
    return (
      <button
        class={ this.state.buttonClass.join(' ') } 
        onTouchStart={ () => this.enterBtn() } 
        onTouchEnd={ () => this.leaveBtn() }
        onClick={ this.props.action }>
        <i class={`fa ${ this.props.icon ? `fa-${this.props.icon}` : `fa-question-circle` }`}></i>
      </button>
    )
  }
}