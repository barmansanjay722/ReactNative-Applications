import React,{useRef, useState,useEffect} from "react";
import { View,Text,TouchableOpacity,StyleSheet,PermissionsAndroid } from "react-native";
import { RNCamera } from "react-native-camera";

// run time permission for location access in android
export async function request_location_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ReactNativeCode Location Permission',
        message: 'ReactNativeCode App needs access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Location Permission Granted.');
    } else {
      Alert.alert('Location Permission Not Granted');
    }
  } catch (err) {
    console.warn(err);
  }
}

const CameraAccess =(props)=> {

    let cameraRef = useRef(null);

    const [camType,setCam] = useState(RNCamera.Constants.Type.back);
    const [flash,setFlash] = useState(RNCamera.Constants.FlashMode.off);

    //  run time permission componentDidmount
    useEffect( async() => {
        await request_location_runtime_permission();
    }, [])
    

    const takePicture = async () => {
        if (cameraRef) {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          console.log(data.uri);
          props.navigation.navigate("GalleryScreen",{uri:data.uri})
        }
    };

    const flipCamera = ()=> {
        if(camType === RNCamera.Constants.Type.back){
            setCam(RNCamera.Constants.Type.front)
        }else {
            setCam(RNCamera.Constants.Type.back)
        }
    }

    const toggleFlash = ()=> {
        if(flash === RNCamera.Constants.FlashMode.off){
            setFlash(RNCamera.Constants.FlashMode.on)
        }else {
            setFlash(RNCamera.Constants.FlashMode.off)
        }
    }

      return (
        <View style={styles.container}>
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={camType}
            flashMode={flash}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={toggleFlash} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> flash </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={flipCamera} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> Flip </Text>
                </TouchableOpacity>
            </View>
          </RNCamera>
        </View>
        
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default CameraAccess;