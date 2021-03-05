import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
      <AppContainer/>
      </SafeAreaProvider>

  )
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },

  
  Drawer: {
    screen:AppDrawerNavigator
  }
  
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
