import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

const CustomButton=({onSubmit,title,object})=>{
    
    

    return <View style={styles.container}>
        
        
        <TouchableOpacity onPress={()=>{
            if(object)
            {
                onSubmit(object)
            }
            else{
                onSubmit()
            }
           
           
        }} style={styles.button} ><Text style={styles.buttonText}>{title}</Text></TouchableOpacity>
        
    </View>
}



const styles = StyleSheet.create({
    
       
    
    input:{
        fontSize:16,
        padding:10,
        backgroundColor:'#e0dfde',
        marginVertical:10,
        borderRadius:20,
        height:50

    },
    button:{
        
        borderRadius:20,
        marginVertical:20,
        alignItems:"center",
        justifyContent:"center",
        
        height:50,
        backgroundColor:"#407BFF",

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
export default CustomButton
