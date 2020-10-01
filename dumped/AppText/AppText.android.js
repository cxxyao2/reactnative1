import React from "react";
import { Text, View, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});

export default AppText;
