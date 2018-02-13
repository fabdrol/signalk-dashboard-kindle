import React from 'react'
import './connection.styl'

class UIComponent extends React.Component {
  render () {
    // const ENDPOINT = 'http://192.168.21.200:3000'
    // const ENDPOINT = 'http://172.20.10.2:3000'
    // const ENDPOINT = 'http://demo.signalk.org'

    if (this.props.firstTry > 0) {
      return (
        <div className='page-wrapper'>
          <div className='connection-text'>
            <strong>Momentje...</strong><br />
            Bezig verbinding te maken met de boot
          </div>
        </div>
      )
    }

    return (
      <div className='page-wrapper'>
        <div className='connection-text'>
          <strong>Kon geen verbinding maken</strong><br />
          Probeer het opnieuw of kies een andere server.
        </div>

        <div className='connection-buttons'>
          <div className='connection-button-wrapper'>
            <a className='connection-button' onClick={() => this.props.setConnected(this.props.endpoint)}>Probeer opnieuw</a>
          </div>

          <div className='connection-button-wrapper'>
            <a className='connection-button' onClick={() => this.props.setConnected('http://172.20.10.2:3000')}>X-Miles</a>
          </div>

          <div className='connection-button-wrapper'>
            <a className='connection-button' onClick={() => this.props.setConnected('http://demo.signalk.org')}>demo.signalk.org</a>
          </div>
        </div>
      </div>
    )
  }
}

export default UIComponent
