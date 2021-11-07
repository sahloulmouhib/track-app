import '../_mockLocations'
import React, { useEffect,useState,useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,StyleSheet,Text } from 'react-native'
import Map from '../components/Map';
import {requestForegroundPermissionsAsync,requestBackgroundPermissionsAsync,requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext';
const TrackCreateScreen=()=>{

    const {addLocation}=useContext(LocationContext)

    const [err,setErr]=useState(null)
    const startWatching=async()=>{
        try{
           
            await requestForegroundPermissionsAsync()
            await requestBackgroundPermissionsAsync()
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },(location)=>{
                //console.log("track create screen")
               //console.log(location)
               addLocation(location)
            })

        }catch(e)
        {
            setErr(e)
        }
    }

    useEffect(()=>{
        startWatching()
    },[])


    return <SafeAreaView forInset={{top:"always"}}>
        <Text>TrackCreate Screen</Text>
        <Map></Map>
        {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
}


const styles = StyleSheet.create({
    
})

export default TrackCreateScreen
