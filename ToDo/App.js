import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import Swipeout from "react-native-swipeout";


const App =()=>{

  const [textInputValue,setTextInputValue] = useState('');
  const [result,setResult] = useState([]);

  useEffect(()=> {
    gettodoApiCall();
  },[])

  const createApiCall = ()=> {
    fetch('https://minditsystems-a-dev-ed.my.salesforce.com/services/apexrest/createtodo',
    {
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 00D5g00000CQogz!AQQAQOfcT3xB4U02QZwSQSRhlCQ3VeCOUTZmM36Tsk5qODLmdVV5jpkv8qZgD8q5LpUHLLKQ9vH6mUIb7iyb3tKZ_Hri6QIK'
      },
      body: JSON.stringify({
        Tasks:textInputValue
      })
    })
    .then(Response=> Response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
    Alert.alert('Data Saved Successfully');
  }

  const gettodoApiCall = ()=> {
   fetch('https://minditsystems-a-dev-ed.my.salesforce.com/services/apexrest/gettodo',
   {
     method:'GET',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer 00D5g00000CQogz!AQQAQOfcT3xB4U02QZwSQSRhlCQ3VeCOUTZmM36Tsk5qODLmdVV5jpkv8qZgD8q5LpUHLLKQ9vH6mUIb7iyb3tKZ_Hri6QIK'
     }
    })
   .then(Response=> Response.json())
   .then(data => {
      console.log(data);
      setResult(data);
   })
   .catch(err => {
     console.log(err);
  });
 }
  
//  console.log('Result ara h',result.responsepara);
  return (
    <View style={{flex:1}}>
      
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Tasks</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.inputStyle}
          placeholder="add new task"
          onChangeText={
            (textInputValue)=>setTextInputValue(textInputValue)
          }
        />
        {/* <Text>{textInputValue}</Text> */}
        <TouchableOpacity style={styles.buttonStyle} onPress={createApiCall} >
          <Text style={{color:'#0000ff'}} onPress={Keyboard.dismiss}>add</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonStyle} onPress={gettodoApiCall}>
          <Text style={{color:'#0000ff'}}>see Tasks</Text>
        </TouchableOpacity> */}
        <View style={styles.resultStyle}>
                 <Text>Cooking</Text> 
        </View>
        <FlatList 
            data={result.responsepara}
            renderItem={({item})=>
            <Swipeout style={styles.btnstyle}>
              <View style={styles.resultStyle}>
                 <Text>{item.Tasks}</Text> 
              </View>
            </Swipeout>}
        />
      </View>
    </View>
  )
}

const styles  = StyleSheet.create ({
  container: {
    flex:1,
    padding:20
  },
  headerStyle: {
    backgroundColor:'#0000ff',
    padding:30,
    borderRadius:8,
    alignItems:'center'
  },
  headerText:{
    fontSize:31,
    color:'white'
  },
  inputStyle:{
    borderBottomColor:'grey',
    borderBottomWidth:1
  },
  buttonStyle:{
    alignItems:'center',
    margin:30
  },
  resultStyle:{
    borderRadius:8,
    borderColor:'grey',
    borderWidth:2,
    padding:10,
    alignItems:'center',
    margin:10
  },
  btnstyle:{
    backgroundColor:'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    borderRadius:8
  }
})

export default App;