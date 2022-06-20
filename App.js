
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import 'react-native-gesture-handler';



import Login from './src/screens/Login';
import Otp from './src/screens/Otp';
import Home from './src/screens/Home';
import Collabs from './src/screens/Collabs';
import Creatorprograms from './src/screens/Creatorprograms';
import Profile from './src/screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';



import Index from './src/navigation/Index';





const App = () => {

  

  return (
    <Index/>
  )
}

export default App