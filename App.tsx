import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import WelcomeScreen from './src/screens/welcomescreen/WelcomeScreen';
import LoginPage from './src/screens/loginpage/LoginPage';
import RegisterPage from './src/screens/registerpage/RegisterPage';
import Tabs from './src/screens/tabs/Tabs';
import Home from './src/screens/homescreen/Home';
import Order from './src/screens/order/Order';
import Cart from './src/screens/cartscreen/cart';
import Home1 from './src/screens/Home/Home';
import BurgerScreen from './src/screens/homeitems/BurgerScreen'
import PizzaScreen from './src/screens/homeitems/PizzaScreen';
import Test from './src/screens/homeitems/Test';
import DetailsScreen from './src/screens/homeitems/details/DetailScreen';
import Biryani from './src/screens/homeitems/Biryani';
import FrankieScreen from './src/screens/homeitems/FrankieScreen';
import NutrionScreen from './src/screens/homeitems/details/NutritionScreen';


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
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="BiryaniScreen" component={Biryani} />
        <Stack.Screen name="FrankieScreen" component={FrankieScreen} />
        <Stack.Screen name="NutrionScreen" component={NutrionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
