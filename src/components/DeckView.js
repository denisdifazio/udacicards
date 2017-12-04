import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: deck.name
    };
  };
  render() {
    const { name, flashcards } = this.props.navigation.state.params.deck;
    return (
      <View style={styles.container}>
        <View style={styles.deckInformationContainer}>
          <Text style={styles.deckNameText}>{name}</Text>
          <Text>{`${flashcards.length} cards`}</Text>
        </View>

        <CustomButton
          title="Add Card"
          onPress={() =>
            this.props.navigation.navigate("AddCardView", {
              deckName: name
            })
          }
        />

        <CustomButton
          title="Start Quiz"
          onPress={() =>
            this.props.navigation.navigate("QuizView", {
              deck: this.props.navigation.state.params.deck
            })
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
  deckInformationContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  deckNameText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const mapStateToProps = (state, ownProps) => ({
  decks: state.decks
});

export default connect(mapStateToProps)(DeckView);
