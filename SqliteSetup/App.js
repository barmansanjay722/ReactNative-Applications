
/* Sqlite developping */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScreen from "./Screens/ResultScreen";
import Home from "./Screens/Home";
import Delete from "./Screens/Delete";
import Update from "./Screens/Update";
import GeolocationScreen from "./Screens/Geolocation";
import CameraAccess from "./Screens/CameraAccess";
import Gallery from "./Screens/Gallery";
import AsynStrogateScreen from "./Screens/AsyncStrogateScreen";
import AnimationScreen from "./Screens/AnimationScreen";
import MoveBall from "./Screens/movBall";
import StretchingBox from "./Screens/StretchingBox";

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer initialScreen="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ResultScreen" component={ResultScreen}/>
        <Stack.Screen name="DeleteScreen" component={Delete}/>
        <Stack.Screen name="UpdateScreen" component={Update}/>
        <Stack.Screen name="GeolocationScreen" component={GeolocationScreen}/>
        <Stack.Screen name="CameraScreen" component={CameraAccess}/>
        <Stack.Screen name="GalleryScreen" component={Gallery}/>
        <Stack.Screen name="AsyncScreen" component={AsynStrogateScreen}/>
        <Stack.Screen name="AnimationScreen" component={AnimationScreen}/>
        <Stack.Screen name="moveball" component={MoveBall}/>
        <Stack.Screen name="StretchingBoxScreen" component={StretchingBox}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;