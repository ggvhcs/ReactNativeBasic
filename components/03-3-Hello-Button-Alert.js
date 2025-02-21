import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function HelloButtonAlert() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!Hola desde React Native Button...</Text>
      <Button
        title="!press me."
        style={styles.button}
        onPress={() => {
          Alert.alert("!button pressed.");
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
  button: { color: "#000" },
});
