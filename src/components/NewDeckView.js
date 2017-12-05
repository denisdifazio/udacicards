import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Icon
} from "native-base";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import CustomButton from "./CustomButton";

class NewDeckView extends Component {
  state = { text: "", error: false };

  static navigationOptions = {
    title: "New Deck"
  };

  submit = () => {
    const filteredDecks = this.props.decks.filter(
      deck => deck.name === this.state.text
    );

    const error = this.state.text.length === 0 || filteredDecks.length > 0;

    this.setState({
      error
    });

    if (!error) {
      this.props.submitDeck(this.state.text);
      this.setState({ text: "" });
      this.toHome();
    }
  };

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: "Decks"
      })
    );
  };

  render() {
    const { error } = this.state;

    return (
      <Container>
        <Content>
          <Label style={{ margin: 15, marginTop: 15 }}>
            What is the title of your new deck?
          </Label>
          <Form>
            <Item error={error}>
              <Input
                placeholder="New Deck"
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                onFocus={() => this.setState({ error: false })}
              />
              {error && <Icon name="close-circle" />}
            </Item>
            {error && (
              <Label style={{ margin: 15, marginTop: 5, color: "red" }}>
                {this.state.text.length === 0
                  ? "This field is required"
                  : "A deck with this name already exists"}
              </Label>
            )}
          </Form>
          <CustomButton
            buttonStyle={{ alignSelf: "center" }}
            onPress={() => this.submit()}
            title="Submit"
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  submitDeck: deck => dispatch(addDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);
