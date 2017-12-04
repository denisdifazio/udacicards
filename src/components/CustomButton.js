import React from "react";
import {
  Platform,
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const CustomButton = ({ title, ...props }) => {
  const formattedTitle =
    Platform.OS === "android" ? title.toUpperCase() : title;
  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle && props.buttonStyle]}
      {...props}
    >
      <Text style={styles.text}>{formattedTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {
        backgroundColor: "white"
      },
      android: {
        elevation: 4,
        borderRadius: 2,
        backgroundColor: "navy"
      }
    }),
    height: 50,
    width: 150,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    ...Platform.select({
      ios: {
        color: "navy"
      },
      android: {
        color: "white",
        fontWeight: "500"
      }
    })
  }
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default CustomButton;
