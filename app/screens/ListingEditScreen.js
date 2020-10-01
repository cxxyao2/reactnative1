import React from 'react';
import {  StyleSheet } from 'react-native';
import * as Yup from "yup";



import useLocation from "../hooks/useLocation";

import {
AppForm,
AppFormField,
AppFormPicker,
SubmitButton
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from '../components/forms/FormImagePicker';


const validationSchema = Yup.object().shape({
   title: Yup.string().required().min(1).label("Title"),
   price: Yup.number().required().min(1).max(10000).label("Price"),
   description: Yup.string().label("Description"),
   category: Yup.object().required().nullable().label("Category"),
   images: Yup.array().min(1, "please select at least one image"),  // Images field is required
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "orange", icon: "lock" },
  { label: "Car", value: 4, backgroundColor: "blue", icon: "car" },
  { label: "LaFlore&LaFaune", value: 5, backgroundColor: "grey", icon: "tree" },
  { label: "House", value: 6, backgroundColor: "black", icon: "car" },
];

function ListingEditScreen() {
  const location = useLocation();

   return (
     <Screen>
       <AppForm
         initialValues={{
           title: "",
           price: "",
           description: "",
           category: null,
           images: [],
         }}
         onSubmit={(values) => console.log(location)}
         validationSchema={validationSchema}
       >
         <FormImagePicker name="images" />
         <AppFormField maxLength={255} name="title" placeholder="Title" />
         <AppFormField
           keyboardType="numeric"
           maxLength={8} //10000.99
           name="price"
           placeholder="Price"
           width={120}
         />
         <AppFormPicker
           items={categories}
           name="category"
           numberOfColumns={3}
           PickerItemComponent={CategoryPickerItem}
           placeholder="Category"
           width="50%"
         />
         <AppFormField
           maxLength={255}
           multiline
           name="description"
           numberOfLines={3}
           placeholder="Description"
         />
         <SubmitButton title="Post" />
       </AppForm>
     </Screen>
   );
}

const styles = StyleSheet.create({

});

export default ListingEditScreen;