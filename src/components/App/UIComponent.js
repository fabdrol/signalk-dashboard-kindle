import React from 'react'
import './app.styl'

import CompoundPage from '../CompoundPage/CompoundPage'
import Page from '../Page/Page'
import NavBar from '../NavBar/NavBar'

class UIComponent extends React.Component {
  render () {
    let widget = <Page widget={this.props.activePage} />

    if (this.props.activePage.indexOf('compound') !== -1) {
      widget = <CompoundPage widgets={((this.props.activePage === 'compound4') ? 4 : 6)} />
    }

    return (
      <section id="app-wrapper">
        {widget}
        <NavBar />
      </section>
    )
  }
}

export default UIComponent;
