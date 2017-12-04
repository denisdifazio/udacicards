import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

class QuizView extends Component {
  state = {
    questionIndex: 0
  };

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: "Quiz"
    };
  };
  render() {
    const { name, flashcards } = this.props.navigation.state.params.deck;
    const card = flashcards[this.state.questionIndex];
    return (
      <View style={styles.container}>
        <Text style={styles.questionIndex}>{`${this.state.questionIndex + 1}/${
          flashcards.length
        }`}</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{card.question}</Text>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Answer</Text>
          </TouchableOpacity>
        </View>
        <CustomButton title="Correct" />
        <CustomButton title="Incorrect" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  questionContainer: {
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  questionText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  questionIndex: {
    alignSelf: "flex-start",
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default QuizView;
