import React, { useState } from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsynStrogateScreen = () => {

    const [textInputValue,setTextInputValue] = useState('');
    const [value, setValue]  = useState('');
    
    const SaveData = ()=> {
        if(textInputValue){
            AsyncStorage.setItem('any_key_here', textInputValue);
            setTextInputValue('');
            alert('Data Saved');
        }else {
            alert('please fill Data');
        }
    };

    const LoadData = ()=> {
        AsyncStorage.getItem('any_key_here').then((data)=> {
            setValue(data);
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.titleText}>
                    AsyncStroge in React native
                </Text>
                <TextInput 
                    placeholder="Enter some text here"
                    value={textInputValue}
                    onChangeText={
                        (data)=>setTextInputValue(data)
                    }
                    underlineColorAndroid='transparent'
                    style={styles.textInputStyle}
                />
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.tochableStyle} onPress={SaveData}>
                        <Text style={{color:'white'}}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.tochableStyle} onPress={LoadData}>
                        <Text style={{color:'white'}}>Get value</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.textStyle}>
                        {value}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    titleText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:20
    },
    textInputStyle:{
        textAlign:'center',
        height:40,
        width:'100%',
        borderWidth:1,
        borderColor:'blue',
        borderRadius:8
    },
    tochableStyle:{
        backgroundColor:'green',
        padding:10,
        marginTop:20,
        alignItems:'center',
        width:'77%',
        borderRadius:8
    },
    textStyle:{
        fontSize:20,
        marginTop:20
    }
})

export default AsynStrogateScreen;