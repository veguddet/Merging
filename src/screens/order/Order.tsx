import React, {useEffect} from 'react';
import {View, Text,Image, StatusBar} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { COLORS } from '../../constants';
import { emptyCart } from '../../redux/cartAction';
import {styles} from './style';

const Order = ({navigation,empty}: any) => {
  const { cartList } = useSelector(state => state.cartReducer);
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Home1');
      empty()
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
       <StatusBar
      barStyle="light-content"
      backgroundColor={COLORS.DEFAULT_GREEN}
      translucent={false}
    />
      <Image
       source={require('../../assets/food-delivery1.png')}
        style={{height:100, width:100}}
        />      
      <Text style={styles.text}>Congratulations..!</Text>
      <Text style={styles.text1}>Your Order is Placed</Text>
    </View>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
   
    empty: (sub: any) => dispatch(emptyCart(sub)),
  };
};
export default connect(null,mapDispatchToProps)(Order);