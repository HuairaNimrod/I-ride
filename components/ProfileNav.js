import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Profile from '../screens/Profile';
import Edit from '../src/editProfile';



import { nodeModuleNameResolver } from 'typescript';


const Stack = createNativeStackNavigator();

function ProfileNav() {
  return (
    
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false}}name="ProfilePage" component={Profile} />
    <Stack.Screen  name="Edit" component={Edit} />

    
  </Stack.Navigator>

    );
  
}

export default ProfileNav;
  