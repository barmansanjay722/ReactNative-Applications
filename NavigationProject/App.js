/* navigation (stack navigation) */


// import React,{useState} from "react";
// import { View,Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator()
// const App =()=>{
//   return (
//     <NavigationContainer >
//       <Stack.Navigator screenOptions ={{
//             headerStyle:{
//               backgroundColor:'#f00'
//             },
//             headerTintColor:'#fff',
//             headerTitleStyle:{
//               fontWeight:'bold',
//               fontSize:30
//             }
//           }} initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen}
//           // options={{
//           //   title:'My Home',
//           //   headerStyle:{
//           //     backgroundColor:'#f00'
//           //   },
//           //   headerTintColor:'#fff',
//           //   headerTitleStyle:{
//           //     fontWeight:'bold',
//           //     fontSize:30
//           //   }
//           // }}
//         ></Stack.Screen>
//         <Stack.Screen 
//           options={({route})=>({title:route.params.email})}           // name changes on header
//          name="Details" component={DetailScreen}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// function HomeScreen({navigation})
// {
//   const [count,setCount] = useState(0)
//   React.useLayoutEffect(()=>{
//     navigation.setOptions({
//       headerRight:()=>(
//         <Button title="Count" onPress={()=>{setCount(count=>count+1)}}/>
//       )
//     })
//   },[navigation,setCount])
//   let data = {name: 'Sanjay Barman',email:'barmansanjay722@gmail.com',address:'abc'}
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//       <Text style={{fontSize:20}}>{count}</Text>
//       <Button title="go to detail page" 
//         // onPress={()=>{navigation.navigate('Details')}}
//         onPress={()=>{navigation.push('Details',data)}}                                        // data transfer
//       />
//     </View>
//   )
// }

// function DetailScreen({route,navigation})
// {
//   // console.warn(route.params)
//   let data = route.params
//   return (
//     <View>
//       <Text>DetailScreen</Text>
//       <Text style={{fontSize:20}}>{data.name}</Text>
//       <Text style={{fontSize:20}}>{data.email}</Text>
//       <Text style={{fontSize:20}}>{data.address}</Text>
//       <Button title="go to homeScreen" onPress={()=>{navigation.push('Home')}}/>
//       <Text style={{fontSize:20,margin:20}}>tap for header name change</Text>
//       <Button title="header name change ?" onPress={()=>{navigation.setOptions({title:'title changed'})}}/>
//     </View>
//   )
// }


// export default App;



/* Tab navigation */


// import React from "react";
// import { View,Text,Button } from "react-native";
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// const App = () =>{
//   return (
//     <NavigationContainer initialRouteName="Home">
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen}/>
//         <Tab.Screen name="Setting" component={SettingScreen}/>
//         <Tab.Screen name="About" component={AboutScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;


// function HomeScreen()
// {
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Hello tab nav from home screen</Text>
//     </View>
//   )
// }

// function AboutScreen()
// {
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Hello tab nav from About screen</Text>
//     </View>
//   )
// }

// function SettingScreen()
// {
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Hello from setting screen</Text>
//     </View>
//   )
// }


/* Drawer Navigation */

// import React from "react";
// import { View,Text } from "react-native";
// import {createDrawerNavigator} from "@react-navigation/drawer";
// import {NavigationContainer} from '@react-navigation/native';

// const Drawer = createDrawerNavigator();
// const App = () =>{
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen}/>
//         {/* <Drawer.Screen name="Call" component={CallScreen}/> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

// function HomeScreen()
// {
//   return (
//     <View>
//       <Text style={{fontSize:30}}> Home Screen</Text>
//     </View>
//   )
// }

// function CallScreen()
// {
//   return (
//     <View>
//       <Text style={{fontSize:30}}> Setting Screen</Text>
//     </View>
//   )
// }


/* CallBack Function */

// import React, { useState } from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './component/Home';
// import MainScreen from './component/Main';

// const Stack = createStackNavigator()
// const App = ({navigation}) =>{

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="main" component={MainScreen}/>
//         <Stack.Screen name="home" component={HomeScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   )
// }

// export default App;







import React from "react";
import { View,Text } from "react-native";

const App = ()=>{

  return (
    <View>
      <Text> Hi Sanjay</Text>
    </View>
  )
}


export default App;