import { connect } from 'react-redux'
import UIComponent from './UIComponent'

function mapStateToProps (state) {
  return {
    activePage: state.ui.activePage,
    nightMode: state.ui.nightMode,
    connected: state.ui.connected
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
