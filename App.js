import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

//import HelloWorldClass from "./components/01-HelloWorld-class";
//import HelloWorldFunction from "./components/01-HelloWorld-funtion";
//import HelloStyles from "./components/02-HelloStyles-function";
//import HelloButton1 from "./components/02-HelloButton1";
import HelloButton2 from "./components/02-HelloButton2";
//import HelloImages from "./components/02-HelloImages";
//import HelloProps from "./components/02-HelloProps";
//import HelloModal2 from "./components/03-HelloModal2";
//import HelloState4 from "./components/04-HelloState4";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<HelloWorldClass />
        <HelloWorldFunction/>
        <HelloStyles/>
        <HelloImages/>
        <HelloButton1 />*/}
        <HelloButton2 />
        {/*<HelloProps name='ange' />
        <HelloProps name='cory' />
        <HelloModal1 />
        <HelloModal2 />
        <HelloState1 />
        <HelloState2 />
        <HelloState3 />
        <HelloState4 />*/}

        <StatusBar style="auto" />
      </View>
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
});
