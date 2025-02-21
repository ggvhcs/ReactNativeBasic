import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function HelloSharing() {

  const [selectedImage, setselectedImage] = useState(null);

  let loadImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      Alert.alert("!The permission to camera access are required.");
      return;
    }
    //
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) {
      return;
    }
    //change state.
    setselectedImage({ localUri: pickerResult.uri });
  }
  //
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing API, is not available.");
      return;
    };
    //
    await Sharing.shareAsync(selectedImage.localUri);
  }
  //
  return (
    <View style={styles.container}>
      <Text>!Hola desde React Native...</Text>
      <TouchableOpacity style={styles.button}
        onPress={
          loadImagePickerAsync
        }
      >
        <Image
          source={{
            uri: selectedImage !== null
              ?
              selectedImage.localUri
              :
              'https://picsum.photos/200/200'
          }}
          style={styles.image} />
      </TouchableOpacity>
      { selectedImage ? (
        <TouchableOpacity style={styles.button}
          onPress={
            //()=>{console.log("!button share it was pressed.")}
            openShareDialogAsync
          }
        >
          <Text style={styles.buttonText}>!Share it.</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )
      }
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 30 },
  //image: { height: 200, width: 200, borderRadius: 100, resizeMode: 'contain' },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
  },
});