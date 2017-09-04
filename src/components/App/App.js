import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UIComponent from './UIComponent'
import { fetchNavigation } from '../../ducks/navigation'

function mapStateToProps(state) {
  return {
    activePage: state.ui.activePage,
    nightMode: state.ui.nightMode,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ fetchNavigation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
