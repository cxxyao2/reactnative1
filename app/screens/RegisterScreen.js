import React, {useState} from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ErrorMessage from '../components/forms/ErrorMessage';
import ActivityIndicator from "../components/ActivityIndicator";


// label: show in the error message
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(8).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async(userInfo) => {
    const result = await registerApi.request(userInfo);

    if(!result.ok){
      if(result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      } 
      return ;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  }

  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {error && <ErrorMessage error={error} visible={true} />}
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="car"
            name="name"
            placeholder="Name"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;