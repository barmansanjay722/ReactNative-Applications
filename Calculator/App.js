import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "./Screens/Calculator";
import ExchangeRate from "./Screens/Exchange_Rate";
import UnitConverter from "./Screens/UnitConverter";
// import Splash from "./Screens/Splash";

const Tab = createBottomTabNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={Calculator}/>
        <Tab.Screen name="Exchnage Rate" component={ExchangeRate}/>
        <Tab.Screen name="Unit converter" component={UnitConverter}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;