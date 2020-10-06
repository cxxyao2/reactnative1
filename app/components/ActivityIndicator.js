import React from 'react';
import { View,StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";


function ActivityIndicator({ visible = false }) {
if (!visible) return null;


return (
  <View style={styles.container}>
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.5,
  }
});
export default ActivityIndicator;