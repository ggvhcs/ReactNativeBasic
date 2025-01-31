import React from "react";
import { Text, View } from "react-native";

export default function HelloWorldFunction() {
  console.log("App executed");
  return (
    <View>
      <Text>!Hello World...Function Components.</Text>
    </View>
  );
}
