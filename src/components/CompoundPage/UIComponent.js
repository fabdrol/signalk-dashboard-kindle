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
    const { actions, widgets } = this.props
    const height = (window.innerHeight - 130) / 2
    let width = window.innerWidth / 2
    let classes = 'page-wrapper'

    if (this.props.nightMode === true) {
      classes += ' inversed'
    }

    if (widgets === 6) {
      width = window.innerWidth / 3
    }

    const row0 = []
    const row1 = []

    row0.push(
      (
        <td key={0}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('depth') } }>
            <Depth width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      ),
      (
        <td key={1}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('course') } }>
            <Course width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      )
    )

    row1.push(
      (
        <td key={0}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('heading') } }>
            <Heading width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      ),
      (
        <td key={1}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('speed') } }>
            <Speed width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      )
    )

    if (widgets === 6) {
      row0.push(
        <td key={2}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('position') } }>
            <Position width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      )

      row1.push(
        <td key={2}>
          <div className="widget-wrapper" onClick={ e => { actions.setPage('temperature') } }>
            <Temperature width={width} height={height} small={(widgets === 6)} />
          </div>
        </td>
      )
    }

    return (
      <div className={classes}>
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>{ row0 }</tr>
            <tr>{ row1 }</tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UIComponent;
