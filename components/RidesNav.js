import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Rides from '../screens/Rides';
import Join from '../screens/Join';
import AcceptRide from '../screens/AcceptRide';
import AcceptARide from '../screens/AcceptARide';
import JoinARide from '../screens/JoinARide';


import { nodeModuleNameResolver } from 'typescript';


const Stack = createNativeStackNavigator();

function RidesNav() {
  return (
    
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false}} name="RidesPage" component={Rides} />
    <Stack.Screen options={{ headerShown: false}} name="Join" component={Join} />
    <Stack.Screen options={{ headerShown: false}} name="AcceptRide" component={AcceptRide} />
    <Stack.Screen options={{ headerShown: false}} name="JoinARide" component={JoinARide} />
    <Stack.Screen options={{ headerShown: false}} name="AcceptARide" component={AcceptARide} />
    
  </Stack.Navigator>

    );
  
}

export default RidesNav;
  