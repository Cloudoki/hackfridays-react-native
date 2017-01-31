/**
 * # app.js
 *  Display startup screen and
 *  getSessionTokenAtStartup which will navigate upon completion
 *
 *
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

/**
 * Project actions
 */
import * as deviceActions from '../reducers/device/deviceActions'
import * as globalActions from '../reducers/global/globalActions'
import * as todoActions from '../reducers/todo/todoActions'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
    StyleSheet,
    View,
    Text,
    // Button
}
from 'react-native'
import {Button, Icon} from 'native-base';

/**
 * The Header will display a Image and support Hot Loading
 */
import TodoList from '../components/TodoList'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    },
    todos : state.todos,
    settings: state.settings
  }
}

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...deviceActions, ...globalActions, ...todoActions }, dispatch)
  }
}

let styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    width: 50,
    marginTop: 10,
    marginRight: 10
  },
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row'
  }
})

/**
 * ## App class
 */
let reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'


let App = React.createClass({


  render () {
  const goToSettings = () => Actions.Settings({settings: this.props.settings});
    return (
      <View style={styles.container}>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
        <View style={styles.wrapper}>
          <Button style={styles.button} onPress={goToSettings}><Icon name="ios-add" /></Button>
        </View>
      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
