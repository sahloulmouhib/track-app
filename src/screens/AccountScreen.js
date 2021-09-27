import React, { useContext } from 'react';
import { View,StyleSheet,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//import { SafeAreaView } from 'react-navigation';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen=()=>{
    const{signout} =useContext(AuthContext)

    return <SafeAreaView style={styles.container} forceInset={{top:"always"}}>
        <Text>Account Screen</Text>
    <CustomButton title="Sign out" onSubmit={signout}/>
    </SafeAreaView>
    
    
}


const styles = StyleSheet.create({
    container:{
        
        margin:30
    }
})

export default AccountScreen
