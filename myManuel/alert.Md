<Button
title="Click me"
color="orange"
onPress={() =>
Alert.alert("title", "message", [
{ text: "Yes", onPress: () => console.log("Yes clicked") },
{ text: "No", onPress: () => console.log("No clicked") },
])
}
