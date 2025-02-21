import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function HelloImagePicker() {
  const [selectedImage, setselectedImage] = useState(null);

  let loadImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("!The permission to camera access are required.");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    //change state.
    setselectedImage({ localUri: pickerResult.uri });
  };
  //
  return (
    <View style={styles.container}>
      <Text>!Hola desde React Native...</Text>
      <Image
        source={{
          uri:
            selectedImage !== null
              ? selectedImage.localUri
              : "https://picsum.photos/200/200",
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={loadImagePickerAsync}>
        <Text style={styles.buttonText}>!Press me.</Text>
      </TouchableOpacity>
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30 },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
