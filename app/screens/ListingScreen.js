import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

import Screen from "../components/Screen";

import colors from "../config/colors";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../../dumped/AppText/AppText.android";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const listings = [
  {
    id: 201,
    title: "Red jacket",
    price: 1000,
    categoryId: 5,
    userId: 1,
    images: [{ url: "http://192.168.1.5:9000/assets/shoes1_full.jpg" }],
  },
  {
    id: 202,
    title: "couch",
    price: 100,
    categoryId: 5,
    userId: 1,
    images: [{ url: "http://192.168.1.5:9000/assets/couch2_full.jpg" }],
  },
];

function ListingScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await listingsApi.getListings(1, 2, 3);

    setLoading(false);
    if (!response.ok) return setError(true);
    setError(false);
    setData(response.data);
  };

  useEffect(() => {
    request();
    console.log("hi,listings", listings);
    console.log("hi,data from server ", data);
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't get data</AppText>
          <AppButton title="Retry" onPress={request} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS, item);
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;