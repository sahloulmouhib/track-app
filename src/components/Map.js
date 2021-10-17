import React from 'react' 
import{Text,StyleSheet} from 'react-native'
import MapView ,{Polyline}from 'react-native-maps'

const Map=()=>{

    let points=[]
    for(let i=0;i<20;i++){
        points.push({
            latitude:37.33233+i*0.01,
            longitude:-122.03121+i*0.01
        })
    }
    initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
      };
      return (
        <MapView
          style={styles.map}
          initialRegion={{
            ...initialLocation,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
        <Polyline coordinates={points}/>
        </MapView>)
}

const styles=StyleSheet.create({
    map:{
        height:300,
    }
})

export default Map