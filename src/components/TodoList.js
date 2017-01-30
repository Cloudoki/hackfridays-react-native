/**
 * # FormButton.js
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
  Text,
  TextInput,
  Image,
  ListView,
  // Button,
  Alert
} from 'react-native'

import TodoItem from './TodoItem'
import {Button} from 'native-base';

/**
 * The platform neutral button
 */
// const Button = require('apsl-react-native-button')

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366'
  },
  list: {
    marginTop: 20,
    marginLeft: -10
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }

})

var TodoList = React.createClass({

  getInitialState () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      text: '',
      dataSource: ds.cloneWithRows(this.props.todos)
    }
  },


  // Needed to update the ListView after state changes
  componentWillReceiveProps (nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.todos)
      })
    }
  },

  _onChangeText (text) {
    this.setState({
      text
    })
  },

  _onSubmitTodo(text) {
    if(!text || text === '')
      return
    this.props.actions.addTodo(text)
    this.setState({text: ''})
  },

  render () {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>2Pack List</Text>
          <TextInput className="new-todo"
                 value={this.state.text}
                 placeholder="What do you need 2pack?"
                 onChangeText={(text) => this._onChangeText(text)}
                 onSubmitEditing={(event) => this._onSubmitTodo(event.nativeEvent.text)}/>
          <Button block onPress={() => this._onSubmitTodo(this.state.text)}>Add Item</Button>
          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <TodoItem todo={rowData}></TodoItem>}
          />
      </View>
    )
  }
})

module.exports = TodoList
