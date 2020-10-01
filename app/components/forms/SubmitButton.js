import React from 'react';
import { useFormikContext} from 'formik';
import { View, StyleSheet } from 'react-native';

import AppButton from "../AppButton";

function SubmitButton({ title }) {
const { handleSubmit } = useFormikContext();


return (
  <AppButton 
  title={title}
  onPress={handleSubmit} />
);
}

const styles = StyleSheet.create({
container: {
   backgroundColor: 'red'
}
});

export default SubmitButton;