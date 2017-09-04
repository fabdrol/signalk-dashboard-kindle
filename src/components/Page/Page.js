import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UIComponent from './UIComponent'

function mapStateToProps(state) {
  return {
    nightMode: state.ui.nightMode,
    activePage: state.ui.activePage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ fetchNavigation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
