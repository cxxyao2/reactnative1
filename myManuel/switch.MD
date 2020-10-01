import React, { useState } from "react";
import { View,TextInput, Text,Switch } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";

import Screen from './app/components/Screen';

import ListItem from './app/components/ListItem';
import Icon from './app/components/Icon';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from "./app/components/AppTextInput";



export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
  <Screen>
   <Switch value={isNew} onValueChange={newValue =>setIsNew(newValue)}/>
  </Screen>
  用native控件就可以了。 需要处理value，onValueChange