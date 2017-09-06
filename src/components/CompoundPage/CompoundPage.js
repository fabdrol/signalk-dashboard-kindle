import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UIComponent from './UIComponent'

import {
  nextPage,
  previousPage,
  defaultPage,
  setPage,
  toggleNightMode
} from '../../ducks/ui'

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    nightMode: state.ui.nightMode,
    activePage: state.ui.activePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      nextPage,
      previousPage,
      defaultPage,
      setPage,
      toggleNightMode
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
