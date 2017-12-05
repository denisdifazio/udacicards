import React from "react";
import { StyleSheet, View } from "react-native";
import CustomStatusBar from "./src/components/CustomStatusBar";
import CustomStackNavigator from "./src/components/CustomStackNavigator";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { setLocalNotification } from "./src/utils/notifications";

const { persistor, store } = configureStore();

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <CustomStatusBar backgroundColor="navy" barStyle="light-content" />
            <CustomStackNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
