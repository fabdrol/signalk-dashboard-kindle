import React from 'react'
import './page.styl'

import Depth from '../widgets/depth'
import Heading from '../widgets/heading'
import Course from '../widgets/course'
import Speed from '../widgets/speed'
import Temperature from '../widgets/temperature'
import Position from '../widgets/position'

class UIComponent extends React.Component {
  render () {
    const height = (window.innerHeight - 130)
    const width = window.innerWidth
    let widget = <Speed width={width} height={height} large={true} />
    let classes = 'page-wrapper'

    if (this.props.nightMode === true) {
      classes += ' inversed'
    }

    switch (this.props.activePage) {
      case 'depth':
        widget = <Depth width={width} height={height} large={true} />
        break

      case 'speed':
        widget = <Speed width={width} height={height} large={true} />
        break

      case 'course':
        widget = <Course width={width} height={height} large={true} />
        break

      case 'heading':
        widget = <Heading width={width} height={height} large={true} />
        break

      case 'temperature':
        widget = <Temperature width={width} height={height} large={true} />
        break

      case 'position':
        widget = <Position width={width} height={height} large={true} />
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
