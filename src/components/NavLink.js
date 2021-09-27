import React, { PureComponent } from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink=({navigation,text,routeName})=>{
return(
    <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
            <Text style={styles.hasAccount}>
                {text}
            </Text>
        </TouchableOpacity> 
)
}



const styles = StyleSheet.create({
    hasAccount:{
        color:"#1d92b3",
        fontSize:16,
        textAlign:"center"
    }
})

export default withNavigation(NavLink)
