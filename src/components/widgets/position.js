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
        <h3 className="position longitude">{ convert.position(this.props.longitude, true) }</h3>
        <h3 className="position latitude">{ convert.position(this.props.latitude, false) }</h3>
        <h4>position</h4>
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
    longitude: (isObject(state.navigation.position) && state.navigation.position.longitude) ? state.navigation.position.longitude : 0.0,
    latitude: (isObject(state.navigation.position) && state.navigation.position.latitude) ? state.navigation.position.latitude : 0.0
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UIComponent)
