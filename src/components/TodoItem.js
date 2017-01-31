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
import * as settingsActions from '../reducers/settings/settingsActions'
// import CheckBox from 'react-native-checkbox';
import {Icon, CheckBox, ListItem} from 'native-base';
import {Switch} from 'react-native';


/**
 * ## Styles
 */
let styles = StyleSheet.create({
    remove: {
      position: 'absolute',
      right: 0,
      color:'red'
    },
    toggle: {
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

  handleDelete(id) {
    this.props.actions.deleteTodo(id)
  },

  handleComplete(id) {
    this.props.actions.completeTodo(id)
  },

  toggleSwitch (setting, value) {
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
                <Icon onPress={() => this.handleDelete(todo.id)} name='ios-close-circle' style={styles.remove}/>
              ) : (
                <Switch
                  onValueChange={(value) => this.toggleSwitch(todo, value)}
                  style={styles.toggle}
                  value={this.state.visible} />
              )
            }
        </ListItem>
      </View>
    )
  }

})

export default connect(null, mapDispatchToProps)(TodoItem)
