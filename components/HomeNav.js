import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home';
import Request from '../screens/Request';
import Offer from '../screens/Offer';
import ConfirmOffer from '../screens/ConfirmOffer';
import ConfirmRequest from '../screens/ConfirmRequest';

import { nodeModuleNameResolver } from 'typescript';


const Stack = createNativeStackNavigator();

function HomeNav() {
  return (
    
    <Stack.Navigator>
    <Stack.Screen name="HomePage" options={{ headerShown: false}} component={Home} />
    <Stack.Screen name="Request" component={Request} />
    <Stack.Screen name="Offer" component={Offer} />
    <Stack.Screen name="ConfirmOffer" component={ConfirmOffer} />
    <Stack.Screen name="ConfirmRequest" component={ConfirmRequest} />
  </Stack.Navigator>

    );
  
}

export default HomeNav;
  