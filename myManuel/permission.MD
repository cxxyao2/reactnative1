import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { View,TextInput, Text,Switch } from "react-native";



import Screen from './app/components/Screen';

export default function App() {
  // a  bunch of permissions , e.g. camera contacts
  const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);

  const requestPermission = async() => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted) 
      alert("You need to enable permission");
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
