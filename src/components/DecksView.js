import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Deck from "./Deck";

class DecksView extends Component {
  keyExtractor = (item, index) => item.name;

  renderDeck = ({ item }) => {
    return <Deck {...item} />;
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderDeck}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(DecksView);
