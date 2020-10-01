import React from "react";
import {
StyleSheet,
Text,
View,
TouchableWithoutFeedback,
SafeAreaView,
Image,
Button,
Alert,
Platform,
} from "react-native";

export default function App() {
const handlePress = () => console.log("Text pressed");

return (
<SafeAreaView style={styles.container}>
<Button
title="Click me"
color="orange"
onPress={() =>
Alert.prompt("title", "message", (text) =>
console.log("you input " + text)
)
}
/>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
paddingTop: Platform.OS === "android" ? 20 : 0,
},
});

import React from "react";
import {
StyleSheet,
Text,
View,
TouchableWithoutFeedback,
SafeAreaView,
Image,
Button,
Alert,
StatusBar,
Platform,
} from "react-native";

export default function App() {
const handlePress = () => console.log("Text pressed");

return (
<SafeAreaView style={styles.container}>
<Button
title="Click me"
color="orange"
onPress={() =>
Alert.prompt("title", "message", (text) =>
console.log("you input " + text)
)
}
/>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},
});
