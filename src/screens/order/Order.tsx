import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {COLORS} from '../../constants';
import {emptyCart} from '../../redux/cartAction';
import {styles} from './style';

const Order = ({navigation, empty}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Rating');
      empty();
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.DEFAULT_WHITE}
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
export default connect(null, mapDispatchToProps)(Order);
