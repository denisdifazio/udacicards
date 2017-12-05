import { ADD_DECK, ADD_CARD } from "../actions/types";

const initialState = {
  decks: []
};

function entries(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        decks: [...state.decks, action.deck]
      };
    case ADD_CARD: {
      return {
        ...state,
        decks: state.decks.map(deck => {
          if (deck.name === action.deck) {
            deck.flashcards.push(action.card);
          }

          return deck;
        })
      };
    }

    default:
      return state;
  }
}

export default entries;
