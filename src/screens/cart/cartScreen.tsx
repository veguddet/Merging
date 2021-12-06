import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import COLORS from '../Home/colors';

import {styles} from '../splashscreen/style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {SecondaryButton} from './button';
import { connect } from 'react-redux';

const CartScreen = ({navigation,data}: any) => {
  const [counter, setCounter] = useState(0);


  const [total, setTotal] = useState(0);

  const totalAmountCalculte=()=>{
    let Total=0;
    data.map(item=>{
      if(item.Price){
        Total+=item.Price
      }
      console.log(Total)
      setTotal(Total)
      
    })
  
  }
  useEffect(() => {
    totalAmountCalculte()
  }, [data]);
  const CartCard = ({Item}: any) => {
    // const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter(counter => counter + 1);
    };
    const decrement = () => {
      setCounter(counter => (counter ? counter - 1 : counter));
    };
    return (
      <View style={style.cartCard}>
        <Image source={{uri:Item.Image}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{Item.Name}</Text>
          <Text style={{fontSize: 13, color: COLORS.dark}}>
            {Item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${Item.Price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.actionBtn}>
            <TouchableOpacity onPress={() => decrement()}>
              <IconAntDesign name="minus" size={30} color="#900" />
            </TouchableOpacity>

            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <IconAntDesign name="plus" size={30} color="#900" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#ffe4e1', flex: 1}}>
      <View style={style.header}>
        <IconAntDesign name="left" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> CART </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 0.2,
        }}
      />

      <View style={style.header}>
        <IconAntDesign name="environment-outlined" size={30} color="#900" />
        <Text style={{fontSize: 17, fontWeight: 'bold'}}> At post:Pune</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}> Pincode:412409</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 0.2,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={data}
        renderItem={({item}) => <CartCard Item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={Item => (
          <View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <View style={style.Container}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                  Shipping Cost
                </Text>
              </View>
              <View style={style.Container}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>GST</Text>
              </View>
              <View style={style.Container}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                  Total Price
                </Text>
              </View>

              {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>${(Item.price.parseInt()) * counter }</Text>  */}
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.2,
              }}
            />

            <View style={{marginHorizontal: 30}}>
              <SecondaryButton
                onPress={() => navigation.navigate('Payment')}
                title="Proceed To Pay"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 90,
    height: 30,
    backgroundColor: `#ff7f50`,
    borderRadius: 30,
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Container: {
    backgroundColor: `#f0ffff`,
    height: 25,
    marginTop: 4,
    borderRadius: 10,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
 
}
);
function mapStateToProps(state:any) {
  return {
        data:state.cartReducer
  };
  }

export default connect(mapStateToProps,null)(CartScreen)
