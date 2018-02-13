import SignalK from '../lib/simple-signalk-client'
import { setDisconnected, setConnected } from './ui'

const FETCH = 'signalk-dashboard-kindle/navigation/FETCH'
const UPDATE = 'signalk-dashboard-kindle/navigation/UPDATE'
const CLEAR = 'signalk-dashboard-kindle/navigation/CLEAR'

export const initialState = {}

export default function reducer(state = initialState, action = {}) {
  let newState = { ...state }

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

export function fetchNavigation () {
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
          .then(cursor => cursor.get('navigation'))
          .then(navigation => {
            dispatch(updateNavigation(navigation))
          })
      })
      .catch(err => {
        console.error(`[fetchNavigation] error: ${err.message}`)
      })
  }
}

export function updateNavigation(data) {
  return { type: UPDATE, data }
}

export function clearNavigation() {
  return { type: CLEAR }
}
