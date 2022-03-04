import React,{useState} from "react";
import { View,Text,SafeAreaView, TextInput,StyleSheet, TouchableOpacity, Alert, Button } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";

var db = openDatabase({name:'SanjayData.db'});

const Update = ({route,navigation})=>{

    let [inputUserId,setInputUserId] = useState('');
    let [firstname, setFirstName] = useState('');
    let [lastname, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setMobile] = useState('');


    // let searchUser = ()=>{
    //     console.log(inputUserId);
    //     db.transaction((tx)=>{
    //         tx.executeSql(
    //             'SELECT * FROM demodataDear where sid=?',
    //             [inputUserId],
    //             // console.log('data base query occured'),
    //             (tx,results)=>{
    //                 var len = results.rows.length;
    //                 if(len>0){
    //                     let res = results.rows.item(0);
    //                     // console.log('database:',res);
    //                 }
    //                 else {
    //                     alert('No user found');
    //                     updateAllStates('', '', '','');
    //                   }
    //             }
    //         )
    //     })
    // };



    let UpdateUser = () => {
        
        if(!inputUserId){
            alert('please fill User id');
            return;
        }

        db.transaction((tx)=> {
            tx.executeSql(
                'UPDATE demodataDear set firstname=?, lastname=?, email=?, mobile=? where sid=?',
                [firstname,lastname,email,mobile,inputUserId],
                (tx,results) => {
                    console.log('Update Result:',results.rowsAffected);
                    if(results.rowsAffected >0){
                        Alert.alert('Update Sucessfully');
                    }
                    else {
                        Alert.alert('Update failed');
                    }
                }
            )
        })
    }

    let serachUser = () =>{

    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heraderStyle}>Edit or Update your Record</Text>
                <Text style={styles.textStyle}>UserId</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter User Id"
                    keyboardType="numeric"
                    onChangeText={
                        (inputUserId)=>setInputUserId(inputUserId)
                    }
                />

                <Text style={styles.textStyle}>FirstName</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Update first Name"
                    onChangeText={
                        (firstname)=>setFirstName(firstname)
                    }
                />
                <Text style={styles.textStyle}>LastName</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Update last Name"
                    onChangeText={
                        (lastname)=>setLastName(lastname)
                    }
                />
                <Text style={styles.textStyle}>Email</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Update email"
                    onChangeText={
                        (email)=>setEmail(email)
                    }
                />
                <Text style={styles.textStyle}>Mobile</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Update mobile"
                    keyboardType="numeric"
                    onChangeText={
                        (mobile)=>setMobile(mobile)
                    }
                />
                <TouchableOpacity style={styles.touchable} onPress={UpdateUser}>
                    <Text style={{color:'white'}}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    textStyle:{
        fontSize:15,
        color:'#000080',
        marginTop:10
    },
    heraderStyle:{
        textAlign:'center',
        fontSize:20,
        color:'#006400',
    },
    inputStyle:{
        borderBottomColor:'#c71585',
        borderBottomWidth:1
    },
    touchable:{
        backgroundColor:'#191970',
        padding:10,
        marginTop:20,
        width:150,
        alignItems:'center'
    },
    serachButon:{
        marginTop:50
    }
})

export default Update;