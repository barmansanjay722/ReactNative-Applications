
import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';



const App= () => {
  const [page,setPage] = useState('');
  const Homepage = () => setPage('Home');
  const Detailpage = () => setPage('Detail');
  const Aboutpage = () => setPage('About');

  const [name,setName] = useState('test');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleName(newName) {
    setName(newName);
  }

  function handlelastname(newlast) {
    setLastName(newlast);
  }

  function handleEmail(newEamil){
    setEmail(newEamil);
  }

  // const page = 'About'

  return(
    <View style={styles.container}>
      <View >
        <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'green'}]} onPress={Homepage} >
          <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'#5f9ea0'}]} onPress={Detailpage} >
          <Text style={styles.textStyle}>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchableStyle,{backgroundColor:'#b22222'}]} onPress={Aboutpage}>
          <Text style={styles.textStyle}>About</Text>
        </TouchableOpacity>
      </View>

      {(()=> {
        switch (page) {
          case 'Home':
            return(
              <Home val={name} onChange={handleName }></Home>
            )
          case 'About':
            return(
              About()
            )
          case 'Detail':
            return(
              Detail()
            )
        
          default:
            return(
              <Home val={name} onChange={handleName }></Home>
            )
        }
      })()}

      
    </View>
    
  );
  
}

const Home =({val,onChange})=> {
  return(
    <View style={styles.viewStyle}>
      <Text style={[styles.dataStyle,{textAlign:'center'}]}>Home</Text>
      <Text style={{margin:7}}>First name</Text>
      <TextInput placeholder= 'name' style={styles.textinputborder}
      //invoke callback with new value
        onChangeText={(e)=>onChange(e.target.value)}
        value={val}
      ></TextInput>
     
      <Text style={{margin:7}}>Last name</Text>
      <TextInput placeholder= 'surname' style={styles.textinputborder}
        // onChangeText={setLastName}
        // value={lastname}
      ></TextInput>
      <Text style={{margin:7}}>Email</Text>
      <TextInput placeholder= 'email' style={styles.textinputborder}
      //  onChangeText={setEmail}
      //  value={email}
      ></TextInput>
      <View style={{padding:7}} >
        <Button title='Save'  />
      </View> 
      
    </View>
  )
}

const About = ()=> {
  return(
    <View style={styles.viewStyle}>
      <Text style={[styles.dataStyle,{textAlign:'center'}]}>About</Text>
      {/* <Text>{name}</Text>
      <Text>{lastname}</Text>
      <Text>{email}</Text> */}
    </View>
  )
}

const Detail =()=> {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.dataStyle}>Hello from Detail page HAHAHA</Text>
    </View>
  )
}




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
  }
});

export default App;
