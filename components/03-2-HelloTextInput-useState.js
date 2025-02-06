import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HelloWorldFunction() {
  const [firstName, setFirstName] = useState("");
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
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
