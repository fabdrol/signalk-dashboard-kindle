import thunkMiddleware from 'redux-thunk'
// import loggerMiddleware from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from './ducks'

function store(initialState) {
  const debug = window.devToolsExtension && window.devToolsExtension()
  const middleware = applyMiddleware(thunkMiddleware)
  const store = createStore(reducers, initialState, middleware, debug)

  if (module.hot) {
    module.hot.accept('./ducks', () => {
      const nextReducer = require('./ducks').default  // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default store
