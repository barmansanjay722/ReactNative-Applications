import analytics from '@react-native-firebase/analytics';
import { NavigationContainer } from '@react-navigation/native';

const Hello = ()=> {
    const routeNameRef = React.useRef;
    const navigationRef = React.useRef;

    return (
        <NavigationContainer>
            ref = {navigationRef}
            onReady = {()=> {
            }}
        </NavigationContainer>
    )
}