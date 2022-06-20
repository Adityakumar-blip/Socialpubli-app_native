import { View, Text } from 'react-native'
import React from 'react'

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home'

function Homedetail  () {
    return (
        <Text>Home detail</Text>
    )
}


const HomeNavigation = () => {
    
    const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
    <HomeStack.Screen name="Homestack"  component={Home} options={{headerMode:"none"}} />
    <HomeStack.Screen name="Homedetail"  component={Homedetail} />
  </HomeStack.Navigator>

  )
}

export default HomeNavigation