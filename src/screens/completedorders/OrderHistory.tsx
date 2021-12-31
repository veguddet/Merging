import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from '../../components';
import {COLORS} from '../../constants';
import {styles} from './style';

const OrderHistory = ({navigation, route}: any) => {
  const Route = route.params;
  console.log('inside', Route);

  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const Card = ({any}: any) => {
    return (
      <Text style={styles.items}>
        {any.Name} {any.Price} * {any.count} = {any.Price * any.count}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Header
          headerTitle={'Order Details'}
          onpress={() => navigation.goBack()}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.details1}>
          <View style={styles.row}>
            <Icon name="account-edit" color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.details}>Cust ID : {Route.doc_id}</Text>
          </View>

          <View style={styles.row}>
            <Icon
              name="map-marker-radius"
              color={COLORS.DEFAULT_GREEN}
              size={25}
            />
            <Text style={styles.details}>Address : {Route.Address}</Text>
          </View>

          <View style={styles.row}>
            <Icon name="phone" color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.details}>Phone No : {Route.PhoneNo}</Text>
          </View>

          <View style={styles.row}>
            <Icon
              name="food-fork-drink"
              color={COLORS.DEFAULT_GREEN}
              size={25}
            />
            <Text style={styles.details}>Items :</Text>
          </View>
          
          <FlatList
            style={{marginLeft: 25}}
            data={Route.Orders}
            renderItem={({item}) => {
              return <Card any={item} />;
            }}
          />

          <View style={styles.row}>
            <Icon name="wallet" color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.details}>GST : {Route.Gst} Rs</Text>
          </View>

          <View style={styles.row}>
            <Icon
              name="credit-card-outline"
              color={COLORS.DEFAULT_GREEN}
              size={25}
            />
            <Text style={styles.details}>
              Total Amount : {Route.GrandTotal} Rs
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="update" color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.details}>
              Date : {Route.Date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderHistory;
