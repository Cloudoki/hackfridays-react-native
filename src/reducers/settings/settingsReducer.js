import { EDIT_SETTING } from '../../constants/actionTypes';
import initialState from '../settings/settingsInitialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.

export default function settings(state = initialState.data, action) {
  switch (action.type) {

    case EDIT_SETTING:
      return state.map(todo =>
              todo.id === action.setting.id ? { ...todo, visible: !todo.visible } : todo
            )

    default:
      return state
  }
}
