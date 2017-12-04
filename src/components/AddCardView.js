import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Label,
  Icon
} from "native-base";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { NavigationActions } from "react-navigation";

class CardView extends Component {
  state = { question: "", answer: "", error: false };

  static navigationOptions = () => {
    return {
      title: "Add Card"
    };
  };

  submit = () => {
    const { question, answer } = this.state;
    const error = question.length === 0 || answer.length === 0;

    this.setState({
      error
    });

    if (!error) {
      const card = {
        question,
        answer
      };
      this.props.dispatch(
        addCard(this.props.navigation.state.params.deckName, card)
      );
      this.setState({ question: "", answer: "" });
      this.goBack();
    }
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { error } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item error={error}>
              <Input
                placeholder="Question"
                value={this.state.question}
                onChangeText={question => this.setState({ question })}
              />
              {error && <Icon name="close-circle" />}
            </Item>
            <Item error={error}>
              <Input
                placeholder="Answer"
                value={this.state.answer}
                onChangeText={answer => this.setState({ answer })}
              />
              {error && <Icon name="close-circle" />}
            </Item>
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

export default connect()(CardView);
