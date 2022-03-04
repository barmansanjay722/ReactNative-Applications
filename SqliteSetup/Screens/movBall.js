import React, { useState } from "react";
import { Animated, View,StyleSheet, TouchableOpacity,Text } from "react-native";

const MoveBall = ()=> {

    const value = useState(new Animated.ValueXY({x:0,y:0}))[0]

    function Ball() {
        Animated.timing(value,{
            toValue: {x:250, y:595},
            duration:1000,
            useNativeDriver:false
        }).start()
    }
    function Backball() {
        Animated.timing(value,{
            toValue: {x:0, y:0},
            duration:1000,
            useNativeDriver:true,
        }).start()
    }
    return (
        <View style={styles.container}>
            <Animated.View style={value.getLayout()}>
                <View style={styles.ball}/>
            </Animated.View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:100}}>
                <TouchableOpacity onPress={Ball}>
                    <Text>Click me to move</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Backball}>
                    <Text>back position</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    ball:{
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:'red'
    }
})


export default MoveBall;