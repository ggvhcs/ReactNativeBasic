/*** Hello World Class. ***/
import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class HelloWorldClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>!Hello World...Class Components.</Text>
      </View>
    );
  }
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
