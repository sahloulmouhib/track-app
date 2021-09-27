import React, { useState,useContext } from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native'
import {Button,Input,Text} from 'react-native-elements'
import Spacer from '../components/Spacer';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


import { Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink'

import { NavigationEvents } from 'react-navigation';


const SigninScreen=({navigation})=>{
    const [email,setEmail]=useState('mouhib@hotmail.com')
    const [password,setPassword]=useState('sahloul1992')
    const {state,signin,clearErrorMessage}=useContext(AuthContext)
    console.log(state)

    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}/>
        <Text style={{textAlign:'center'}} h3>Sign In For Tracker</Text>
        
        <Image style={styles.image} source={require('../images/login.png')}></Image>
        <View style={styles.textInput}>
        <Spacer >
        
        <CustomInput state={{inputState:email,stateSetter:setEmail}}title={"Enter Email"} placeholder={"Email"} ></CustomInput>
        <CustomInput state={{inputState:password,stateSetter:setPassword}} title={"Enter Password"} placeholder={"Password"} ></CustomInput>
       
        {state.errorMessage? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) :null}
        <CustomButton title={"Sign In"} object={{email,password}}
                    onSubmit={({email,password})=>{

                        signin({email,password})
                        console.log(email)
                        console.log(password)}}></CustomButton>

        <NavLink text="Don't have an account ? Sign up instead"
                routeName="Signup"/>                
                       
        
        </Spacer>
        
        </View>
        
        


    </View>
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
      
    };
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:50
    },
   
    button:{
        borderRadius:30
    },
    errorMessage:{
        fontSize:16,
        color:'red',
        textAlign:"center"
    },
    hasAccount:{
        color:"#1d92b3",
        fontSize:16,
        textAlign:"center"
    },
    image:{
        alignSelf:"center",
        width:200,
        height:300
    }
})

export default SigninScreen
