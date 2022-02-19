
import React,{Component} from "react";
import { View,Text,TextInput,Button,StyleSheet } from "react-native";

class NewStyle extends Component {
    constructor()
    {
        super()
        this.state={
            name:"",
            passward:"",
            address:"",
        }
    }
    submit()
    {
        alert("function called")
    }
    render() {
        return (
            <View>
                <View>
                {/* <Text style={{fontSize:70,backgroundColor:'green'}}>
                    {this.state.name} 
                </Text>
                <TextInput placeholder="enter your name"
                onChangeText={(e)=>this.setState({name:e})}          //set value
                >
                
                </TextInput>                                                   
                <Button title="submit" onPress={()=>{alert(this.state.name)}} // get value
                />      */}

                <TextInput placeholder="Enter name" 
                 style={styles.textBox}
                 onChangeText={(text)=>{this.setState({name:text})}}>

                </TextInput>
                <TextInput placeholder="Enter passward" 
                 secureTextEntry={true}
                 style={styles.textBox}
                 onChangeText={(text)=>{this.setState({passward:text})}}>

                </TextInput>
                <TextInput placeholder="Enter address" 
                 style={styles.textBox}
                 onChangeText={(text)=>{this.setState({address:text})}}>

                </TextInput>
                <Button title="Submit" onPress={()=>{this.submit()}}/>

                </View>
            </View>
            

        )
    }
}

const styles = StyleSheet.create({
    textBox : {
        borderColor:'skyblue',
        borderWidth:2,
        padding:10,
        marginHorizontal:20,
        marginBottom:20,
    }
})



export default NewStyle;