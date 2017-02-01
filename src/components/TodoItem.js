/**
 * # TodoItem.js
 *
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
  Text,
  Switch
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../reducers/todo/todoActions'
import * as settingsActions from '../reducers/settings/settingsActions'
import {Icon, CheckBox, ListItem} from 'native-base';

/**
 * ## Styles
 */
let styles = StyleSheet.create({
    iconRight: {
      position: 'absolute',
      right: 0
    }
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...todoActions , ...settingsActions}, dispatch)
  }
}


let TodoItem = React.createClass({

  getInitialState () {
    return {
      visible: this.props.todo.visible,
    }
  },

  handleDelete(todo) {
    this.props.actions.deleteTodo(todo.id)

    // If an item is removed from the list, its Settings toggleSwitch will be disabled ('visible' = false)
    this.props.actions.editSetting(todo)
  },

  handleComplete(id) {
    this.props.actions.completeTodo(id)
  },

  toggleSwitch (setting, value) {

    // Force setState to update the switch
    this.setState({
      visible: value
    })

    if(!setting.visible) {
      this.props.actions.addTodo(setting.text)
    } else {
      this.props.actions.deleteTodo(setting.id)
    }
    this.props.actions.editSetting(setting)
  },

  render () {
    let todo = this.props.todo
    return (
      <View>
        <ListItem>
          {!this.props.isSettings &&
            <CheckBox
              label={todo.text}
              checked={todo.completed}
              onPress={() => this.handleComplete(todo.id)}
              />
            }
            <Text>{todo.text}</Text>
            {!this.props.isSettings ?
              (
                <Icon onPress={() => this.handleDelete(todo)} name='ios-trash-outline' style={styles.iconRight}/>
              ) : (
                <Switch
                  onValueChange={(value) => this.toggleSwitch(todo, value)}
                  style={styles.iconRight}
                  value={this.state.visible} />
              )
            }
        </ListItem>
      </View>
    )
  }

})

export default connect(null, mapDispatchToProps)(TodoItem)
