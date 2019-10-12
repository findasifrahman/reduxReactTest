
import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { connect } from 'react-redux';
import { loginAction} from '../actions/loginAction';
import { redThemeColorAction,greenThemeColorAction } from '../actions/ThemeColorAction';
class SecScreen extends Component{
    state = {
        loginState: '',
        redThemeColor: '',
        greenThemeColor: ''
    }
    
    placeSubmitHandler = () => {
        if(this.state.loginState.trim() === '') {
            return;
        }
        this.props.add(this.state.loginState);
    }  
    componentDidMount() {
        if(this.state.loginState.trim() === '') {
          return;
        }
        this.props.add(this.state.loginState);
    }
    changecolorReducers = () =>{
        this.props.redChange('#ff5566');
        this.props.greenChange('#55ff66');
    }
    render(){
        return(
            <View>
                <Text>Inside sec screen</Text>
                <Text>{this.props.loginState}</Text>
                <Text>{this.props.redThemeColor}</Text>
                <Text>{this.props.greenThemeColor}</Text>
                <View>
                    <Button title="Press To change color" onPress={this.changecolorReducers}></Button>
                </View>
                <View>
                    <Button title="goto third" onPress={()=>{this.props.navigation.navigate("thirdScreen")}}></Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("inside sec scr to props");
    console.log(state)
    return {
      loginState: state.loginState.login,
      redThemeColor: state.ThemeColorState.redThemeColorState,
      greenThemeColor: state.ThemeColorState.greenThemeColorState
    }
}
const mapDispatchToProps = dispatch => {
    
  return {
    redChange: (name) => {
      console.log(name);
      dispatch(greenThemeColorAction(name))

    },
    greenChange: (name) => {
        dispatch(redThemeColorAction(name))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SecScreen)