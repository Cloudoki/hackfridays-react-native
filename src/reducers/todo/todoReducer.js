import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../../constants/actionTypes';
import initialState from './todoInitialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.

// const initialState = new InitialState();

export default function todos(state = initialState, action) {

  console.log("state reducer", state)
  switch (action.type) {

    case ADD_TODO:
      // Returns updated state with todos.items & todos.settings
      return {
        ...state,
             items: [
             ...state.items.concat([{ id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, text: action.text, completed: false }])
             ]
      }
      // To return updated state with only todos.items
      // return [
      //   ...state,
      //   {
      //     id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      //     completed: false,
      //     text: action.text
      //   }
      // ]

    case DELETE_TODO:
      return {
        ...state,
            items: [
              ...state.items.filter(todo =>
                todo.id !== action.id
              )
            ]
          }
      // return state.items.filter(todo =>
      //   todo.id !== action.id
      // )


    case COMPLETE_TODO:
      return {
        ...state,
           items: [
              ...state.items.map(todo =>
                  todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              )
            ]
      }
      // return state.items.map(todo =>
      //   todo.id === action.id ?
      //     { ...todo, completed: !todo.completed } :
      //     todo
      // )

    default:
      return state
  }
}
