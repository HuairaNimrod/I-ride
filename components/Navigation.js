import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeNav from './HomeNav';
import RidesNav from './RidesNav';
import ProfileNav from './ProfileNav';
import { nodeModuleNameResolver } from 'typescript';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeNav}
              
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
            <Tab.Screen
                name="Rides"
                component={RidesNav}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-list" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
                 <Tab.Screen
                name="Profile"
                component={ProfileNav}
                
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
  