import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashscreen/SplashScreen';
import Home1 from '../screens/Home/Home';
import BurgerScreen from '../screens/homeitems/BurgerScreen';
import PizzaScreen from '../screens/homeitems/PizzaScreen';
import DetailsScreen from '../screens/homeitems/details/DetailScreen';
import Biryani from '../screens/homeitems/Biryani';
import FrankieScreen from '../screens/homeitems/FrankieScreen';
import BiryaniDetails from '../screens/homeitems/details/BiryaniDetails';
import BurgerDetails from '../screens/homeitems/details/BurgerDetails';
import PizzaDetails from '../screens/homeitems/details/PizzaDetails';
import cartScreen from '../screens/cart/cartScreen';
import cart from '../screens/cartscreen/cart';

//import NutritionScreen from './src/nutritionScreen/NutritionScreen';



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
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="BiryaniScreen" component={Biryani} />
        <Stack.Screen name="FrankieScreen" component={FrankieScreen} />
        <Stack.Screen name="BiryaniDetails" component={BiryaniDetails} />
        <Stack.Screen name="BurgerDetails" component={BurgerDetails} />
        <Stack.Screen name="PizzaDetails" component={PizzaDetails} />
        <Stack.Screen name="CartScreen" component={cartScreen} />
        <Stack.Screen name="Cart" component={cart} />

        
      </Stack.Navigator>
  
  );
};

export default HomeStack;
