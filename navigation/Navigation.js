import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '..//screens/cart';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';

const Stack= createStackNavigator()

class Navigation extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                >
                     <Stack.Screen
                    name='Login'
                    component={LoginPage}
                    />

                     <Stack.Screen
                    name='Register'
                    component={RegisterPage}
                    />

                    <Stack.Screen
                    name='Home'
                    component={Home}
                    />

                     <Stack.Screen
                    name='Profile'
                    component={Profile}
                    />

                    <Stack.Screen
                    name='Cart'
                    component={Cart}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default Navigation;