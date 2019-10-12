# reduxReactTest

Redux Testing for react native .

1. Create src folder and inside it create components, actions, reducers and store folder
2. In the action folder create a file named type.js and add the action type tou want to export (e.g. export const LOGIN_STATE="LOGIN_STATE")
3. In the action folder create another file and name it ..action.js(e.g loginaction.js). Inside the file import type.js and export a const which
   will have an type and payload. Type name is the name you imported and payload is the data you want to change. payload could be an object 
   or a single data. example of an object is --
   
    import {LOGIN_FORM_VAL} from './types';

    export const loginformval = formobj => {
        return{
            type: LOGIN_FORM_VAL,
            payload: formobj
        }
    }
    
4)inside reducer folder create a reducer file to check which action type is called -- 
   import { LOGIN_FORM_VAL } from '../actions/types';

    const initialState = {
        email: "test2@gmail.com",
        password: "test123",
    }

    export default LoginFormReducer = (state = initialState, action) => {
        console.log(action.payload)
        console.log("payload form.....")
        switch(action.type){
            case LOGIN_FORM_VAL:
                return {
                    ...state,
                    email: action.payload.email,
                    password: action.payload.password
                }
            default:
                return state
        }
    }
    
  5) inside store folder create a combined store which will held all the combination of reducers -- 
  
    import { createStore, combineReducers } from 'redux';
    import placeReducer from '../reducers/placeReducer';
    import ThemeColorReducer from '../reducers/ThemeColorReducers'
    import LoginFormReducer from '../reducers/LoginFormReducers';
    const rootReducer = combineReducers({
      loginState: placeReducer,
      ThemeColorState: ThemeColorReducer,
      LoginFormState: LoginFormReducer
    });

    const configureStore = () => {
      return createStore(rootReducer);
    }

    export default configureStore;
    
  6. Need to import connect from react-redux to connect to a store in any component. use two function named mapStatetoprops and
     mapDispatchToProps. mapStatetoprops maps local local state with react state. You have to declare local state and inside 
     mapstatetoprops return local state value with redux state. to map localstate: state.reducernameinthestorefile.variableinthereducerfile.
     ex. - emailtext: state.LoginFormState.email,(login form state is the name the store files combined reducer.emailtext is local state)
           passwordtext: state.LoginFormState.password
           
    mapdispatchtoprops is the way to change a value inside store of redux. in this function you will need the import of action const name
    and dispatch a value or object as a parameter with the action name. example --
    return{
        loginFormObj: (formobj) => {
            dispatch(loginformval(formobj))
        }
     }
     Here loginform obj is an object and loginformval is the action name in the action file. formobj is passed as parameter
     
     7. Need to connect the above functions to get and set value in redux store. e.x
       export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen)
     8.  To access a value form store you have to use props.Like this
                <View>
                    <Text>{this.props.emailtext}</Text>
                    <Text>{this.props.passwordtext}</Text>
                </View>
                emailtext and passtext is the name in mapstatetoprops first parameter or local state
      9. To change a value say on button click. You will set the props like this --
      
         let formobj = {
                email: this.state.emailtext,
                password: this.state.passwordtext
            
        }
        console.log(formobj)
        this.props.loginFormObj(formobj);
        Here loginFormObj is the name in the mapdispatchtoprops function and we are passing an object
        
          full test code is --
          
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
