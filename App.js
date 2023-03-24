import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import Register from './screens/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen options={{headerShown: false}} name = "Login" component={LoginScreen} />
        <Stack.Screen  name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
 
 
  
  );
}

const styles = StyleSheet.create({ //deleting this shrink the app :(
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});