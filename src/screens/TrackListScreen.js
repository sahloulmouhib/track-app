import React, { PureComponent } from 'react';
import { View,StyleSheet,Text,Button } from 'react-native'

const TrackListScreen=({navigation})=>{
    return <>
        <Text>TrackList Screen</Text>
        <Button title="Go to Track Detail" onPress={()=>navigation.navigate("TrackDetail")}/>
    </>
}


const styles = StyleSheet.create({
    
})

export default TrackListScreen
