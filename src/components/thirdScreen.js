import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { loginformval } from '../actions/loginFormAction'
class ThirdScreen extends Component{
    state = {
        emailtext: '',
        passwordtext: ''
    };
    formSubmit = () => {
        let formobj = {
                email: this.state.emailtext,
                password: this.state.passwordtext
            
        }
        console.log(formobj)
        this.props.loginFormObj(formobj);
    }
    formChanged = () => {
        let formobj = {
            email: this.state.emailtext,
            password: this.state.passwordtext
        
        }
        this.props.loginFormObj(formobj);
    }
    render(){
        return(
            <View>
                <Text>fROM THIRD SCREEN</Text>
                <TextInput
                        label='Email'

                        value={this.state.emailtext}
                        onChangeText={emailtext => this.setState({ emailtext })}

                />
                <TextInput
                    label='Password'
                    value={this.state.passwordtext}
                    onChangeText={passwordtext => this.setState({ passwordtext })}
                />
                <Button title="Form State" onPress={this.formSubmit}></Button>
                <View>
                    <Text>{this.props.emailtext}</Text>
                    <Text>{this.props.passwordtext}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("third screen..")
    console.log(state)
    return{
        emailtext: state.LoginFormState.email,
        passwordtext: state.LoginFormState.password
    }
}
const mapDispatchToProps = dispatch => {

     return{
        loginFormObj: (formobj) => {
            dispatch(loginformval(formobj))
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen)
//export default ThirdScreen