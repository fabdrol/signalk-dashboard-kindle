import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UIComponent from './UIComponent'
import { setConnected } from '../../ducks/ui'

function mapStateToProps (state) {
  return {
    endpoint: state.ui.endpoint,
    firstTry: state.ui.firstTry
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setConnected }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
