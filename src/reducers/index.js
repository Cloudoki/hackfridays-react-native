/**
 * # reducers
 *
 * This class combines all the reducers into one
 *
 */
'use strict'
/**
 * ## Imports
 *
 * our 4 reducers
 */
import device from './device/deviceReducer'
import global from './global/globalReducer'
import todos from './todo/todoReducer'
import settings from './settings/settingsReducer'

import { combineReducers } from 'redux'

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
  device,
  global,
  todos,
  settings
})

export default rootReducer
