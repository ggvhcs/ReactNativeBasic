import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const functionToCall = () => {
  console.log("Function Called.");
};

export default function HelloButtonAlertQuestion() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!Hola desde React Native Button...</Text>
      <Button
        title="!press me."
        onPress={() => {
          functionToCall();
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
});
