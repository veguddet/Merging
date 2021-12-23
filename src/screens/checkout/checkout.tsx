import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {Header} from '../../components';
import {COLORS} from '../../constants';
import {Display} from '../../utils';

const checkout = ({navigation}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  const [total, setTotal] = useState(0);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [onEdit, setEdit] = useState(false);

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
        });
    }, []),
  );

  const handleModel = () => {
    if (phone.length == 10) {
      setEdit(!onEdit);
    } else {
      Alert.alert('10 digits');
    }
  };

  const handleAddData = async () => {
    let id = auth().currentUser.uid;
    await firestore()
      .collection('users')
      .doc(id)
      .collection('userOrders')
      .add({
        Orders: cartList,
        Address: address,
        PhoneNo: phone,
        GrandTotal: Math.round(total + (total * 5) / 100),
        Date: new Date().toLocaleString(),
        Gst: Math.round((total * 5) / 100),
      });
    navigation.navigate('Order');
  };

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
  }, []);

  const Card = ({Item}: any) => {
    console.log(Item.Name);
    return (
      <View style={{flex: 1}}>
        <View style={styles.itemView}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.Itemdata}>{Item.Name} </Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.Itemdata}>
              {Item.Price} X {Item.count} = {Item.count * Item.Price} Rs
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header
        headerTitle={'Checkout'}
        onpress={() => navigation.jumpTo('Carttab')}
      />
      <View style={styles.topview}>
        <View style={{marginTop: '5%'}}>
          <FlatList
            data={cartList}
            renderItem={({item}) => {
              return <Card Item={item} />;
            }}
          />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.amount}>Total : {total}</Text>
          <Text style={styles.amount}>
            Gst(5%) : {Math.round((total * 5) / 100)}
          </Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.grandTotal}>
            Grand Total : {Math.round(total + (total * 5) / 100)} Rs
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{width: '90%'}}>
            <Text style={styles.details}>Address : {address}</Text>
            <Text style={styles.details}>Phone No : {phone}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setEdit(!onEdit)}>
              <IconAntDesign
                name="edit"
                size={30}
                color={COLORS.DEFAULT_GREEN}
              />
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
              <View style={styles.modelContainer}>
                <Text style={{paddingRight: 10, fontSize: 16}}>
                  Edit Address :{' '}
                </Text>
                <TextInput
                  placeholder={address}
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={styles.textInput}
                  value={address}
                  onChangeText={text => setAddress(text)}
                  multiline={true}
                  numberOfLines={2}
                />
              </View>
              <View style={styles.modelContainer}>
                <Text style={{paddingRight: 20, fontSize: 16}}>
                  Edit Phone :{' '}
                </Text>
                <TextInput
                  placeholder={phone}
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={styles.textInput}
                  value={phone}
                  onChangeText={text => setPhone(text)}
                  maxLength={10}
                />
              </View>
              <View style={{marginTop: '5%'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleModel}>
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.buyBtn} onPress={() => handleAddData()}>
        <Text style={styles.order}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  topview: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  details: {
    fontSize: 18,
    color: COLORS.DEFAULT_BLACK,
  },
  detailsContainer: {
    padding: 20,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceView: {
    alignItems: 'center',
    marginTop: '10%',
  },
  grandTotal: {
    fontSize: 30,
    color: COLORS.DEFAULT_GREEN,
  },
  Itemdata: {
    fontSize: 20,
    fontWeight: '400',
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
  modelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
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
    fontSize: 18,
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
    marginTop: 20,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '95%',
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
    backgroundColor: COLORS.DEFAULT_GREEN,
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
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingLeft: '10%',
  },
});

export default checkout;
