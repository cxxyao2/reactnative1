export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
  <Screen>
    <TextInput placeholder="First Name1" 
    clearButtonMode="always"
    onChangeText={text=> setFirstName(text)}
    style={{
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    }}

    component: TextInput
    event: onChangeText

a function component , 
state,
useState hook!

clearButtonMode = a little round clear sign, only  take effects in iOS.