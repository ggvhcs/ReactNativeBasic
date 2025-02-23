import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HelloTextInput() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Text>!Hello World...Text Inputs.</Text>
      <TextInput
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
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
});
