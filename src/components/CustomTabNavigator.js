import React from "react";
import { TabNavigator } from "react-navigation";
import { Platform } from "react-native";
import NewDeckView from "./NewDeckView";
import DecksView from "./DecksView";

const CustomTabNavigator = TabNavigator(
  {
    Decks: {
      screen: DecksView
    },
    NewDeck: {
      screen: NewDeckView
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "navy" : "white",
      style: {
        backgroundColor: Platform.OS === "ios" ? "white" : "navy"
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);

export default CustomTabNavigator;
