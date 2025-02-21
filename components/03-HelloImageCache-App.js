import { StyleSheet, View } from "react-native";
import React from "react";

import ImgCache from "./ImgCache";

export default function App() {
  return (
    <View style={styles.container}>
      <ImgCache imgUri="https://picsum.photos/200/200"/>
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
