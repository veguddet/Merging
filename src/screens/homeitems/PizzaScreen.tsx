import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../components';
import {COLORS} from '../../constants';
import {styles} from './style';

const width = Dimensions.get('window').width / 1 - 30;

const PizzaScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [burgerData, setBurgerData] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('pizzas')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();

          const doc_id = doc.id;
          console.log(data);

          return {doc_id, ...data};
        });
        setBurgerData(snap);
      });
  }, []);

  const Card = ({pizza}: any) => {
    return (
      <TouchableOpacity
        style={styles.mainView}
        onPress={() => navigation.navigate('Nutrition', pizza)}>
        {/* Image */}
        <Image source={{uri: pizza.image}} style={styles.image} />

        {/* Details */}
        <View style={styles.detailsContainer}>
          {/* Name */}
          <Text style={styles.name}>{pizza.name}</Text>
          <View style={styles.caloriesView}>
            <Text style={{fontSize: 16}}>
              Total Calories : {pizza.calories}
            </Text>
            <Image
              source={require('../../assets/FoodImages/caloriesicon.png')}
              style={styles.calorieIcon}
            />
          </View>
          <Text style={styles.price}>Rs : {pizza.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header
        headerTitle={'Pizza'}
        showCart
        onpress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        data={burgerData}
        renderItem={({item}) => {
          return <Card pizza={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default PizzaScreen;
