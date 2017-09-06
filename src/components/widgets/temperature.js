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
        <h3>{ convert.kelvinToCelsius(this.props.value).toFixed(1) }&#8451;</h3>
        <h4>water temperature</h4>
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
    value: (isObject(state.environment.water) && isObject(state.environment.water.temperature)) ? (state.environment.water.temperature.value || 273.15) : 273.15,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
