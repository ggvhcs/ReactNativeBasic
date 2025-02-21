import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HelloImagesRequire() {
  return (
    <View style={styles.container}>
      <Text>!Hola Images desde React Native...</Text>
      <Image source={require("./assets/sample1.jpg")} style={styles.image} />
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
});
