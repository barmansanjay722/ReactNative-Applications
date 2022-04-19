import React from "react";
import { View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./src/Form";

import CounterApp from "./src/CounterApp";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Stack = createNativeStackNavigator();

const App = ()=> {
  
  return (
    <View>
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Form" component={Form}/>
          </Stack.Navigator>
          <CounterApp/>
        </NavigationContainer>
      </Provider>
    </View>
  )
}

export default App;