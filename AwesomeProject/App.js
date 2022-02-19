
// import React from "react";

// import { View,Text } from "react-native";
// import Login from './components/Login';

// const App = () =>{
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Hello Sanjay from native application</Text>
//       {/* <Login /> */}

//     </View>
//   );
// };




/*  Class Component */

// import React,{Component} from "react";
// import { View,Text, Button } from "react-native";

// class App extends Component {
//   render(){
//     return(
//       <View><Text style={{fontSize:20}}>Class Component</Text>
//       <Button onPress={()=>alert("hello class Sanjay")} title="Press on" />
//       </View>
//     )
//   }
// }



/*function Component */
// import React from "react";
// import { Button, Text,View } from "react-native";

// const App=()=>{
  
//   function login(){
//     alert("hello Sanjay from functional")
//   }
//   return(
//     <View>
//       <Text style={{fontSize:20}}>functional Component</Text>
//       <Button onPress={login} title="press me"/>
//     </View>
//   )
// }



// /*props and props in component  (props = properties)*/
// import React from "react";
// import { View,Text } from "react-native";
// import Home from "./components/Home";
// const App =()=>{
//   const Data = "some data";      
//     return (
//       <View>
//         <Home data={Data}    />
//       </View>
//     )
// }


/*Sates (what is state, change state event) */

// state is basically object manage state component
// can also work like container
// import React,{Component} from "react";
// import { Text,View,Button } from "react-native";


// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state={
//       data: "Some app data from class state"
//     }
//   }
//   test(){
//     this.setState({data:"New App Data"});
//   }
//   render(){
//     // console.warn(this.state)
//     return(
//       <View>
//         <Text style={{fontSize:30}}>
//           {this.state.data}
//         </Text>
//         <Button title="Update State" 
//           onPress={()=>{this.test()}}
//         />
//       </View>
//     );
//   }
// }


/*design  */
// import React from "react";
// import { View,Text } from "react-native";
// import NewStyle from "./components/NewStyle";

// const App=()=>{
//   return(
//     <View>
//       <NewStyle/>
//     </View>
//   );
// }


/*flex   (used for layout customization) */

import React from "react";
import { View,Text,ScrollView,Image } from "react-native";

const App=()=>{
  return(
    /*
     fex: 1 take ratio of wlhole screen
     and( flexWrap:wrap ) take all flexes in container mood 
     there also have contents like justifyCenter all the things
     */
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'red'}}></View>
      <View style={{flex:1,backgroundColor:'green'}}></View>
      <View style={{flex:1,backgroundColor:'blue'}}></View>
    </View>
  );
}


export default App;

