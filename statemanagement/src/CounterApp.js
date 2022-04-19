import React from "react";
import { View, Text,Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addition, subtraction } from "./store/action";

const CounterApp = ({navigation })=> {
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <View style={{margin:21}}>
            <Button title="add" onPress={()=>dispatch(addition())}></Button>
            <Text style={{margin:20,textAlign:'center'}}>{data}</Text>
            <Button title="del" onPress={()=>dispatch(subtraction())}></Button>
            <Text>Go to Form page</Text>
            <Button title="Form" onPress={()=>navigation.navigate('Form')}></Button>
        </View>
    )
}

export default CounterApp;