import React, { Component } from "react";
import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default class OnBoardingScreen extends Component {
  render() {
    return (
      <View>
        <Onboarding
          pages={[
            {
              backgroundColor: "#fff",
              image: <Image source={require("../assets/simple1.png")} />,
              title: "Onboarding Screen 1",
              subtitle: "Example with React Native Onboarding Swiper",
            },
            {
              backgroundColor: "#fff",
              image: <Image source={require("../assets/simple2.png")} />,
              title: "Onboarding Screen 1",
              subtitle: "Example with React Native Onboarding Swiper",
            },
          ]}
        />
      </View>
    );
  }
}
