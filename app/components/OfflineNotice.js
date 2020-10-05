import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "../../dumped/AppText/AppText.ios";
import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  console.log(netInfo);

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    height: 50,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
