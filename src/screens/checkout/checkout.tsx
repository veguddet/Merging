import {isTSEnumMember} from '@babel/types';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  Button,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import {style} from '../homeitems/details/DetailScreen';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';
import {useFocusEffect} from '@react-navigation/core';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { Display } from '../../utils';

//import { styles } from './styles';

const checkout = ({navigation}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  const [total, setTotal] = useState(0);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [onEdit, setEdit] = useState(false);

  // const handledetails=() => {
  //   let id = auth().currentUser.uid;
  //   const subscriber = firestore()
  //     .collection('users')
  // venky
  //     .doc(id)
  //     .get()
  //     .then(snapshot => {
  //       // let snap = snapshot.docs.map(doc => {
  //       //   const data = doc.data();
  //       //   const doc_id = doc.id;
  //       //   return {doc_id, ...data};
  //       console.log('from', snapshot.data());
  //      // setUser(snapshot.data());
  //       setAddress(snapshot.data().address);
  //       setPhone(snapshot.data().mobile);

  //     })};
  useFocusEffect(
    useCallback(() => {
      let id = auth().currentUser.uid;
      const subscriber = firestore()
        .collection('users')
        .doc(id)
        .get()
        .then(snapshot => {
          setAddress(snapshot.data().address);
          setPhone(snapshot.data().mobile);
          //console.log(snap)
          // setBiryaniData(snap);
        });
    }, []),
  );

  const handleAddData=async()=> {
    let id = auth().currentUser.uid;
   await  firestore().collection('users').doc(id).collection('userOrders').add({
       Orders:cartList,
       Address:address,
       PhoneNo:phone,
       GrandTotal:total,
     });
     navigation.navigate('Order')
 }

  const totalAmountCalculte = () => {
    let Total = 0;
    cartList.map(item => {
      if (item.Price) {
        Total += item.Price * item.count;
      }
      console.log(Total);

      setTotal(Total);
    });
    setTotal(Total);
  };
  useEffect(() => {
    totalAmountCalculte();
    // handledetails()
  }, []);

  const Card = ({Item}: any) => {
    console.log(Item.Name);
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            paddingLeft: '10%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.Itemdata}>{Item.Name}</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>
              {Item.Price} X {Item.count}={Item.count * Item.Price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.topview}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.addeditems}>CHECKOUT</Text>
      </View>

      <View style={styles.height10} />

      <View style={{marginTop: '5%'}}>
        <FlatList
          data={cartList}
          renderItem={({item}) => {
            return <Card Item={item} />;
          }}
        />
      </View>
      <View
        style={{alignItems: 'center', marginTop: '10%', marginRight: '10%'}}>
        <Text style={styles.amount}>Total: {total}</Text>
        <Text style={styles.amount}>
          Gst(5%): {Math.round((total * 5) / 100)}
        </Text>
      </View>
      <View style={{alignItems: 'center', paddingRight: '5%', marginTop: '5%'}}>
        <Text style={styles.grandTotal}>
          Grand Total: {Math.round(total + (total * 5) / 100)}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={{width:'90%'}}>
          <Text style={styles.details}>Address:{address}</Text>
          <Text style={styles.details}>Phone No:{phone}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setEdit(!onEdit)}>
            <IconAntDesign name="edit" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={onEdit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setEdit(!onEdit);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
              }}>
              <Text style={{paddingRight: 10}}>Edit Address</Text>
              <TextInput
                placeholder={address}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={address}
                onChangeText={text => setAddress(text)}
                multiline={true}
                numberOfLines={3}
                maxLength={40}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{paddingRight: 10}}>Edit Phone</Text>
              <TextInput
                placeholder={phone}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View style={{marginTop: '4%'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setEdit(!onEdit)}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    
    </ScrollView>
  
        <TouchableOpacity
          style={styles.buyBtn}
         //</View> onPress={() => navigation.navigate('Order')}>
         onPress={() => handleAddData()}>
          <Text style={styles.order}>Place Order</Text>
        </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    flex: 1,
    marginTop: 30,
  },

  details: {
    fontSize: 18,
    color: COLORS.gray,
   // fontWeight: '800',
  },
  detailsContainer: {
    padding: 20,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grandTotal: {
    fontSize: 30,
    fontWeight: '500',
  },
  Itemdata: {
    fontSize: 20,

    fontWeight: '300',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },

  topCardView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addeditems: {
    fontSize: 28,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    marginTop: 30,
  },
  height20: {
    height: 20,
  },
  imageview: {
    width: '',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingBottom: 5,
  },
  imagelink: {
    width: 120,
    height: 120,
  },
  text199view: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 60,
    paddingLeft: 10,
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text199: {
    width: 100,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#228b22',
    right: 120,
    color: '#000000',
    fontWeight: 'bold',
    borderColor: '#000000',
  },
  text19: {
    fontWeight: 'bold',
    color: `#f0ffff`,
    fontSize: 15,
    paddingRight: 5,
  },
  text1: {
    fontWeight: 'bold',
    color: `#006400`,
    fontSize: 20,
  },
  height10: {
    height: 20,
  },
  counter: {
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  buyBtn: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: Display.setHeight(6),
    borderRadius: 10,
    marginBottom: 20,
  },
  amountview: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  touch: {
    width: 130,
    height: 50,
    backgroundColor: '#00B761',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  order: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default checkout;
