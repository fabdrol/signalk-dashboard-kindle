import React from 'react'
import './page.styl'

import Size from '../widgets/size'
import Depth from '../widgets/depth'
import Heading from '../widgets/heading'
import Course from '../widgets/course'
import Speed from '../widgets/speed'

class UIComponent extends React.Component {
  render () {
    const height = (window.innerHeight - 130)
    const width = window.innerWidth
    let widget = <Speed activePage={this.props.activePage} width={width} height={height} large={true} />
    let classes = 'page-wrapper'

    if (this.props.nightMode === true) {
      classes += ' inversed'
    }

    switch (this.props.activePage) {
      case 'depth':
        widget = <Depth activePage={this.props.activePage} width={width} height={height} large={true} />
        break

      case 'speed':
        widget = <Speed activePage={this.props.activePage} width={width} height={height} large={true} />
        break

      case 'course':
        widget = <Course activePage={this.props.activePage} width={width} height={height} large={true} />
        break

      case 'heading':
        widget = <Heading activePage={this.props.activePage} width={width} height={height} large={true} />
        break
    }

    return (
      <div className={classes}>
        {widget}
      </div>
    )
  }
}

export default UIComponent;
