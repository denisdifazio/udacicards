import { AsyncStorage } from "react-native";
import { DECKS_STORAGE_KEY } from "./constants.js";

export const submitDeck = (deck, entry = []) => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck]: entry
    })
  );
};
