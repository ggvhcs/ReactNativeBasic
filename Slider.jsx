import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Slider = (props) => (
  <View style={StyleSheet.container}>
    <Image style={styles.image} source={props.uri}></Image>
  </View>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg"),
      ],
    };
  }
  render() {
    return (
      <Swiper autoplay height={240}>
        {this.state.items.map((item, i) => (
          <Slider uri={item} key={i} />
        ))}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width,
  },
});
