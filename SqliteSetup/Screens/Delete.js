import React, { useState } from "react";
import { View,Text, Button,TextInput,StyleSheet, Alert } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";

var db = openDatabase({name:'SanjayData.db'});

const Delete = ({navigation})=>{
    
    let [inputUserId,setInputUserId] = useState('');

    let deleteUser = ({navigation}) =>{
        
        if(!inputUserId){
            alert('please fill User id');
            return;
        }

        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM demodataDear where sid=?',
                [inputUserId],
                (tx,results)=>{
                    console.log('delete Result:',results.rowsAffected);
                    if(results.rowsAffected>0){
                        Alert.alert('Delete Succesfully');
                    }
                    else {
                        Alert.alert('Delete Failed');
                    }
                }
            )
        })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Enter delete userId</Text>
            <TextInput 
                placeholder="enter id"
                keyboardType="numeric"
                onChangeText={
                    (inputUserId)=>setInputUserId(inputUserId)
                }
            />
            <View style={styles.buttonStyle}>
                <Button title="Delelte" onPress={deleteUser}/>
                <Button title="back to HomeScreen" color={'red'}  onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    headerStyle:{
        fontSize:21,
        color:'#ff0000',
        textAlign:'center'
    },
    buttonStyle:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})
export default Delete;