import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from "expo-constants";

import AppText from '../../dumped/AppText/AppText.ios';
import colors from "../config/colors";

function OfflineNotice(props) {
return (<View style={styles.container}>
  <AppText style={styles.text}>No Internet Connection</AppText>
</View>);
}

const styles = StyleSheet.create({
container: {
  alignItems:"center",
   backgroundColor: colors.primary,
   top: Constants.statusBarHeight,
   height: 50,
   justifyContent:"center",
   width: "100",
   position: "absolute",
   zIndex:1,
},
text: {
  color: colors.white,
}
});

export default OfflineNotice;