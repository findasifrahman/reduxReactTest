// App.js

import  { Component } from 'react';
import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList,Text } from 'react-native';

import { connect } from 'react-redux';
import { loginAction} from '../actions/loginAction';


class firstScreen extends Component {
  constructor() {
    super();
    //this.handler = this.handler.bind(this);
  }
  state = {
    loginState: ''
  }

  placeSubmitHandler = () => {
    if(this.state.loginState.trim() === '') {
      return;
    }
    this.props.add(this.state.loginState);
   }

placeNameChangeHandler = (value) => {
  this.setState({
    loginState: value
  });    
}

placesOutput = () => {
  console.log("from p out")
  console.log(this.props)
   return (
    <Text>{this.props.loginState}</Text>
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Seach Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'change' 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>

        <View>
          <Button title="Press to navigate" onPress={() => {this.props.navigation.navigate("secScreen")}}></Button>
        </View>
      </View>
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

const mapStateToProps = state => {
  console.log("inside stte to props");
  console.log(state.loginState)
  return {
    loginState: state.loginState.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      console.log(name);
      dispatch(loginAction(name))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(firstScreen)//(createAppContainer(stackNav))