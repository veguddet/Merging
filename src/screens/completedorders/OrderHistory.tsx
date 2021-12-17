
import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { styles } from './style';
// import {FlatList, ScrollView} from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { white } from 'react-native-paper/lib/typescript/styles/colors';


const OrderHistory = ({ navigation, route }: any) => {
  const Route = route.params;
  console.log('inside', Route)

  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const Card = ({ any }: any) => {
    return (
      <Text style={styles.items}>
        {any.Name} : {any.Price} * {any.count} = {any.Price*any.count}
      </Text>

    );
  };


  return (
    <View style={{ flex: 1,backgroundColor:'white', }}>
      <View style={styles.topview}>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: '10%',
          
        }}>
          <Ionicons
            name="chevron-back-outline"
            size={30}

            style={{ paddingRight: '5%' }}
            color={COLORS.DEFAULT_GREEN}
            onPress={() => navigation.goBack()} />
          <Text style={styles.addeditems}>Order Details</Text>
        </View>

      </View>
      
      <View  style={{flex:1}}>

        <View
       
          style={styles.details1}>
          <View style={styles.row}>
            <Icon name="account-edit"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}>Cust ID : {Route.doc_id}</Text>
          </View>

          <View style={styles.row}>
            <Icon name="map-marker-radius"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}>Address : {Route.Address}</Text>
          </View>

          <View style={styles.row}>
            <Icon name="phone"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}>PhoneNo :  {Route.PhoneNo}</Text>
          </View>

          <View style={styles.row}>
            <Icon name="food-fork-drink"
              color={COLORS.DEFAULT_GREEN}
              size={25} />

            <Text style={styles.details}>Items :</Text>
           
            </View>
            <FlatList
            style={{marginLeft: 25}}
              data={Route.Orders}
              renderItem={({ item }) => {
                return <Card any={item} />;
              }}
            />

          <View style={styles.row}>
            <Icon name="wallet"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}>GST :  {Route.Gst}</Text>
          </View>

          <View style={styles.row}>
            <Icon name="credit-card-outline"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}>Total Amount :  {Route.GrandTotal}</Text>
          </View>


          <View style={styles.row}>
            <Icon name="update"
              color={COLORS.DEFAULT_GREEN}
              size={25} />
            <Text style={styles.details}> Order Date:  {Route.Date}</Text>
          </View>
          </View>
      </View>
    </View>


  )
}

export default OrderHistory;
