import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screens/Home';
import Screen2 from './screens/Rides';
import Screen3 from './screens/Profile';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Rides" component={Screen2} />
        <Tab.Screen name="Account" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
