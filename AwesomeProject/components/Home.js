
import React from "react";
import { Button, Text,View } from "react-native";

// incoming props and defineg props

const Home=(props)=>{
    // console.warn(incomingdata)                 // shows data history or can say icoming data
    return (
        <View>
            <Text style={{fontSize:60}}>
                {/* Home Component  */}
                {props.data}
            </Text>
            <Button title="click me"/>
        </View>
    )
}

export default Home;