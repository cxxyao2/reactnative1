import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';

import Screen from "../components/Screen";

import ListItem from '../components/ListItem';
import Icon from "../components/Icon";

import colors from "../config/colors";
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Listings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
return (
  <Screen style={styles.screen}>
    <View style={styles.container}>
      <ListItem
        title="home"
        subTitle="programme"
        image={require("../assets/mosh.jpg")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </View>
    <ListItem
      title="Log Out"
      IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
    />
  </Screen>
);
}

const styles = StyleSheet.create({
screen: {
  backgroundColor: colors.light,
},

container: {
   marginVertical: 20
}
});

export default AccountScreen;