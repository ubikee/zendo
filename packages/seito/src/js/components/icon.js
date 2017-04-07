import React from 'react'
import './icon.scss';
import './icon2.scss';

const Icon = (props) => {
  const fontIconset = props.set       ? props.set : 'material-icons';
  const fontIcon    = props.icon      ? <span className={`font-icon ${fontIconset}`}>{props.icon}</span> : '';
  const badge       = props.badge     ? <span className='decorator2 tiny badge2'>{props.badge}</span> : '';
  const decorator   = props.decorator ? <Icon className='decorator2 tiny' icon={props.decorator} /> : '';
  return (
    <span className={`icon2 ${props.className}`} onClick={props.action}>
      {fontIcon}
      {badge}
      {decorator}
    </span>
  )
}

const Icon0 = (props) => {
  const iconset = props.set ? props.set : 'material-icons';
  const clickable = props.action ? 'clickable' : '';
  const toggled = props.toggled ? 'toggled' : '';
  const decorator = props.decorator ? <Icon icon={props.decorator} className="decorator tiny"/> : '';
  const badge = props.badge ? <Cicon char={props.decorator} className="decorator tiny" />: '';
  return (
    <span className={`icon ${iconset} ${clickable} ${toggled} ${props.className}`} onClick={props.action}>
      {props.icon}
      {decorator}
      {badge}
    </span>
  )
}

const Picon = (props) => {
  const clickable = props.action ? 'clickable' : '';
  const toggled = props.toggled ? 'toggled' : '';
  const decorator = props.decorator ? <Icon icon={props.decorator} className="decorator tiny"/> : '';
  return (
    <span className={`picon ${clickable} ${toggled} ${props.className}`} onClick={props.action}>
      <img src={props.src} />
      {decorator}
    </span>
  )
}

const Cicon = (props) => {
  const clickable = props.action ? 'clickable' : '';
  const toggled = props.toggled ? 'toggled' : '';
  const decorator = props.decorator ? <Icon icon={props.decorator} className="decorator tiny"/> : '';
  return (
    <span className={`picon ${clickable} ${toggled} ${props.className}`} onClick={props.action}>
      {props.char}
      {decorator}
    </span>
  )
}

class Micon extends React.Component {

  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }

  render () {
    const hidden = this.state.menu ? '' : 'hidden';
    return (
      <div className="micon">
        <Icon {...this.props} action={this.toggleMenu}/>
        <div className={`micon-menu ${hidden}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export { Icon, Picon, Cicon, Micon };
