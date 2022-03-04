import React,{useEffect, useState} from "react";
import {Text,TextInput,StyleSheet,Button, Alert, TouchableOpacity, View } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";

var db = openDatabase({name:'SanjayData.db'});



const Home = ({route,navigation})=>{

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');

    // setup databse and create table
    useEffect(()=> {
    
        db.transaction(function(txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='demodataDear'",
                [],
                (txn,Selectresult)=> {
                    console.log('item:',Selectresult.rows.length);
                    
                    if(Selectresult.rows.length==0){
                        
                        txn.executeSql('DROP TABLE IF EXISTS demodataDear',
                         [],
                         (txn,dropRes)=>{console.log(dropRes)},
                            (error)=>{console.log(error)}
                        );
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS demodataDear(sid INTEGER PRIMARY KEY AUTOINCREMENT , firstname VARCHAR(100) , lastname VARCHAR(100) , email VARCHAR(100) , mobile VARCHAR(100))',
                            [],
                            (txn,createRes)=>{console.log(createRes)},
                            (createError)=>{console.log(createError)}
                        );
                    }
                },(Selecterror)=>{
                    console.log(Selecterror);
                }
            );
        });
        // Alert.alert('table succesfully created')
    },[]);

    // insert data
    const insertData =() =>{
        
            db.transaction(function(tx) {
                tx.executeSql(
                    'INSERT INTO demodataDear (firstname, lastname, email, mobile) VALUES(?,?,?,?)',
                    [firstname,lastname,email,mobile],
                    
                    (tx,res)=>{
                        console.log("Result ",res.rowsAffected);
                        if(res.rowsAffected >0){
                            console.log("success");
                            Alert.alert('Data inserted Successfully..')
                        }
                        else {
                            Alert.alert('Data insert Failed....')
                        }
                    },(error)=>{
                        console.log(error);
                    }
                );
            });
     
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerColer}>FirstName</Text>
            <TextInput style={styles.textstyle}
                placeholder="Enter firstname"
                onChangeText={
                    (firstname)=>setFirstName(firstname)
                }
                
            />
            <Text style={styles.headerColer}>LastName</Text>
            <TextInput style={styles.textstyle}
                placeholder="Enter lastname"
                onChangeText={
                    (lastname)=>setLastName(lastname)
                }
            />
            <Text style={styles.headerColer}>Email</Text>
            <TextInput style={styles.textstyle}
                keyboardType="email-address"
                placeholder="Enter email"
                onChangeText={
                    (email)=>setEmail(email)
                }
            />
            <Text style={styles.headerColer}>Mobile no.</Text>
            <TextInput style={styles.textstyle}
                keyboardType="numeric"
                placeholder="Enter mobile"
                onChangeText={
                    (mobile)=>setMobile(mobile)
                }
            />
            <TouchableOpacity
                style={styles.buttonStyle} onPress={insertData}>
                <Text style={{color:'white',fontSize:15}}>Save</Text>
            </TouchableOpacity>
            <Text style={styles.seeResult}>See Result..</Text>
            <View style={styles.geloactionViewStyle}>
                <Button title="Records.."
                    color={'#daa520'}
                    onPress={()=> navigation.navigate('ResultScreen')}
                />
                <Button
                    color={'#6495ed'}
                    title="My Location"
                    onPress={()=>navigation.navigate('GeolocationScreen')}
                />
            </View>
            <TouchableOpacity style={styles.camera} onPress={()=>navigation.navigate('CameraScreen')}>
                <Text style={{color:'white'}}>Take a Selfie</Text>
            </TouchableOpacity>
            <View style={styles.geloactionViewStyle}>
                <TouchableOpacity style={styles.camera} onPress={()=>navigation.navigate('AsyncScreen')}>
                    <Text style={{color:'white'}}>LocalStorage(Async)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.camera} onPress={()=>navigation.navigate('AnimationScreen')}> 
                    <Text style={{color:'white'}}>Animations</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:20
    },
    textstyle : {
      fontSize:18,
      borderBottomColor:'#d2691e',
      borderBottomWidth:1
    },
    headerColer:{
        color:'#008b8b'
    },
    seeResult:{
      textAlign:"left",
      marginTop:10,
      marginBottom:10,
      fontSize:18,
      color:'black'
    },
    buttonStyle:{
        backgroundColor:'#556b2f',
        padding:10,
        alignItems:'center',
        marginTop:20,
        borderRadius:8
    },
    camera:{
        backgroundColor:'#556b2f',
        padding:10,
        alignItems:'center',
        marginTop:20,
        borderRadius:8
    },
    geloactionViewStyle:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})


export default Home;