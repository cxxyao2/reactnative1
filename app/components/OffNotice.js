import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import AppText from "../components/AppText";
import colors from "../config/colors";

function OffNotice(props) {
    const netInfo = useNetInfo();
    console.log(netInfo);

    if (netInfo.type !== "unknown"  && netInfo.isInternetReachable === false) 
      return (
        <View style={styles.container}>
          <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
      );
      
    return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OffNotice;