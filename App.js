import React from "react";

import { View ,StyleSheet} from "react-native";

import { NavigationContainer } from "@react-navigation/native";


import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import  LottieView  from "lottie-react-native";

  const onDone =() => {console.log("i am animations")};
  
  export default function App() {
  return (
     <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer> 
   /*  <View>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={onDone}
        style={styles.animation}
        source={require("./app/assets/animations/done.json")}
      />
    </View> */
  );
}   

const styles = StyleSheet.create({
  animation: {
   width: 100,
  },
}); 



