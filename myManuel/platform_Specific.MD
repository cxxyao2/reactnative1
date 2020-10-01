import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
text: {
color: "tomato",
...Platform.select({
ios: {
fontSize: 20,
fontFamily: "Avenir",
},
android: {
fontSize: 18,
fontFamily: "Roboto",
},
}),
},
});

export default AppText;

重点是 Platform 这个类。
还可以分为两个文件来配置不同平台的表现。文件命令传统如下
AppText.ios.js
AppText.android.js
AppText.js

react native 会根据平台来自动导入不同的文件。
