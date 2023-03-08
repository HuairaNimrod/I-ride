import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({ //deleting this shrink the app :(
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});