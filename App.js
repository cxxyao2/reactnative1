import React, {useState} from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

import { View ,StyleSheet, Text} from "react-native";

import { NavigationContainer } from "@react-navigation/native";


import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OffNotice from "./app/components/OffNotice";
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";


export default function App() {
  const [user, setUser ]= useState();
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  }
    /*   useEffect(()=>{
    restoreToken();
  },[]); */

    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <OffNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
} 
//  <AppNavigator />
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
 





