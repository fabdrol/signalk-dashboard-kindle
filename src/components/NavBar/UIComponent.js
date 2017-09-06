import React from 'react'
import './NavBar.styl'

class UIComponent extends React.Component {
  render () {
    const { nightMode, activePage, actions } = this.props
    const classes = this.props.nightMode === true ? 'navbar inversed' : 'navbar'

    const nav = [
      { action: 'setPage', page: 'compound4', icon: 'fa-th-large' },
      { action: 'setPage', page: 'compound6', icon: 'fa-th' },
      { action: 'setPage', page: 'position', icon: 'fa-map-marker' },
      { action: 'setPage', page: 'course', icon: 'fa-location-arrow' },
      { action: 'setPage', page: 'speed', icon: 'fa-tachometer' },
      { action: 'setPage', page: 'heading', icon: 'fa-compass' },
      { action: 'setPage', page: 'depth', icon: 'fa-wifi', rotate: true },
      { action: 'setPage', page: 'temperature', icon: 'fa-thermometer-empty' },
    ]

    const buttons = nav.map((control, index) => {
      return (
        <a className={['button', (activePage === control.page) ? 'active' : ''].join(' ')} key={index} onClick={ e => { actions[control.action](control.page) } }><i className={['fa', control.icon, control.rotate ? 'rotate' : ''].join(' ')}></i></a>
      )
    })
    /*
    <a className="button" key={2} onClick={ e => { actions.previousPage() } }><i className="fa fa-angle-left"></i></a>
    <a className="button" key={3} onClick={ e => { actions.nextPage() } }><i className="fa fa-angle-right"></i></a>
    */

    return (
      <nav className={classes}>
        {buttons}
        <a className={ (nightMode === true ? 'button right active' : 'button right') } key={nav.length} onClick={ e => { actions.toggleNightMode() } }><i className="fa fa-moon-o"></i></a>
      </nav>
    )
  }
}

export default UIComponent;
