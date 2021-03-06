import SignalK from '../lib/simple-signalk-client'
import { setDisconnected, setConnected } from './ui'

const FETCH = 'signalk-dashboard-kindle/environment/FETCH'
const UPDATE = 'signalk-dashboard-kindle/environment/UPDATE'
const CLEAR = 'signalk-dashboard-kindle/environment/CLEAR'

export const initialState = {}

export default function reducer(state = initialState, action = {}) {
  let newState = {...state}

  switch (action.type) {
    case CLEAR:
      newState = {}
      break

    case UPDATE:
      newState = { ...state, ...action.data }
      break

    default:
      newState = state
      break
  }

  return newState
}

export function fetchEnvironment () {
  return (dispatch, getState) => {
    SignalK
      .testConnection(getState().ui.endpoint)
      .then(connected => {
        if (!connected) {
          dispatch(setDisconnected())
          return
        }

        dispatch(setConnected(getState().ui.endpoint))
        return SignalK
          .getSelf()
          .then(cursor => cursor.get('environment'))
          .then(environment => {
            dispatch(updateEnvironment(environment))
          })
      })
      .catch(err => {
        console.error(`[fetchEnvironment] error: ${err.message}`)
      })
  }
}

export function updateEnvironment(data) {
  return { type: UPDATE, data }
}

export function clearEnvironment() {
  return { type: CLEAR }
}
