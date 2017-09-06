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

    if (this.props.small === true) {
      classes += ' small'
    }

    return (
      <div className={classes} style={{ width: `${this.props.width}px`, height: `${this.props.height}px` }}>
        <h3>{ convert.radToDeg(this.props.value).toFixed(2) }&deg;</h3>
        <h4>heading</h4>
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
    value: isObject(state.navigation.headingMagnetic) ? state.navigation.headingMagnetic.value || 0 : 0,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ fetchNavigation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
