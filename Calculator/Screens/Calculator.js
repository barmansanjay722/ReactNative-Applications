import React from "react";
import { View,TouchableOpacity,Text,StyleSheet,Image} from "react-native";


const Calculator =()=>{
    return (
      <View style={{flex:1}}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.textDecoration}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textDecoration}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create ({
  containter:{
    margin : 10
  },
  buttonstyle:{
    margin:10
  },
  textDecoration:{
    fontSize:40,
    color:'red'
  }
});


export default Calculator;