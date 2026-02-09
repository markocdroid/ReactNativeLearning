import { Platform, StyleSheet } from 'react-native';
import FitnessWorld from './FitnessWorld';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <FitnessWorld />
    </SafeAreaProvider>
  );
}

let _paddingBottom = 0;

if (Platform.OS === 'android') {
  _paddingBottom = 50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25, //Clearing notch
    paddingBottom: _paddingBottom, //clearing nav for Android.
    flexDirection: 'vertical',
    backgroundColor: 'black',
  },
});
