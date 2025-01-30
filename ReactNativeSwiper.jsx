import React, { Component } from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";

import { getItems } from '../../rnd/services/data';

/*const items = [
  { image: <Image source={require("../assets/simple1.png")} /> },
  { image: <Image source={require("../assets/simple2.png")} /> },
  { image: <Image source={require("../assets/simple1.png")} /> },
];
export function getItems() {
  return items;
}*/

export default class ReactNativeSwiper extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      items: [],
    };*/
    this.state = {
      items: getItems(),
    };
  }
  componentDidMount() {
    /*this.setState({
      items: [
        { title: 'Hello Swiper', css: styles.slide1 },
        { title: 'Beautiful', css: styles.slide2 },
        { title: 'And simple', css: styles.slide3 }
      ]
    })*/
    /*this.state = {
      items: getItems(),
    };*/
  }
  render() {
    return (
      <Swiper showsButtons>
        {this.state.items.map((item, key) => {
          return <View key={key}>{item.image}</View>;
        })}
      </Swiper>
    );
  }
}
