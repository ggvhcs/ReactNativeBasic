/*** Hello State 2. ***/
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloState2 extends Component {
  state = {
    status: "loading...", //Initial state.
  };
  constructor() {
    super();
    
    setTimeout(() => {
      this.setState({ status: "done..." });
    }, 1000);
  }

  render() {
    //const { status } = this.state;
    return (
      <View>
        <Text>{this.state.status}</Text>
      </View>
    );
  }
}
