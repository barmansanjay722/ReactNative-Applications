import React from "react";
import { View,Image,StyleSheet } from "react-native";

const Gallery = (props)=> {
    return (
        <View style={styles.container}>
            <View >
                <Image style={styles.imageStyle}
                    source={{uri:props.route.params.uri}}
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        flexDirection:'row'
    },
    imageStyle:{
        width:120,
        height:120,
    }
})


export default Gallery;