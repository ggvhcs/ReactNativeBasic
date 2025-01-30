/*** Hello State 4. ***/
import React, { useState } from "react";
import { Text } from "react-native";

const HelloState4 = () => {
  const [name, setName] = useState("World!"); //Initial state.
  return <Text>Hello, {name}</Text>;
};

export default HelloState4;
