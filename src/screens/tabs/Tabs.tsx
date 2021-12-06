import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from '../Home/Home';
import Cart from '../cartscreen/cart';
import Profile from '../profilepage/Profile';
import HomeStack from '../../stacks/Homestack';
const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <IconAntDesign name="rest" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            headerShown:false,
            tabBarIcon: ({color}) => (
              <IconAntDesign name="shoppingcart" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            headerShown:false,
            tabBarIcon: ({color}) => (
              <IconAntDesign name="profile" size={30} color="#900" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
