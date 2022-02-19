import React from "react";
import { ImageBackground,View,Text,Image } from "react-native";

var bg = require('./photos/CalculatorLogo.png');
var powerby = require('./photos/SanjaySignature.png');
const Splash =()=>{
    return(
        <ImageBackground
            source={bg}
            // style ={{height:, width=}}
        >
            <View
                style={{flex:1,justifyContent:'center',alignItems:'center'}}
            >
                <Image
                    source={powerby}
                    style={{height:100,width:100}}
                >
                </Image>
            </View>
        </ImageBackground>
    )
}

export default Splash;