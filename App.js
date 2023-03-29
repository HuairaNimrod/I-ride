import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import Register from './screens/Register';
import Join from './screens/Join';
import AcceptRide from './screens/AcceptRide'
import AcceptARide from './screens/AcceptARide';
import editProfile from './src/editProfile';
import Request from './screens/Request';
import Offer from './screens/Offer';
import ConfirmOffer from './screens/ConfirmOffer';
import ConfirmRequest from './screens/ConfirmRequest';
import JoinARide from './screens/JoinARide'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen options={{headerShown: false}} name = "Login" component={LoginScreen} /> 
        <Stack.Screen  name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation} />
        <Stack.Screen name="Edit" component={editProfile} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="ConfirmOffer" component={ConfirmOffer} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="AcceptRide" component={AcceptRide} />
        <Stack.Screen name="JoinARide" component={JoinARide} />
        <Stack.Screen name="AcceptARide" component={AcceptARide} />
        <Stack.Screen name="ConfirmRequest" component={ConfirmRequest} />
      </Stack.Navigator>
    </NavigationContainer>
 
 
  
  );
}

const styles = StyleSheet.create({ //deleting this shrink the app :(
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});