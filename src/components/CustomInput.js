import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

const CustomInput=({state,title,placeholder})=>{
   const{inputState,stateSetter}=state
    

    return <View >
        <Text style={styles.label}>{title}</Text>
        <TextInput  secureTextEntry={placeholder==="Password"} placeholder={placeholder}  value={inputState}  style={styles.input} onChangeText={text=>stateSetter(text)}/>
       
    </View>
}



const styles = StyleSheet.create({
    container:{
        
       
    },
    input:{
        fontSize:16,
        padding:10,
        backgroundColor:'#e0dfde',
        marginVertical:10,
        borderRadius:10,
        height:50

    },
    button:{
        
        borderRadius:10,
        marginVertical:40,
        alignItems:"center",
        justifyContent:"center",
        
        height:50,
        backgroundColor:"black",

    },
    buttonText:{
        color:"white",
        fontSize:18,
      
    }, 
    label:{
        fontSize:16
    },
    screenTitle:{
        marginVertical:20,
        fontWeight:"bold",
        alignSelf:"center",
        fontSize:20,
    }
})
export default CustomInput
