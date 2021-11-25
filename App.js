import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import Tabs from './screens/Tabs';
import Home from './screens/Home';
import Order from './screens/Order';
import Cart from './screens/cart';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;