/**
 * # TodoList.js
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
  TextInput,
  Image,
  ListView,
  ScrollView,
  Keyboard
} from 'react-native'

import TodoItem from './TodoItem'
import {Button, InputGroup, Input, Icon} from 'native-base';

/**
 * ## Styles
 */
let styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  list: {
    marginTop: 20,
    marginLeft: -10
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }

})

let TodoList = React.createClass({

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
    Keyboard.dismiss()
  },

  render () {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>
          <View style={styles.header}>
            <Image style={styles.avatar} source={require('../images/2pac.jpg')}/>
            <Text style={styles.title}>2Pack List</Text>
          </View>
          <InputGroup iconRight>
            <Input value={this.state.text}
                       placeholder="What do you need 2pack?"
                       onChangeText={(text) => this._onChangeText(text)}
                       onSubmitEditing={(event) => this._onSubmitTodo(event.nativeEvent.text)}/>
            <Icon style={{right: 5}} onPress={() => {this._onSubmitTodo(this.state.text)}} name='ios-add'/>
          </InputGroup>

          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <TodoItem todo={rowData}></TodoItem>}
          />
      </ScrollView>
    )
  }
})

module.exports = TodoList
