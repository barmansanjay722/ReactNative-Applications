import React from "react";
import { View,Text,Button } from "react-native";


const Products = (props)=>{
  return (
    <View >
      <Text>Product Screen</Text>
      <Button title="click me " onPress={()=>{alert("good morning")}}/>
    </View>
  )
}


export default Products;