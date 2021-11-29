import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../homescreen/Home';
import Cart from '../cartscreen/cart';
import Profile from '../profilepage/Profile';
const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
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
            tabBarIcon: ({color}) => (
              <IconAntDesign name="profile" size={30} color="#900" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
