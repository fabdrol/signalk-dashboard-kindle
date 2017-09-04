import React from 'react'
import './page.styl'

import Depth from '../widgets/depth'
import Heading from '../widgets/heading'
import Course from '../widgets/course'
import Speed from '../widgets/speed'

class UIComponent extends React.Component {
  render () {
    const height = (window.innerHeight - 130) / 2
    const width = window.innerWidth / 2
    const { actions } = this.props
    let classes = 'page-wrapper'

    if (this.props.nightMode === true) {
      classes += ' inversed'
    }

    return (
      <div className={classes}>
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <div className="widget-wrapper" onClick={ e => { actions.setPage('depth') } }>
                  <Depth activePage={this.props.activePage} width={width} height={height} />
                </div>
              </td>
              <td>
                <div className="widget-wrapper" onClick={ e => { actions.setPage('course') } }>
                  <Course activePage={this.props.activePage} width={width} height={height} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="widget-wrapper" onClick={ e => { actions.setPage('heading') } }>
                  <Heading activePage={this.props.activePage} width={width} height={height} />
                </div>
              </td>
              <td>
                <div className="widget-wrapper" onClick={ e => { actions.setPage('speed') } }>
                  <Speed activePage={this.props.activePage} width={width} height={height} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UIComponent;
