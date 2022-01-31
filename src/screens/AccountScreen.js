import React, { useContext } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//import { SafeAreaView } from 'react-navigation';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen=()=>{
    const{signout} =useContext(AuthContext)

    return <SafeAreaView style={styles.container} forceInset={{top:"always"}}>
        <Text style={styles.title}>Account Screen</Text>
        <Text style={styles.title2}>The user's experience does not come to a dead end the moment they tap that “Log out” link. (Nor does it start the moment they choose to log in.) ....</Text>
        <Image style={styles.image} source={require('../images/login.png')}></Image>
    <CustomButton title="Sign out" onSubmit={signout}/>
    </SafeAreaView>
    
    
}

AccountScreen.navigationOptions ={
    title:"Account",
    tabBarIcon:<FontAwesome name="gears" size={20} />
}

const styles = StyleSheet.create({
    container:{
        
        margin:15
    },
    title:{
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:25,
        color:"black",
        fontWeight:"bold",
    },
    image:{
        alignSelf:"center",
        width:200,
        height:300
    },
    title2:
    {
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:15,
        color:"grey",
        
    },
})

export default AccountScreen
