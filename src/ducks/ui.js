const SET_PAGE = 'signalk-dashboard-kindle/ui/SET_PAGE'
const NEXT = 'signalk-dashboard-kindle/ui/NEXT'
const PREVIOUS = 'signalk-dashboard-kindle/ui/PREVIOUS'
const DEFAULT = 'signalk-dashboard-kindle/ui/DEFAULT'
const TOGGLE_NIGHTMODE = 'signalk-dashboard-kindle/ui/TOGGLE_NIGHTMODE'

const pages = [
  'compound',
  'depth',
  'speed',
  'heading',
  'course',
  // 'depth-speed',
  // 'depth-heading-course',
  // 'depth-heading-speed'
]

export const initialState = {
  activePage: pages[0],
  nightMode: false
}

export default function reducer(state = initialState, action) {
  const current = pages.indexOf(state.activePage)
  let newState = { ...state }

  switch (action.type) {
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

export function setPage(page) {
  return { type: SET_PAGE, page }
}

export function nextPage() {
  return { type: NEXT }
}

export function previousPage() {
  return { type: PREVIOUS }
}

export function defaultPage() {
  return { type: DEFAULT }
}

export function toggleNightMode() {
  return { type: TOGGLE_NIGHTMODE }
}
