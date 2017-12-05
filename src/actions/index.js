import { ADD_DECK, ADD_CARD } from "./types";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck: {
      name: deck,
      flashcards: []
    }
  };
}

export function addCard(deckName, card) {
  return {
    type: ADD_CARD,
    deck: deckName,
    card
  };
}
