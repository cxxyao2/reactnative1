import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
return (
<ImageBackground
blurRadius = {10}
style={{styles.background}}
source={require("../assets/background.jpg")} ></ImageBackground>
);
}

const styles = StyleSheet.create({
background: {
flex: 1,
},
});

export default WelcomeScreen;

blurRadius 背景虚化
