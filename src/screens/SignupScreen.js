import React, { useState,useContext,useEffect } from 'react';
import { View,StyleSheet,TouchableOpacity} from 'react-native'
import {Button,Input,Text} from 'react-native-elements'
import Spacer from '../components/Spacer';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import { Context as AuthContext} from '../context/AuthContext';

import NavLink from '../components/NavLink'

import { NavigationEvents } from 'react-navigation';


import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen=({navigation})=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {state,signup,clearErrorMessage,}=useContext(AuthContext)
    console.log(state)

    


    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}/>
        <Spacer>
        <Text style={{textAlign:'center'}} h2>Sign Up For Tracker</Text>
        </Spacer>
        <View style={styles.textInput}>
        <Spacer >
        
        <CustomInput state={{inputState:email,stateSetter:setEmail}}title={"Enter Email"} placeholder={"Email"} ></CustomInput>
        <CustomInput state={{inputState:password,stateSetter:setPassword}} title={"Enter Password"} placeholder={"Password"} ></CustomInput>
       
        {state.errorMessage? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) :null}
        <CustomButton title={"Sign up"} object={{email,password}}
                    onSubmit={({email,password})=>{
                        signup({email,password})
                        console.log(email)
                        console.log(password)}}></CustomButton>
                       
        
        </Spacer>
        
        </View>
        <NavLink text="Already have an account? sign in instead"
                routeName="Signin"/>
        
    

    </View>
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
      
    };
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200
    },
   
    button:{
        borderRadius:30
    },
    errorMessage:{
        fontSize:16,
        color:'red',
        textAlign:"center"
    },
    
})

export default SignupScreen
