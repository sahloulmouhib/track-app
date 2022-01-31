import React, { PureComponent } from 'react';
import { View,StyleSheet,Text,Button ,FlatList,TouchableOpacity} from 'react-native'
import { Context as TrackContext} from "../context/TrackContext";
import { useState ,useEffect,useContext} from 'react';
import { NavigationEvents } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons,Fontisto } from '@expo/vector-icons';
const TrackListScreen=({navigation})=>{
    const {fetchTracks,state}=useContext(TrackContext)
    //const [counter,setCounter]=useState(0)
    //console.log(state[0])


   

    return <View style={styles.container}>
        <NavigationEvents onWillFocus={()=>{fetchTracks()}}/>
        <Text style={styles.title}>List of Tracks</Text>
        <FlatList
                style={styles.list}
                data={state}
                keyExtractor={item=>item._id}
                renderItem={({item})=>{
                    return( <TouchableOpacity  style={styles.item} onPress={()=>
                        navigation.navigate('TrackDetail',{_id:item._id})
                        
                    }>
                        
                        <Text style={styles.text}>{item.name}</Text>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-right" size={40} color="grey" />
                        </TouchableOpacity>)
                }}
            />
        
        
      
       
        {/*<Button title="Counter" onPress={()=>{
        
        setCounter(counter+1)
        }}></Button>*/}
    </View>
}


TrackListScreen.navigationOptions ={
    title:"Tracks"
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
       
        
    },
    list:{
        marginBottom:80
    },
    item:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        paddingVertical:15,
        paddingHorizontal:15,
        marginVertical:5,
        borderColor:"#a8a7a5",
        borderRadius:10,
        marginHorizontal:20,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    text:{
        fontSize:20,
        color:'#407BFF',
        textTransform: 'capitalize'
    },
    icon:{
        alignSelf:'center'
    },
    title:{
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:25,
        color:"black",
        fontWeight:"bold",
    }
})

export default TrackListScreen
