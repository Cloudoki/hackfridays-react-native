/**
 * # TodoItem.js
 *
 * Display a button that responds to onPress and is colored appropriately
 */
'use strict'
/**
 * ## Imports
 *
 * React
 */
import React from 'react'
import
{
  StyleSheet,
  View,
  Text
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../reducers/todo/todoActions'
// import CheckBox from 'react-native-checkbox';
import {Icon, CheckBox, ListItem} from 'native-base';


/**
 * ## Styles
 */
var styles = StyleSheet.create({
    remove: {
    position: 'absolute',
    right: 0,
    color:'red'
  }

})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...todoActions }, dispatch)
  }
}


var TodoItem = React.createClass({

    handleDelete(id) {
      this.props.actions.deleteTodo(id)
    },

    handleComplete(id) {
      this.props.actions.completeTodo(id)
    },

  render () {

    let todo = this.props.todo
    return (
      <View>
        <ListItem>
          <CheckBox
            label={todo.text}
            checked={todo.completed}
            onPress={() => this.handleComplete(todo.id)}
            />
            <Text>{todo.text}</Text>
          <Icon onPress={() => this.handleDelete(todo.id)} name='ios-close-circle' style={styles.remove}/>
        </ListItem>
      </View>
    )
  }

})

export default connect(null, mapDispatchToProps)(TodoItem)
