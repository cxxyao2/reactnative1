import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route}) {
  // const listing = route.params; todojane
  const listing = {
    id: 201,
    title: "Red jacket",
    price: 100,
    categoryId: 5,
    userId: 1,
    images: [{url: "http://192.168.1.5:9000/assets/couch2_full.jpg"}],
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ {uri: listing.images[0].url}} />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{listing.title}</AppText>
      <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
