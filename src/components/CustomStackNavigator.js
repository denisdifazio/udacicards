import React from "react";
import { StackNavigator } from "react-navigation";
import CustomTabNavigator from "./CustomTabNavigator";
import DeckView from "./DeckView";

const CustomStackNavigator = StackNavigator({
  Home: {
    screen: CustomTabNavigator
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "navy"
      }
    }
  }
});

export default CustomStackNavigator;
