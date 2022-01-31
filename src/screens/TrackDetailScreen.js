import React, {useContext } from 'react';
import { View,StyleSheet,Text ,ScrollView} from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import MapView ,{Polyline,Circle}from 'react-native-maps'
import CustomInput from '../components/CustomInput';
const TrackDetailScreen=({navigation})=>{
    const {state}=useContext(TrackContext)
    const _id=navigation.getParam('_id')
    
    const track=state.find(t=>t._id===_id)
    const initialCoords=track.locations[0].coords
    //console.log("TRACKKKKKKKKKKKK",track,_id)
    //console.log('this is the name iam looking for ',track.name)
    return <ScrollView style={styles.container}>
    <Text style={styles.title}>Track Details </Text>
    <Text style={styles.title2}>The line represents the steps you made in order to get to your location
    follow the line to reach the wanted location, just to let you know {track.name} was indeed a beautiful place .</Text>
    <MapView 
        initialRegion={{
            longitudeDelta:0.01,
            latitudeDelta:0.01,
            ...initialCoords
    }}
        style={styles.map}
    >
        <Polyline lineDashPattern={[0]} coordinates={track.locations.map(loc=>loc.coords)}/>
    </MapView>
    
    <Text style={styles.title3}>{track.name}</Text>

    </ScrollView>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    map:{
        marginTop:30,
        height:300
    },
    title:{
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:25,
        color:"black",
        fontWeight:"bold",
        textTransform: 'capitalize'
    },
    title2:
    {
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:15,
        color:"grey",
        
    },
    title3:{
        alignSelf:"center",
        paddingTop:20,
        paddingHorizontal:15,
        fontSize:30,
        color:"#407BFF",
        fontWeight:"bold",
        textTransform: 'capitalize'
    }

    
})

export default TrackDetailScreen
