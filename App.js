import React from "react";
import { StyleSheet, View } from "react-native";
import CustomStatusBar from "./src/components/CustomStatusBar";
import CustomStackNavigator from "./src/components/CustomStackNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

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

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor="navy" barStyle="light-content" />
          <CustomStackNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
