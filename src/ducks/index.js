import { combineReducers } from 'redux'
import navigation from './navigation'
import environment from './environment'
import ui from './ui'

export default combineReducers({
  navigation,
  environment,
  ui,
})
