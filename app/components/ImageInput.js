import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons" ;
import * as ImagePicker from "expo-image-picker";


import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(()=>{
    requestPermission();
  },[])

   const requestPermission = async () => {
     const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
     if (!granted) alert("You need to enable permission");
   };

  const handlePress = () => {
    if (!imageUri) selectedImage();
    else Alert.alert("Delete", "Want Delete?",
    [
      { text: "Yes", onPress: () => onChangeImage(null)},
      { text: "No"}
    ])
  };

  const selectedImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={colors.dark} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: colors.light,
      borderRadius: 15,
      height: 100,
      justifyContent: "center",
      overflow: "hidden",
      width: 100,
    },
    image: {
      height: "100%",
      width: "100%",
    },
  });


export default ImageInput;