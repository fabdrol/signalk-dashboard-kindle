import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import convert from '../../lib/convert'

class UIComponent extends React.Component {
  render () {
    let classes = 'widget'

    if (this.props.large === true) {
      classes += ' large'
    }

    return (
      <div className={classes} style={{ width: `${this.props.width}px`, height: `${this.props.height}px` }}>
        <h3>{ convert.msToKts(this.props.value).toFixed(2) }</h3>
        <h4>speed over ground</h4>
      </div>
    )
  }
}

function isObject(mixed) {
  return (mixed && typeof mixed === 'object')
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    value: isObject(state.navigation.speedOverGround) ? state.navigation.speedOverGround.value || 0 : 0,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ fetchNavigation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
