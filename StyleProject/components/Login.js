
import React from "react";
import { View,Text,StyleSheet, Button, TextInput,TouchableOpacity,ScrollView,Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
const Login=()=>{
    
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.heading}>
                    FACI
                    <Text style={styles.innerText}>O</Text>
                </Text>
            </View>
            <View style={styles.searchSection}>
                <Icon name="email" style={styles.searchIcon} />
                <TextInput 
                    style={{width:'300%'}}
                    maxLength={10}
                    placeholder="userName"
                />
            </View>
            <View style={styles.searchSection}>
                <Icon name="lock" style={styles.searchIcon} size={20} />
                <TextInput 
                    style={{width:'300%'}}
                    maxLength={10}
                    secureTextEntry={true} 
                    placeholder="passward"
                />
            </View>
            <View style={styles.textSection}>
                <Icon name="rowing" style={styles.searchIcon} />
                <Text style={[styles.textDecor,{marginRight:20}]}>Remember me</Text>
                <Icon name="android" style={styles.searchIcon} size={20}/>
                <Text style={[styles.innerText,styles.textDecor]} onPress={()=>{alert('you forgot your passward')}}>
                    Forgot passward?
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{alert('hello there! you are logged in');}}>
                    <Text style={styles.btnText}
                    >LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={[{flexDirection:"row",marginLeft:20}]}>
                <Text style={styles.textStyle}>
                    Don't have an account? 
                </Text>
                <Text style={[styles.innerText,{marginLeft:10},styles.textStyle]} onPress={()=>{alert('Signed Up');}}>
                        Signup here
                </Text>
                
            </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        color : 'black',
        textAlign:"center",
        marginTop:150,
    },
    innerText:{
        color:"#52e3b7",
    },
    textStyle:{
        marginTop:2,
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:4
    },
    button:{
        alignItems:"center",
        backgroundColor:"#52e3b7",
        padding:15,
        color:"#f8f8ff",
        borderRadius:8,
    },
    btnText:{
        fontSize:17,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    },
    searchSection:{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth:2,
        borderBottomColor:"grey",
        height: 40,
    },
    textSection:{
        flex:1,
        flexDirection:"row",
        height:40,
    },
    searchIcon:{
        padding:10,
    },
    textDecor:{
        marginTop:15,
        marginBottom:10
    }
})


export default Login;