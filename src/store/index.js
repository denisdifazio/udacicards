import { createStore } from "redux";
import reducers from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { AsyncStorage } from "react-native";
import { DECKS_STORAGE_KEY } from "../utils/constants.js";

const config = {
  key: DECKS_STORAGE_KEY,
  storage: AsyncStorage
};

const reducer = persistReducer(config, reducers);

export default function configureStore() {
  let store = createStore(reducer);
  let persistor = persistStore(store);

  return { persistor, store };
}
