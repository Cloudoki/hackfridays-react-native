/**
 * # globalInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
/**
 * ## Import
 */
import {Record} from 'immutable'
/**
 * ## InitialState
 *
 * * currentUser - object returned from server when validated
 * * showState - toggle for Header to display state
 * * currentState - object in Json format of the entire state
 * * store - the Redux store which is an object w/ 4 initial states
 *   * device
 *   * auth
 *   * global
 *   * profile
 *
 */
// var InitialState = Record({
//   todos: [
//     {
//       text: 'Jeans',
//       completed: false,
//       id: 1
//     },
//     {
//       text: 'Toothbrush',
//       completed: true,
//       id: 6
//     },
//     {
//       text: 'Shirts',
//       completed: false,
//       id: 7
//     }
//   ],
//   settings: [
//     {
//       id: 1,
//       text: 'Jeans',
//       visible: true,
//     },
//     {
//       id: 2,
//       text: 'Shampoo',
//       visible: false,
//     },
//     {
//       id: 3,
//       text: 'Condoms',
//       visible: true,
//     },
//     {
//       id: 4,
//       text: 'Shoes',
//       visible: false,
//     },
//     {
//       id: 5,
//       text: 'Camera',
//       visible: true,
//     }
//   ]
// })
// export default InitialState


export default {
  items: [
    {
      text: 'Jeans',
      completed: false,
      id: 1
    },
    {
      text: 'Toothbrush',
      completed: true,
      id: 6
    },
    {
      text: 'Shirts',
      completed: false,
      id: 7
    }
  ],
  settings: [
    {
      id: 1,
      text: 'Jeans',
      visible: true,
    },
    {
      id: 2,
      text: 'Shampoo',
      visible: false,
    },
    {
      id: 3,
      text: 'Condoms',
      visible: true,
    },
    {
      id: 4,
      text: 'Shoes',
      visible: false,
    },
    {
      id: 5,
      text: 'Camera',
      visible: true,
    }
  ]
};
