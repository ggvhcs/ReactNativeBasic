/*** Hello Modal 1. ***/
import React, { Component } from "react";
import { Modal, View, Text } from "react-native";

export default class HelloModal1 extends Component {
  constructor() {
    super();
    this.state = {
      visibility: false,
    };
  }

  setModalVisible(enable) {
    this.setState({
      visibility: enable,
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.visibility}
        ><Text>I am a Modal.</Text></Modal>
      </View>
    );
  }
}
