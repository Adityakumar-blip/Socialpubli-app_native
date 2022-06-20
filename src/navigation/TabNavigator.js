import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
// import Login from './src/screens/Login';
// import Otp from './src/screens/Otp';
import HomeNavigation from './HomeNavigation';
import Collabs from '../screens/Collabs';
import Creatorprograms from '../screens/Creatorprograms';
import Profile from '../screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Collaborations') {
            iconName = focused ? 'at-circle' : 'at-circle-outline';
          }else if (route.name === 'Creator Programs'){
            iconName = focused ? 'planet' : 'planet-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ?  'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color}  />;
        },
        tabBarActiveTintColor: '#f8971d',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Collaborations" component={Collabs} />
        <Tab.Screen name="Creator Programs" component={Creatorprograms} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator