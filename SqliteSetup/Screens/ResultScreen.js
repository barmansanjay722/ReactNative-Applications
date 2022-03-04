import React, { useEffect, useState } from "react";
import { StyleSheet, Button,FlatList, View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { openDatabase } from "react-native-sqlite-storage";

var db = openDatabase({name:'SanjayData.db'});

const ResultScreen = ({navigation})=>{

    const [items,setlistitem] = useState([]);
    const [empty, setEmpty] = useState([]);

    useEffect(()=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM demodataDear',
                [],
                (tx,results)=>{
                    // console.log('items from select',results.rows.length);
                    var temp = [];

                    for(let i=0;i<results.rows.length;i++){
                        temp.push(results.rows.item(i));
                        // try{
                        //     console.log(results.rows.item(i));
                        // }
                        // catch(e){
                        //     console.log(e);
                        // }

                    }
                    setlistitem(temp);

                    if(results.rows.length >= 1){
                        setEmpty(false);
                    }
                    else {
                        setEmpty(true);
                    }
                },(error)=>{
                    console.log(error);
                }
            );
        });
    },[]);

    const listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#000'
            }}
          />
        );
    };

    const emptyMSG = (status) => {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
     
            <Text style={{ fontSize: 25, textAlign: 'center' }}>
              No Record Inserted Database is Empty...
              </Text>
     
          </View>
        );
    }

    return (

        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                {empty? emptyMSG(empty) :
                    <FlatList
                     data={items}
                     ItemSeparatorComponent={listViewItemSeparator}
                     keyExtractor={(item,index) =>index.toString()}
                     renderItem={({item})=>
                            <View style={styles.container}>
                                <View key={item.sid} style={{padding:20}}>
                                    <Text>Id: {item.sid}</Text>
                                    <Text>FirstName: {item.firstname}</Text>
                                    <Text>LastName: {item.lastname}</Text>
                                    <Text>Email: {item.email}</Text>
                                    <Text>Mobile: {item.mobile}</Text>
                                </View>
                                <View style={styles.butonStyle}>
                                    <View>
                                        <Button title="update" 
                                            color={'#556b2f'}
                                            onPress={()=>navigation.navigate('UpdateScreen',{
                                                itemId:item.sid,
                                                firstname:item.firstname,

                                            })}
                                        />
                                    </View>
                                    <View>
                                        <Button title="delete" 
                                            color={'#8b0000'}
                                            onPress={()=> navigation.navigate('DeleteScreen',{
                                                itemId:item.sid
                                            })}
                                        />
                                    </View>
                                </View>
                            </View> 
                        }
                    />
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        padding:20,
        flex:1,
    },
    butonStyle :{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})

export default ResultScreen;
