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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25, //Clearing notch
    ...Platform.select({
      ios: { paddingBottom: 0, }, //iOS handles safe area insets automatically.
      android: { paddingBottom: 50 } //Android needs manual padding to clear navigation bar.
    }),
    flexDirection: 'vertical',
    backgroundColor: 'black',
  },
});
