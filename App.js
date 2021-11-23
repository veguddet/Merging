import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from "./navigation/tabs";

import Home from './screens/Home';
import Profile from './screens/Profile';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
 const bottomTabScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
} 

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bottom" component={bottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;