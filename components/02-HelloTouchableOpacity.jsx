import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function HelloTouchableOpacity() {
  return (
    <View style={styles.container}>
      <Text>!Hola desde React Native...</Text>
      <Image source={{ uri: 'https://picsum.photos/200/200' }} style={styles.image} />
      <TouchableOpacity style={styles.button}
        onPress={
          () => {
            Alert.alert("!hello TouchableOpacity.")
          }
        }>
        <Text style={styles.buttonText}>!Press me.</Text>
      </TouchableOpacity>
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