/*** Hello Props. ***/
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloProps extends Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>;
      </View>
    );
  }
}
