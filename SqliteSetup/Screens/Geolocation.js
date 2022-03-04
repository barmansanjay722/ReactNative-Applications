import React,{useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const GeolocationScreen =()=>{
    
    const [latitude,setlatitude] = useState(0);
    const [longitude,setlongitude] = useState(0);

    Geolocation.getCurrentPosition(data=>{
        setlatitude(data.coords.latitude);
        setlongitude(data.coords.longitude);
    })
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Here your Location</Text>
            <Text>Longitude: {latitude}</Text>
            <Text>Latitude: {longitude}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        marginBottom:20
    }
})


export default GeolocationScreen;