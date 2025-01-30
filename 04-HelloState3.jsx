/*** Hello State 3. ***/
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloState3 extends Component {
  constructor() {
    super();
    this.state = { name: "World" }; //Initial state.
  }

  render() {
    return (
      <View>
        <Text>Hello, {this.state.name}</Text>
      </View>
    );
  }
}
