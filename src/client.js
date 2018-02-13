import { Promise } from 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './components/App/App'
import configureStore from './store'

import { initialState as navigationInitialstate, fetchNavigation } from './ducks/navigation'
import { initialState as environmentInitialState, fetchEnvironment } from './ducks/environment'
import { initialState as uiInitialState } from './ducks/ui'

window.Promise = Promise

const store = configureStore({
  ui: uiInitialState,
  navigation: navigationInitialstate,
  environment: environmentInitialState
})

let timeout = null

function refresh () {
  if (timeout !== null) {
    clearTimeout(timeout)
    timeout = null
  }

  store.dispatch(fetchNavigation())
  store.dispatch(fetchEnvironment())
  timeout = setTimeout(refresh, 1000)
}

refresh()

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
