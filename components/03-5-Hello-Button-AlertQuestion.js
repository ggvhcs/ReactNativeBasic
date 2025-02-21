import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function HelloButtonAlertQuestion() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!Hola desde React Native Button...</Text>
      <Button
        title="!press me."
        onPress={() => {
          Alert.alert("!warning.", "!are you sure of this action ?.", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ]);
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
