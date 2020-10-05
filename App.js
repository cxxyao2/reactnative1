import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";

import { View ,StyleSheet, Text} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OffNotice from "./app/components/OffNotice";




export default function App() {
  return (
    <>
      <OffNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
} 
    /*  const demo = async () => {
      try {
             <OfflineNotice />
        await AsyncStorage.setItem("person", JSON.stringify({ id: 5, name: "Jeffry"}));
        const value = await AsyncStorage.getItem("person");
        const person = JSON.parse(value);
        console.log(person);
      } catch (e) {
        console.log(e);
      }
    }
    demo();
    return null; */
 





