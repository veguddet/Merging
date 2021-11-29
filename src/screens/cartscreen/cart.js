import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({route, navigation}) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter => counter + 1);
  };
  const decrement = () => {
    setCounter(counter => (counter ? counter - 1 : counter));
  };
  return (
    <View style={styles.topview}>
      <View style={styles.height20} />
      <Text style={styles.addeditems}>Added Items</Text>
      <View style={styles.height10} />

      <View style={{flex: 1}}>
        <View style={styles.imageview}>
          <Image
            resizeMode={'contain'}
            style={styles.imagelink}
            source={{uri: 'http://tutofox.com/foodapp/food/pizza/pizza-1.png'}}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Pizza</Text>
              <Text>Descripcion</Text>
            </View>
            <View style={styles.text199view}>
              <Text style={styles.text199}>$199</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => decrement()}>
                  <Icon name="ios-remove-circle" size={30} color="#9fd236" />
                </TouchableOpacity>
                <Text style={styles.counter}>{counter}</Text>
                <TouchableOpacity onPress={() => increment()}>
                  <Icon name="ios-add-circle" size={30} color="#9fd236" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.height20} />

      <View style={styles.amountview}>
        <Text style={styles.amount}>Total Amount = {199 * counter}</Text>
      </View>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Order')}>
        <Text style={styles.order}>Place Order</Text>
      </TouchableOpacity>

      <View style={{height: 20}} />
    </View>
  );
};

export default Cart;
