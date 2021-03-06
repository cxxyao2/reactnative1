import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext} from "formik";



import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ 
  items, 
  name, 
  numberOfColumns,
  PickerItemComponent, 
  placeholder, 
  width }) {
  const { errors,setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => {
          console.log('item',item);
          setFieldValue(name, item);
        }}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
  }

  const styles = StyleSheet.create({
 
});

export default AppFormPicker;