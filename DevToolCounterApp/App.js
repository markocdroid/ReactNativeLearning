import React, { useState, StrictMode } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const handleSubmit = () => {
    console.log('User Name:', name);
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>React DevTools Example</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />

      <Text style={styles.label}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    width: '80%',
  },
});

export default App;
