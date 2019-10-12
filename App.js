// App.js

import  { Component } from 'react';
import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList,Text } from 'react-native';
import ListItem from './src/components/ListItem';
import { connect } from 'react-redux';
import { loginAction} from './src/actions/loginAction';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  SecScreen from './src/components/secScreen';
import  firstScreen from './src/components/firstScreen';
import ThirdScreen from './src/components/thirdScreen';
import { Provider } from 'react-redux';
import configureStore from './src/stores/store';

const store = configureStore()
class App extends Component {
  constructor() {
    super();
    //this.handler = this.handler.bind(this);
  }


render() {
  return (
      <Provider  store = { store }>
        <AppContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});



const stackNav = createStackNavigator({
    mainscr: {
      screen: firstScreen
    },
    // For each screen that you can navigate to, create a new entry like this:
    secScreen: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: SecScreen
    },
    thirdScreen:{
      screen: ThirdScreen
    }
  },
  {
    initialRouteName: "mainscr"
  }
);
const AppContainer = createAppContainer(stackNav);
export default App;