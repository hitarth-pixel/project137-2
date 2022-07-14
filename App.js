import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './screens/home'
import Details from './screens/details'

const StackNavigator=createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{headerShown:false}
  },
  Details:{
    screen:Details,
    navigationOptions:{headerShown:false}
  }
},{initialRouteName:'Home'})

const AppContainer=createAppContainer(StackNavigator)
export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    ////paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
