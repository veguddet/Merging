import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from '../Home/Home';
import Cart from '../cartscreen/cart';
import Profile from '../profilepage/Profile';
import HomeStack from '../../stacks/Homestack';
import { COLORS } from './../../constants/theme';
const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <IconAntDesign name="home" size={30} color={COLORS.DEFAULT_GREEN} />
            ),
          }}
        />
        <Tab.Screen
          name="Carttab"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            headerShown:false,
            tabBarIcon: ({color}) => (
              <IconAntDesign name="shoppingcart" size={30} color={COLORS.DEFAULT_GREEN} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            headerShown:false,
            tabBarIcon: ({color}) => (
              <IconAntDesign name="user" size={30} color={COLORS.DEFAULT_GREEN} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
