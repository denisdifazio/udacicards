export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

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
