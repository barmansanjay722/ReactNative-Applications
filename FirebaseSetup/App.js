import React from "react";
import {View,Text} from 'react-native'
import * as firebaseobj from 'firebase';
import { firebaseConfig } from "./config";

firebaseobj.initializeApp(firebaseConfig);

const App = ()=> {
  return (
    <View>
      <Text>Hi Sanjay</Text>
    </View>
  )
}

export default App;