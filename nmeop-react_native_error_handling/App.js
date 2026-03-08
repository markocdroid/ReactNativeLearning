import React, { useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet, Platform } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  const clickFirstBtn = () => {
    try {
      throw new Error('This is a generic error');
    } catch (error) {
      const errorMessage = error?.message || 'An unknown error occurred';
      console.error('Error caught:', error);
      if (Platform.OS === 'web') {
        alert(`Error: ${errorMessage}`);
      } else {
        Alert.alert(
          "Error",
          `An error occurred: ${errorMessage}`,
          [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Error Example</Text>

      <Pressable style={styles.pressable} onPress={clickFirstBtn} >
        <Text style={styles.pressText}>Button 1</Text>
      </Pressable>

      {data && <Text>{data.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pressable: {
    marginVertical: 10,
    backgroundColor: 'blue',
    padding: '4pt'
  },
  pressText: {
    color: 'white'
  }
});

export default App;