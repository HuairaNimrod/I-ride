import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Rides from '../screens/Rides';
import Profile from '../screens/Profile';
import { nodeModuleNameResolver } from 'typescript';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
              
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
            <Tab.Screen
                name="Rides"
                component={Rides}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-list" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
                 <Tab.Screen
                name="Profile"
                component={Profile}
                
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-person" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
            {/* <Tab.Screen
                name="Login"
                component={Login}
    
            />
            <Tab.Screen
                name="Register"
                component={Register}
    
            /> */}
        </Tab.Navigator>

    );
  
}

export default Navigation;
  