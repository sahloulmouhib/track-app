import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer=(state,action)=>{
    switch (action.type) {
        case 'add_error':
            return {...state,errorMessage:action.payload}
        case 'signin':
            return {errorMessage:"",token:action.payload}
        case 'clear_error_message':
                return {...state,errorMessage:""}
        case 'signout':
                return {errorMessage:"",token:null}            
        default:
           return state
    }
}



const signup=(dispatch)=> async({email,password})=>{
        //make api request ti sign up with that email and password
        try{
            //console.log({email,password})
            const response=await trackerApi.post('/signup',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signin',payload:response.data.token})
           // console.log(response.data)
            const value = await AsyncStorage.getItem('token')
            //console.log(value)
            navigate('TrackList')
            //navigate to main flow

        }catch(err){
           // console.log(err.message)
            dispatch({type:'add_error',payload:"Something went wrong with sign up"})
        }
        //if we sign up , modify our state and say that we are athenticated

        //iff siging up fails we need to reflect an erro message
    }


const signin=(dispatch)=>{
    return async({email,password})=>{
        //try to signin
        //handle success by updating state
        //handle failure by showing error message 
        try{
            const response=await trackerApi.post('/signin',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signin',payload:response.data.token})
            navigate("TrackList")
        }catch(err){
            //console.log(err)
            dispatch({
                type:"add_error",
                payload:"Something went wrong with sign in"
            })
        }
    }
}

const clearErrorMessage=dispatch=>()=>dispatch({type:'clear_error_message'})

const tryLocalSignin=dispatch=>async()=>
{
    const token= await AsyncStorage.getItem('token')
    
    if(token)
    {
        dispatch({type:'signin',payload:token})
        //console.log('this is async token')
        
        navigate('TrackList')
    }
    else{
        navigate('Signup')
        //console.log('token is epmty')

    }
    
}

const signout=dispatch=>async()=>{
    //sign out
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    navigate('loginFlow')

    
}

export const{Provider, Context}= createDataContext(
    authReducer,
    {signin,signout,signup,clearErrorMessage,tryLocalSignin},
    {token:null,errorMessage:""}
)