import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import React from "react";

export default function ImgCache(props) {
  return (
    <View style={styles.container}>
      <Image tint="light" style={styles.image} uri={props.imgUri}/>
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
  image: { height: 500, width: 300, borderRadius: 10 },
});
