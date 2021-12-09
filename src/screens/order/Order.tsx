import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { emptyCart } from '../../redux/cartAction';
import {styles} from './style';
// import {Image} from 'react-native';
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
      <Image
        source={{
          uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGtNRm57y2eZCc8G7Tby8P2erFIlZkfyKLQ&usqp=CAU'
        }}
        style={{height:100, width:100}}
        />

          
      <Text style={styles.text}>Congratulations..!</Text>
      <Text style={styles.text1}>Order is Placed</Text>
      {/* <Text style={styles.text1}>Toatl Amount is $565</Text> */}
    </View>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
   
    empty: (sub: any) => dispatch(emptyCart(sub)),
  };
};
export default connect(null,mapDispatchToProps)(Order);