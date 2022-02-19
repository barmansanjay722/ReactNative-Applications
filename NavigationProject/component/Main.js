import React, { useState } from "react";
import { View,TextInput,StyleSheet,Button,Text } from "react-native";

const MainScreen = ({route,navigation}) => {
  
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const result = (num1,num2)=>{
    let a =  parseInt(num1);  
    let b = parseInt(num2)
    let res = a + b;
    return res;
  }
  console.log(result(3,5));

  const isEnable = num1.length > 0 && num2.length >0;
  return (
    <View>
      
      <TextInput style={styles.boxstyle}
        placeholder="enter first number"
        keyboardType="numeric"
        onChangeText={setNum1}
        
      />
      <TextInput style={styles.boxstyle}
        placeholder="enter second number"
        keyboardType="numeric"
        onChangeText={setNum2}
      />
      <Button title="see Result" 
        onPress={()=>navigation.push('home',result(num1,num2))} disabled={!isEnable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  boxstyle:{
    borderWidth:2,
    borderColor:'black',
    margin:20
  }
})

export default MainScreen;
