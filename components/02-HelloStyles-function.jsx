import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HelloStyles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!Hello World...</Text>
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
});
