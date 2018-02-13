const SET_PAGE = 'signalk-dashboard-kindle/ui/SET_PAGE'
const NEXT = 'signalk-dashboard-kindle/ui/NEXT'
const PREVIOUS = 'signalk-dashboard-kindle/ui/PREVIOUS'
const DEFAULT = 'signalk-dashboard-kindle/ui/DEFAULT'
const TOGGLE_NIGHTMODE = 'signalk-dashboard-kindle/ui/TOGGLE_NIGHTMODE'
const SET_CONNECTED = 'signalk-dashboard-kindle/ui/SET_CONNECTED'
const SET_DISCONNECTED = 'signalk-dashboard-kindle/ui/SET_DISCONNECTED'

const pages = [
  'compound4',
  'compound6',
  'speed',
  'course',
  'heading',
  'depth',
  'temperature',
  'position'
]

export const initialState = {
  activePage: pages[0],
  nightMode: false,
  connected: false,
  firstTry: 10,
  // endpoint: 'http://172.20.10.2:3000'
  endpoint: 'http://demo.signalk.org'
}

export default function reducer (state = initialState, action) {
  const current = pages.indexOf(state.activePage)
  let newState = { ...state }

  switch (action.type) {
    case SET_DISCONNECTED:
      newState.firstTry = newState.firstTry > 0 ? (newState.firstTry - 1) : 0
      newState.connected = false
      break

    case SET_CONNECTED:
      newState.firstTry = 10
      newState.connected = true
      newState.endpoint = action.url
      break

    case SET_PAGE:
      const index = pages.reduce((found, page, index) => {
        if (page === action.page) {
          found = index
        }
        return found
      }, newState.activePage)

      newState.activePage = pages[index]
      // console.log('SET_PAGE', newState.activePage)
      break

    case NEXT:
      newState.activePage = ((current + 1) === pages.length) ? pages[0] : pages[current + 1]
      // console.log('NEXT', newState.activePage)
      break

    case PREVIOUS:
      newState.activePage = ((current - 1) === -1) ? pages[pages.length - 1] : pages[current - 1]
      // console.log('PREVIOUS', newState.activePage)
      break

    case TOGGLE_NIGHTMODE:
      newState.nightMode = !newState.nightMode
      break

    case DEFAULT:
      newState.activePage = pages[0]
      break

    default:
      newState = state
      break
  }

  return newState
}

export function setDisconnected () {
  return { type: SET_DISCONNECTED }
}

export function setConnected (url) {
  return { type: SET_CONNECTED, url }
}

export function setPage (page) {
  return { type: SET_PAGE, page }
}

export function nextPage () {
  return { type: NEXT }
}

export function previousPage () {
  return { type: PREVIOUS }
}

export function defaultPage () {
  return { type: DEFAULT }
}

export function toggleNightMode () {
  return { type: TOGGLE_NIGHTMODE }
}
