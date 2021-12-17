import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import WelcomeScreen from './src/screens/welcomescreen/WelcomeScreen';
import LoginPage from './src/screens/loginpage/LoginPage';
import RegisterPage from './src/screens/registerpage/RegisterPage';
import Home from './src/screens/homescreen/Home';
import Tabs from './src/screens/tabs/Tabs';
import Order from './src/screens/order/Order';
import Home1 from './src/screens/Home/Home';
import BurgerScreen from './src/screens/homeitems/BurgerScreen';
import PizzaScreen from './src/screens/homeitems/PizzaScreen';
import Test from './src/screens/homeitems/Test';
import Cart from './src/screens/cartscreen/cart';
import DetailsScreen from './src/screens/homeitems/details/DetailScreen';
import Biryani from './src/screens/homeitems/Biryani';
import FrankieScreen from './src/screens/homeitems/FrankieScreen';
import BiryaniDetails from './src/screens/homeitems/details/BiryaniDetails';
import CartScreen from './src/screens/cart/cartScreen';
import Profile from './src/screens/profilepage/Profile';
import EditProfile from './src/screens/profilepage/EditProfile';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CompletedOrderScreen from './src/screens/completedorders/completedOrders';
import Onboarding from './src/screens/onboardingscreen/Onboarding';
import Nutrition from './src/screens/nutritionscreen/Nutrition';
import Lottie from './src/screens/lottie/Lottie';
import ContactUs from './src/screens/contactSupport/ContactUs';
import OrderHistory from './src/screens/completedorders/OrderHistory';
import Rating from './src/screens/rating/Rating';


const App = () => {
  
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboard" component={Onboarding} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="BiryaniScreen" component={Biryani} />
        <Stack.Screen name="FrankieScreen" component={FrankieScreen} />
        <Stack.Screen name="BiryaniDetails" component={BiryaniDetails} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CompletedOrderScreen" component={CompletedOrderScreen} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen name="Lottie" component={Lottie} />
        <Stack.Screen name="Contact" component={ContactUs} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Rating" component={Rating} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
