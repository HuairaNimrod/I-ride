import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Rides from '../screens/Rides';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Rides"
                component={Rides}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-list" color={color} size={size} />
                ),
                }}
            />
                 <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-person" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    );
  
}

export default Navigation;
  