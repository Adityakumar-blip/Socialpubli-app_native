import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Collaborations" component={Collabs} />
      <Tab.Screen name="Creator Programs" component={Creatorprograms} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})