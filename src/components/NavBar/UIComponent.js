import React from 'react'
import './NavBar.styl'

class UIComponent extends React.Component {
  render () {
    const { nightMode, activePage, actions } = this.props
    const classes = this.props.nightMode === true ? 'navbar inversed' : 'navbar'

    return (
      <nav className={classes}>
        <a className="button" key={0} onClick={ e => { actions.defaultPage() } }><i className="fa fa-home"></i></a>
        <a className="button" key={1} onClick={ e => { actions.previousPage() } }><i className="fa fa-angle-left"></i></a>
        <a className="button" key={2} onClick={ e => { actions.nextPage() } }><i className="fa fa-angle-right"></i></a>
        <a className={ (nightMode === true ? 'button right active' : 'button right') } key={3} onClick={ e => { actions.toggleNightMode() } }><i className="fa fa-moon-o"></i></a>
      </nav>
    )
  }
}

export default UIComponent;
