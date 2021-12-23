import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import HomeStack from '../../stacks/Homestack';
import Cart from '../cartscreen/cart';
import Profile from '../profilepage/Profile';
import {styles} from './style';

const Tab = createBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarActiveTintColor: '#0A8791',
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <IconAntDesign name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Carttab"
          component={Cart}
          options={{
            tabBarActiveTintColor: '#0A8791',
            tabBarLabel: 'Cart',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <View style={{flex: 1}}>
                <IconAntDesign name="shoppingcart" size={30} color={color} />

                {this.props.data.length ? (
                  <View style={styles.cartTab}>
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
            tabBarActiveTintColor: '#0A8791',
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <IconAntDesign name="user" size={30} color={color} />
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
