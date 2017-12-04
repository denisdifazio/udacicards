import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("DeckView", {
              deck: {
                name: this.props.name,
                flashcards: this.props.flashcards
              }
            })
          }
        >
          <Text style={styles.titleText}>{this.props.name}</Text>
          <Text>{`${this.props.flashcards.length} cards`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

Deck.propTypes = {
  name: PropTypes.string.isRequired,
  flashcards: PropTypes.array.isRequired
};

export default withNavigation(Deck);
