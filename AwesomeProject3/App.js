
/* Scroll View */

//import * as React from 'react';
//import { View,Text,ScrollView } from 'react-native';

// const App = ()=>{
//   return (
//     <ScrollView >
//       <View style={{backgroundColor:'green',height:200,width:200}}></View>
//       <View style={{backgroundColor:'blue',height:200,width:200}}></View>
//       <View style={{backgroundColor:'skyblue',height:200,width:200}}></View>
//       <View style={{backgroundColor:'red',height:200,width:200}}></View>
//       <View style={{backgroundColor:'green',height:200,width:200}}></View>
//       <View style={{backgroundColor:'yellow',height:200,width:200}}></View>
//       <View style={{backgroundColor:'purple',height:200,width:200}}></View>
//       <View style={{backgroundColor:'red',height:200,width:200}}></View>
//       <View style={{backgroundColor:'black',height:200,width:200}}></View>
//       <View style={{backgroundColor:'powderblue',height:200,width:200}}></View>
//       <View style={{backgroundColor:'pink',height:200,width:200}}></View>
//       <View style={{backgroundColor:'green',height:200,width:200}}></View>
//       <View style={{backgroundColor:'red',height:200,width:200}}></View>
//       <View style={{backgroundColor:'blue',height:200,width:200}}></View>
//     </ScrollView>
//   )
// }

/* Hooks */

// import React,{useState} from "react";
// import { View,Text,Button } from "react-native";
// const App = ()=>{

//   const [count,setCount] = useState(1)

//   return(
//     <View>
//       <Text style={{textAlign:"center",fontSize:40}}>useState Hooks {'\n'}
//       {count}
//       </Text>
//       <Button title="+ State" onPress={()=>setCount(count+1)}/>
//       <Text style={{textAlign:"center",fontSize:20}}>decrease the State or Count</Text>
//       <Button title="- State" onPress={()=>setCount(count-1)}/>
//     </View>
//   )
// }


/* Life Cycle */

// import React,{Component} from "react";
// import { View,Text } from "react-native";

// class App extends Component {
//     constructor()
//     {
//         super();
//         console.warn('constructor')
//     }
//     componentDidMount()
//     {
//         console.warn('componentDidMound')
//     }
//     render(){
//         console.warn('render')
//         return (
//             <View>
//                 <Text style={{fontSize:40}}> Life Cycle Method</Text>
//             </View>
//         )
//     }
// }


/* Component did mount */

// import React,{Component} from "react";
// import { View,Text } from "react-native";

// class App extends Component {
//     constructor()
//     {
//         super()
//         this.state = {
//             data:""
//         }
//         // console.warn("constructor")
//     }
//     componentDidMount()
//     {
//         // console.warn("componentDidMount")
//         // let api is fetched here
//         this.setState({data:"data from componentDidMount"})
//     }

//     render(){
//         // console.warn('render')
//         return (
//             <View>
//                 <Text style={{fontSize:30}}>{this.state.data}</Text>
//             </View>
//         )
//     }
// }


/* flashlist */

// import React from "react";
// import { View,Text,FlatList } from "react-native";

// class App extends React.Component {

//     constructor()
//     {
//         super()
//         this.state = {
//             data:[
//                 {name:'sanjay',email:'barmansanjay722@gmail.com'},
//                 {name:'anshu',email:'anshu@gmail.com'},
//                 {name:'hunny',email:'hunny@gmail.com'},
//                 {name:'naresh',email:'naresh@gmail.com'},
//             ]
//         }
//     }
//     render() {
//         return(
//             <View style={{flex:1}}>
//                 <Text style={{fontSize:30}}> FlatList</Text>
//                 <FlatList
//                     data= {this.state.data}
//                     renderItem = {({item})=><Text>{item.name}</Text>}
//                 />
//             </View>
//         )
//     }
// }

/* Call api's */

// import React from "react";
// import { View,Text,FlatList } from "react-native";

// class App extends React.Component {
//     constructor()
//     {
//         super();
//         this.state = {
//             data:[]
//         }
//     }
//     componentDidMount()
//     {
//         this.callApis();
//     }
//     async callApis()
//     {
//        let resp = await fetch('https://reactnative.dev/movies.json');
//        let respjson = await resp.json();
//        this.setState({data:respjson.movies})
//     }
//     render()
//     {
//         // console.warn("render",this.state.data)
//         return (
//             <View style={{flex:1}}>
//                 <Text style={{fontSize:30}}>API CALL</Text>
//                 <FlatList
//                     data={this.state.data}
//                     renderItem={({item})=>
//                     <Text style={{textAlign:"center",backgroundColor:'skyblue',margin:10}}>
//                         {item.title},
//                         {item.releaseYear}
//                     </Text>}
//                 />
//             </View>
//         )
//     }
// }


/* form validation */

// import React from "react";
// import { View,Text, TextInput, Button } from "react-native";

// class App extends React.Component {

//     constructor()
//     {
//         super()
//         this.state = {
//             invalidAddress:""
//         }
//     }

//     checkAdrs()
//     {
//         let rjx=/^[a-zA-Z]+$/

//         if(!rjx.text(e)){
//             this.setState({invalidAddress:'please provide valid address'})
//         }
//         else
//         {
//             this.setState({invalidAddress:''})
//         }
//     }
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 <TextInput 
//                     maxLength={8}
//                     placeholder="userName"
//                     style={{borderColor:"skyblue",margin:15,borderWidth:2}}>

//                 </TextInput>
//                 <TextInput 
//                     keyboardType={'numeric'}
//                     placeholder="passward"
//                     style={{borderColor:"skyblue",margin:15,borderWidth:2}}>
                    
//                 </TextInput>
//                 <TextInput 
//                     onChangeText={(e)=>{this.checkAdrs(e)}}
//                     placeholder="about"
//                     style={{borderColor:"skyblue",margin:15,borderWidth:2}}>
                    
//                 </TextInput>
//                 <Text>{this.state.invalidAddress}</Text>
//                 <Button title="Submit"/>
//             </View>
//         )
//     }
// }


/* debugger */

// import React from "react";
// import { View,Text,Button,TextInput,StyleSheet } from "react-native";


// class App extends React.Component {

//     render()
//     {
//         return (
//             <View style={{flex:1}}>
//                 <Text style={{fontSize:40}}> Pass props with navigation and good morning </Text>
//             </View>
//         )
//     }
// }

/* Loader (ActivityIndicator) */

// import React from "react";
// import { View,Text,ActivityIndicator, Button } from "react-native";

// class App extends React.Component {

//     constructor()
//     {
//         super()
//         this.state ={
//             loader:true
//         }
//     }
//     componentDidMount()
//     {
//         setTimeout(() => {
//             this.setState({loader:false})
//         }, 3000);
//     }
//     render()
//     {
//         return(
//             <View>
//                 {
//                     this.state.loader ? 
//                     <ActivityIndicator size={100}/>
//                     :
//                     <Text>loader is loaded</Text>
//                 }
//                 {/* <Button title="click here" onPress={()=>{this.state.loader:false}}/> */}
//             </View>
//         )
//     }
// }


/* useEffect and useState */

// import React,{useState,useEffect} from "react";         // useState to use state in functional component and useEffect for life cytle in functional component
// import { View,Text,Button } from "react-native";
// import Product from "./components/Product";

// const App = () => {
//     const [count,setCount] = useState(0)
//     const [data,setData] = useState('No data')
//     useEffect(()=>{
//         // console.warn("use effect",count)
//         if(count == 5){
//             setData("new data is filled up")
//         }
//     })
//     return(
//         <View style={{marginTop:400}}>
//             {/* <Button title="decrease state" onPress={()=>{setCount(count-1)}}/>
//             <Text style={{fontSize:40}}>{count}</Text>
//             <Text style={{fontSize:40}}>{data}</Text> */}

//             <Button title="update state" onPress={()=>{setCount(count+1)}}/>
//         </View>
//     )
// }


// class App extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             count:0
//         }

//         this.updatecount = this.updatecount.bind(this)
//         this.decreaseCount = this.decreaseCount.bind(this)
//     }
//     updatecount() {
//         this.setState((prevstate)=>{
//             return {
//                 count: prevstate.count + 1
//             }
//         })
//     }
//     decreaseCount(){
//         this.setState((decreasestate)=>{
//             return {
//                 count: decreasestate.count - 1
//             }
//         })
//     }
//     render(){
//         return (
//             <View>
//                 <Button title="decrease count" onPress={this.decreaseCount}/>
//                 <Text style={{fontSize:30}}>{this.state.count}</Text>
//                 <Button title="increase count" onPress={this.updatecount}/>
//             </View>
//         )
//     }
// }



// import React,{useState} from "react";
// import { View,Text, Button } from "react-native";
// import Product from "./components/Product";

// const App = () =>{
//     const [data,setData] = useState("no data")
//     return (
//         <View style={{flex:1,marginTop:300}}>
//             <Product data={data} />
//             <Button title="state update" onPress={()=>setData('New data is filled up')}/>
//         </View>
//     )
// }



/* Modal (Popup) */

// import React,{useState} from "react";
// import { Modal,View,Text,Button} from "react-native";

// class App extends React.Component{
//     constructor()
//     {
//         super();
//         this.state = {
//             show:false
//         }
//     }
//     render(){
//         return (
//             <View style={{flex:1}}>
//                 <Text style={{fontSize:40}}> Normal Text </Text>
//                 <Button title="show modal" onPress={()=>{this.setState({show:true})}} />
//                 <Modal visible={this.state.show} transparent={true}>
//                     <View style={{backgroundColor:'#000000aa',flex:1}}>
//                         <View style={{margin:50,backgroundColor:"#ffffff",flex:1,borderRadius:8,padding:40}}>
//                             <Text style={{fontSize:40}}> Modal Text</Text>
//                             <Button title="hide modal" onPress={()=>{this.setState({show:false})}} />
//                         </View>
//                     </View>
//                 </Modal>
//             </View>
//         )
//     }
// }


/* Axios */

// import React from "react";
// import { View,Text } from "react-native";
// import axios from "axios";

// class App extends React.Component {
//     constructor()
//     {
//         super()
//         this.state = {
//             data:[]
//         }
//     }
//     componentDidMount()
//     {
//         this.getdataformApi()
//     }
//     async getdataformApi() {
//         let resp  = await axios.get('https://reactnative.dev/movies.json')
//         // console.warn(resp.data)
//         this.setState({data:resp.data.movies})
//     }
    
//     render()
//     {
//         return (
//             <View>
//                 {
//                     this.state.data.map((item)=> <Text>{item.title},{item.releaseYear}</Text>)
//                 }
//             </View>
//         )
//     }
// }




/* Lotitude and longitude */

import React,{useState} from "react";
import { View,Text,Button } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const App =()=>{
    const [info,setInfo] = useState(0) 
    const [infolong,setingolong] = useState(0)
    Geolocation.getCurrentPosition(data=>{
        setInfo(data.coords.latitude)
        setingolong(data.coords.longitude)
    })
    // console.warn("Geolocation")
    return (
        <View>
            <Text style={{fontSize:40}}>Your latitude is, {info}</Text>
            <Text style={{fontSize:40}}>Your longitude is, {infolong}</Text>
        </View>
    )
}
export default App;