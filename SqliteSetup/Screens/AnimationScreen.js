import React from "react";
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";

const AnimationScreen = ({navigation})=> {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.TouchableStyle} onPress={()=>navigation.navigate('moveball')}>
                    <Text style={{color:'white'}}>Move ball</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableStyle} onPress={()=>navigation.navigate('StretchingBoxScreen')}>
                    <Text style={{color:'white'}}>Stretching box</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    TouchableStyle:{
        padding:20,
        borderRadius:8,
        backgroundColor:'#000000',
        marginRight:20
    }
})

export default AnimationScreen;