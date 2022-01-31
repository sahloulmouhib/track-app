import '../_mockLocations'
import React, { useEffect,useState,useContext, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {withNavigationFocus} from 'react-navigation'
import { View,StyleSheet,Text,ScrollView } from 'react-native'
import Map from '../components/Map';
import {requestForegroundPermissionsAsync,requestBackgroundPermissionsAsync,requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import TrackListScreen from './TrackListScreen';
import {FontAwesome,Feather,AntDesign} from '@expo/vector-icons'


const TrackCreateScreen=({isFocused})=>{

    const {state: {recording},addLocation,changeName}=useContext(LocationContext)
    const callback=useCallback(location=>{
        addLocation(location,recording)
    },[recording])
    const [err]=useLocation(isFocused || recording,callback)

    return <SafeAreaView forInset={{top:"always"}}>
        <ScrollView>
        <Text style={styles.title}>Create a Track </Text>
        <Map ></Map>
        {err ? <Text >Please enable location services</Text> : null}
        <TrackForm callback={changeName}/>
        </ScrollView>
        
        </SafeAreaView>
}


TrackCreateScreen.navigationOptions ={
    title:"Add Track",
    tabBarIcon:<AntDesign name="pluscircleo" size={20}/>
}

const styles = StyleSheet.create({
    title:{
        marginTop:20,
        paddingVertical:20,
        paddingHorizontal:15,
        fontSize:25,
        color:"black",
        fontWeight:"bold",
    },
    map:{
        borderRadius:40
    }
})

export default withNavigationFocus(TrackCreateScreen)