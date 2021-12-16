import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from '../Home/Home';
import Cart from '../cartscreen/cart';
import Profile from '../profilepage/Profile';
import HomeStack from '../../stacks/Homestack';
import {COLORS} from './../../constants/theme';
import { connect } from 'react-redux';
const Tab = createBottomTabNavigator();

export  class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarActiveTintColor:'#0A8791',
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <IconAntDesign
                name="home"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Carttab"
          component={Cart}
          options={{
            tabBarActiveTintColor:'#0A8791',
            tabBarLabel: 'Cart',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <View style={{flex: 1}}>
                <IconAntDesign
                  name="shoppingcart"
                  size={30}
                  color={color}
                />

                {this.props.data.length ? (
                  <View
                    style={{
                      position: 'absolute',
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      backgroundColor: COLORS.DEFAULT_GREEN,
                      left: 15,
                      bottom: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1000,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {this.props.data.length}
                    </Text>
                  </View>
                ) : (
                  <Text></Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={Profile}
          options={{
            tabBarActiveTintColor:'#0A8791',
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <IconAntDesign
                name="user"
                size={30}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    data: state.cartReducer.cartList,
  };
}

export default connect(mapStateToProps)(Tabs);
