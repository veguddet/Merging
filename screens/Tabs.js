import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './cart';
import Profile from './Profile';

var {width} = Dimensions.get('window');

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: width,
    backgroundColor: 'gray',
    height: 60,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});