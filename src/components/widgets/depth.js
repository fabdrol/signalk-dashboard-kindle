import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './widget.styl'

class UIComponent extends React.Component {
  render () {
    let classes = 'widget'

    if (this.props.large === true) {
      classes += ' large'
    }

    return (
      <div className={classes} style={{ width: `${this.props.width}px`, height: `${this.props.height}px` }}>
        <h3>{ this.props.value.toFixed(2) }</h3>
        <h4>depth</h4>
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
    value: (isObject(state.environment.depth) && isObject(state.environment.depth.belowTransducer)) ? state.environment.depth.belowTransducer.value || 0 : 0,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ fetchNavigation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
