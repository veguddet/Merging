import React, {useEffect} from 'react';
import {View, Text,Image, StatusBar} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { COLORS } from '../../constants';
import { emptyCart } from '../../redux/cartAction';
import {styles} from './style';
import LottieView from "lottie-react-native";

const Order = ({navigation,empty}: any) => {
  const { cartList } = useSelector(state => state.cartReducer);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Rating');
      empty()
    },2000);
  }, []);
  return (
    <View style={styles.container}>
       <StatusBar
      barStyle="light-content"
      backgroundColor={COLORS.DEFAULT_GREEN}
      translucent={false}
    />    
    <LottieView
     source={require('../../assets/lottie/order_submit.json')}
    autoPlay
    loop
  />
   </View>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
   
    empty: (sub: any) => dispatch(emptyCart(sub)),
  };
};
export default connect(null,mapDispatchToProps)(Order);