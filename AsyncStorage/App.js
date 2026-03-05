// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  // Load stored data when the app starts
  useEffect(() => {
    getData();
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const storeData = async (key, value1, value2) => {
    try {
      const combinedValue = `${value1}, ${value2}`;
      await AsyncStorage.setItem(key, combinedValue);
      console.log('Data stored successfully');
    } catch (e) {
      console.error('Failed to save data', e);
    }
  };

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setStoredValue(value);
        console.log('Data retrieved successfully');
      }
    } catch (e) {
      console.error('Failed to retrieve data', e);
    }
  };

  const clearData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue('');
      console.log('Data cleared successfully');
    } catch (e) {
      console.error('Failed to clear data', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AsyncStorage Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={secondInputValue}
        onChangeText={setSecondInputValue}
      />

      <View style={styles.spacer} >
        <Button title="Store Data" onPress={() => storeData('@storage_Key', inputValue, secondInputValue)} testID='storeData' />
        <Button title="Retrieve Data" onPress={() => getData('@storage_Key')} testID='retrieveData' />
        <Button title="Clear Data" onPress={() => clearData('@storage_Key')} testID='clearData' />
      </View>
      <Text style={styles.text} testID='storedId'>Stored Value: {storedValue}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row'

  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
