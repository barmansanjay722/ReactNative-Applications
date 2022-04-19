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


  const home=()=> {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Button  title='add' onPress={setCount = setCount + 1}></Button>
            <Text>{count}</Text>
            <Button title='del' onPress={setCount = setCount -1}/>  
        </View>
    )
  }