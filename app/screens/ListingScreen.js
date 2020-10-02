import React ,{useState, useEffect } from 'react';
import { StyleSheet, Text, Button,FlatList } from "react-native";

import Screen from "../components/Screen";

import colors from "../config/colors";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import routes from "../navigation/routes" ;

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
  const [animal, setAnimal] = useState([]);

  useEffect(()=>{
    loadListings();
    console.log('hi,imtes', listings);
     console.log("hi,animals ", animal);
  }, []);

  const loadListings = async() => {
    const response = await listingsApi.getListings();
    setAnimal(response.data);
  }

  return (
    <Screen style={styles.screen}>
      <Button
        title="clickMe"
        onPress={() => console.log("hi,world ", listings)}
      />

      <FlatList
        data={animal}
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
}
});

export default ListingScreen;