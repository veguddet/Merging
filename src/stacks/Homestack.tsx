import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home1 from '../screens/Home/Home';
import BurgerScreen from '../screens/homeitems/BurgerScreen';
import PizzaScreen from '../screens/homeitems/PizzaScreen';
import Biryani from '../screens/homeitems/Biryani';
import FrankieScreen from '../screens/homeitems/FrankieScreen';
import checkout from '../screens/checkout/checkout';
import Order from '../screens/order/Order';
import Nutrition from './../screens/nutritionscreen/Nutrition';
import Rating from '../screens/rating/Rating';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
      <Stack.Screen name="PizzaScreen" component={PizzaScreen} />
      <Stack.Screen name="BiryaniScreen" component={Biryani} />
      <Stack.Screen name="FrankieScreen" component={FrankieScreen} />
      <Stack.Screen name="checkout" component={checkout} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="Rating" component={Rating} />
    </Stack.Navigator>
  );
};

export default HomeStack;
