import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Header} from '../../components';
import {COLORS, FONTS} from '../../constants';

const CompletedOrderScreen = ({navigation}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  const [completedOrders, setCompletedOrders] = useState({});
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [onEdit, setEdit] = useState(false);

  useEffect(() => {
    let user = auth().currentUser;
    let id = user?.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .collection('userOrders')
      .orderBy('Date', 'desc')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('data', data);
          const doc_id = doc.id;
          return {doc_id, ...data};
        });

        setCompletedOrders(snap);
      });
    console.log('insidecomplete', completedOrders);
  }, [completedOrders]);

  const Card = ({data}: any) => {
    var Item = [];
    if (data.Orders) {
      Item = data.Orders.map(row => {
        return (
          <View style={{flexDirection: 'row', marginRight: '20%'}}>
            <Text> Item Name : {row.Name}</Text>
          </View>
        );
      });
    }

    return (
      <View style={{flex: 1,paddingBottom:10,}}>
        <View style={styles.details1}>
          <View>
            <Text style={styles.itemText}>Order ID : {data.doc_id}</Text>
          </View>

          <View>
            <Text style={styles.itemText}>
              Grand Total : {data.GrandTotal} Rs
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 5,
            }}
            onPress={() => navigation.navigate('OrderHistory', data, Item)}>
            <Text style={styles.seemoreText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1,backgroundColor:'white',}}>
      <View style={styles.topview}>
        <Header
          headerTitle={'Order History'}
          onpress={() => navigation.goBack()}
        />
        <View style={{marginTop: '1%',paddingBottom:20,}}>
          <FlatList
            data={completedOrders}
            renderItem={({item}) => {
              return <Card data={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    backgroundColor: 'white',
  },
  details: {
    fontSize: 18,
    color: COLORS.white2,
  },
  addeditems: {
    fontSize: 28,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  height10: {
    height: 5,
  },
  details1: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemText: {},
  seemoreText: {
    color: COLORS.darkGreen,
    textDecorationLine: 'underline',
    ...FONTS.h3,
  },
});

export default CompletedOrderScreen;
