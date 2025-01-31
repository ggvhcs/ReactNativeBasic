import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function HelloButton1() {
  return (
    <View style={styles.container}>
      <Text>!Hola desde React Native...</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.image}
      />
      <Button
        title="!press me."
        style={styles.button}
        onPress={() => {
          console.log("!button pressed.");
        }}
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
  button: { color: "#000" },
});
