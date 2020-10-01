parent 控件与 child 控件如何交换信息？ 方法之一如下
parent控件是 app.js
import React, { useState } from "react";
import { View,TextInput, Text,Switch } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";

import Screen from './app/components/Screen';

import ListItem from './app/components/ListItem'; 
import Icon from './app/components/Icon';
import ListingScreen from './app/screens/ListingScreen';
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Shoes", value: 2 },
  { label: "Instruments", value: 3 },
  { label: "Cloths", value: 4 },
  { label: "Cars", value: 5 },
  { label: "Kids", value: 6 },
  { label: "Furniture", value: 7 },
];

export default function App() {
 const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}


child控件是 AppPicker
import React, { useState } from "react";
import { View,TextInput, Text,Switch } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";

import Screen from './app/components/Screen';

import ListItem from './app/components/ListItem'; 
import Icon from './app/components/Icon';
import ListingScreen from './app/screens/ListingScreen';
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Shoes", value: 2 },
  { label: "Instruments", value: 3 },
  { label: "Cloths", value: 4 },
  { label: "Cars", value: 5 },
  { label: "Kids", value: 6 },
  { label: "Furniture", value: 7 },
];

export default function App() {
 const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
