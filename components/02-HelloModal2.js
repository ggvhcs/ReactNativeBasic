/*** Hello Modal 2. ***/
import React, { Component } from "react";
import { Modal, View, Button, Text } from "react-native";

export default class HelloModal1 extends Component {
  constructor() {
    super();
    this.state = {
      visibility: false,
    };
  }

  _handleButtonPress = () => {
    this.setModalVisible(true);
  };

  setModalVisible(enable) {
    this.setState({
      visibility: enable,
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <Text>I am a Modal.</Text>
          <Button
            title="close"
            onPress={this.setModalVisible.bind(this, false)}
          />
        </Modal>
      </View>
    );
  }
}
