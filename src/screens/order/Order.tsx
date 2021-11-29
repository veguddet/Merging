import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {styles} from './style';
const Order = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tabs');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations</Text>
      <Text style={styles.text}>Order is Placed</Text>
      <Text style={styles.text}>Toatl Amount is $565</Text>
    </View>
  );
};

export default Order;
