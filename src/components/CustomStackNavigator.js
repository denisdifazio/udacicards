import React from "react";
import { StackNavigator } from "react-navigation";
import CustomTabNavigator from "./CustomTabNavigator";
import DeckView from "./DeckView";
import AddCardView from "./AddCardView";
import QuizView from "./QuizView";

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
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "navy"
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "navy"
      }
    }
  }
});

export default CustomStackNavigator;
