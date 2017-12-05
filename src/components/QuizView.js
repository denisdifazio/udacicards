import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from "react-native";
import CustomButton from "./CustomButton";
import { NavigationActions } from "react-navigation";

class QuizView extends Component {
  state = {
    showingAnswer: false,
    questionIndex: 0,
    correctAnswers: 0,
    size: new Animated.Value(0)
  };

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: "Quiz"
    };
  };

  submitAnswer = correct => {
    if (correct) {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }

    this.setState(prevState => ({
      questionIndex: prevState.questionIndex + 1
    }));

    const { size, questionIndex } = this.state;
    const { flashcards } = this.props.navigation.state.params.deck;

    if (questionIndex + 1 === flashcards.length) {
      Animated.timing(size, {
        toValue: 80,
        duration: 1000,
        easing: Easing.bounce
      }).start();
    }
  };

  restartQuiz = () => {
    this.setState({
      showingAnswer: false,
      questionIndex: 0,
      correctAnswers: 0,
      size: new Animated.Value(0)
    });
  };

  render() {
    const { name, flashcards } = this.props.navigation.state.params.deck;
    const card = flashcards[this.state.questionIndex];
    const { showingAnswer, questionIndex, correctAnswers } = this.state;

    return questionIndex < flashcards.length ? (
      <View style={styles.container}>
        <Text style={styles.questionIndex}>{`${questionIndex + 1}/${
          flashcards.length
        }`}</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {showingAnswer ? card.answer : card.question}
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({ showingAnswer: !showingAnswer })}
          >
            <Text style={{ color: "red" }}>
              {showingAnswer ? "Question" : "Answer"}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton title="Correct" onPress={() => this.submitAnswer(true)} />
        <CustomButton
          title="Incorrect"
          onPress={() => this.submitAnswer(false)}
        />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Score</Text>
          <Animated.Text
            style={{ fontSize: this.state.size, fontWeight: "bold" }}
          >
            {correctAnswers / flashcards.length * 100}%
          </Animated.Text>
        </View>

        <CustomButton title="Restart Quiz" onPress={() => this.restartQuiz()} />
        <CustomButton
          title="Back"
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())
          }
        />
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
  },
  scoreContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default QuizView;
