
import React from "react";
import { View,Text,Button } from "react-native";

const HomeScreen = ({navigation,route}) => {
  
  let data = route.params;
  return (
    <View>
      <Text>Addition</Text>
      <Button title="Additon" 
        onPress={()=>navigation.push('main',{additon:"+"})}
      />
      <Text style={{fontSize:20}}>Result is...</Text>
      <Text style={{fontSize:20,marginTop:20}}>{data}</Text>
    </View>
  )
}

export default HomeScreen;



