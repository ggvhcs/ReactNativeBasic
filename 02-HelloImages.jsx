import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HelloImages() {
  return (
    <View style={styles.container}>
      <Text>!Hola Images desde React Native...</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.image}
      />
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
