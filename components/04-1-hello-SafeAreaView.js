import React from "react";
import { StyleSheet,Text, View } from "react-native";

export default class HelloSafeAreaView extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>!Hello World SafeAreaView...</Text>
      </SafeAreaView>
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
