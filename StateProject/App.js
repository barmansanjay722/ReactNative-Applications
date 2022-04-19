
import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name = 'home' />
      </Stack.Navigator>
    </NavigationContainer>
  )
  // const [page,setPage] = useState('');
  // const Homepage = () => setPage('Home');
  // const Detailpage = () => setPage('Detail');
  // const Aboutpage = () => setPage('About');

  // const [name,setName] = useState('');
  // const [lastname, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [value, setValue] = useState([]);
  // const [showValue, setshowValue] = useState('');

  // let DATA = value;
  // const funct=()=>{
  // //  let DATA = value;
  //  const objectData = {
  //    Firstname : name,
  //    Lastname : lastname,
  //    Email : email
  //  }
  //  DATA.push(objectData);
  //  setValue(DATA);
  // }

  // const editpage=(event)=> {
  //   const result = DATA[event];
  //   setshowValue(result);
  //   console.log(showValue);
  // } 

  // return(

  //   <View style={styles.container}>
  //     <View >
  //       <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'green'}]} onPress={Homepage} >
  //         <Text style={styles.textStyle}>Home</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'#5f9ea0'}]} onPress={Detailpage} >
  //         <Text style={styles.textStyle}>Detail</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'#b22222'}]} onPress={Aboutpage}>
  //         <Text style={styles.textStyle}>About</Text>
  //       </TouchableOpacity>
  //     </View>

  //     {(()=> {
  //       switch (page) {
  //         case 'Home':
  //           return(
  //             <Home nameval={name} nameonChange={setName } 
  //               eamilval={email} eamilonchange={setEmail} 
  //               lastnameval={lastname} lastnameonchange={setLastName} funct={funct} editdata={editpage}
  //               showValue={showValue}
  //             ></Home>
  //           )
  //         case 'About':
  //           return(
  //             <About 
  //               valueData={value} homepage={Homepage} editPage={editpage}
  //             ></About>
  //           )
  //         case 'Detail':
  //           return(
  //             Detail()
  //           )
        
  //         default:
  //           return(
  //             <Home nameval={name} nameonChange={setName } 
  //               eamilval={email} eamilonchange={setEmail} 
  //               lastnameval={lastname} lastnameonchange={setLastName} showValue={showValue}
  //             ></Home>
  //           )
  //       }
  //     })()}
  //   </View>
    
  // );
  
}

// const Home =({nameval,nameonChange,eamilval,eamilonchange,lastnameval,lastnameonchange,funct,showValue})=> {
//   return(
//     <View style={styles.viewStyle}>
//       <Text style={[styles.dataStyle,{textAlign:'center'}]}>Home</Text>
//       <Text style={{margin:7}}>First name</Text>
//       {/* <Text>{showValue.Email}</Text> */}

//       <TextInput style={styles.textinputborder}
//         placeholder= 'name'
//         onChangeText={nameonChange}
//         value={nameval}
//       ></TextInput>
     
//       <Text style={{margin:7}}>Last name</Text>
//       <TextInput style={styles.textinputborder}
//         placeholder= 'surname'
//         onChangeText={lastnameonchange}
//         value={lastnameval}
//       ></TextInput>

//       <Text style={{margin:7}}>Email</Text>
//       <TextInput style={styles.textinputborder}
//        placeholder= 'email'
//        keyboardType='email-address'
//        onChangeText={eamilonchange}
//        value={eamilval}
//       ></TextInput>

//       <View style={styles.aboutView}>
//         <View style={{padding:7}} >
//           <Button title='Save' onPress={funct} />
//         </View>  
//         <View style={{padding:7}} >
//           <Button title='Update'/>
//         </View> 
//       </View>
//     </View>
//   )
// }

// const About = ({valueData,editPage,homepage})=> {
  
//   return(
//     <View style={styles.viewStyle}>
//       <Text style={[styles.dataStyle,{textAlign:'center'}]}>About</Text>
//         <FlatList
//           data={valueData}
//           renderItem={({item,index})=>{

//             return (
//               <View style={[styles.dataStyle,styles.aboutView]}>
//                 <View style={{marginRight:61}}>
//                   <Text>{item.Firstname}</Text>
//                   <Text>{item.Lastname}</Text>
//                   <Text>{item.Email}</Text>
//                 </View>
//                 <TouchableOpacity style={[styles.editTouchable,{padding:8}]} onPress={()=>{editPage(index)}} >
//                   <Text style={{color:'white',textAlign:'center'}}>Edit</Text>
//                 </TouchableOpacity>
//               </View>
//             )
//           }}
//         />
        
//     </View>
//   )
// }

// const Detail =()=> {
//   return(
//     <View style={styles.viewStyle}>
//       <Text style={styles.dataStyle}>
//        extended treatment of or attention to particular items explaining without going into detail giving careful attention to detail.
//        a part of a whole: such as. a : a small and subordinate part : particular planned the wedding down to the smallest detail also : 
//        a reproduction of such a part of a work of art.
//       </Text>
//     </View>
//   )
// }



const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'#f5f5dc',
    flexDirection:'row'
  },
  touchableStyle:{
    height:70,
    width:111,
    borderRadius:11,
    marginBottom:11
  },
  textStyle:{
    fontSize:20,
    fontWeight:'500',
    fontStyle:'normal',
    textAlign:"center",
    marginTop:20
  },
  viewStyle:{
    marginLeft:11,
    backgroundColor:'#dcdcdc',
    borderRadius:11,
    height:500,
    width:200
  },
  dataStyle:{
    padding:10,
    fontSize:21
  },
  textinputborder:{
    borderColor:'#6495ed',
    borderWidth:1,
    margin:5,
    borderRadius:8
  },
  aboutView: {
    flexDirection:'row'
  },
  editTouchable : {
    backgroundColor:'blue',
    borderRadius:8,
  }
});

export default App;
