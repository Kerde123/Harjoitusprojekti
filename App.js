import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  const pressed = () => {
    Alert.alert("Kirjoitit " + text)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: 'black', borderWidth: 2}}
        onChangeText={text => setText(text)}
        value= {text}
        />

      <Button title="Paina" onPress={pressed} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
