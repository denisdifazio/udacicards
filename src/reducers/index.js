import { ADD_DECK } from "../actions";

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
    default:
      return state;
  }
}

export default entries;
