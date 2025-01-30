/*** Hello State 1. ***/
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloModal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 0, //Initial state.
    };
  }

  render() {
    return (
      <View>
        <Text>Initial: {this.state.initial}</Text>
      </View>
    );
  }
}
