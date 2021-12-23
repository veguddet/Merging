import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  Dimensions, FlatList,
  Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View
} from 'react-native';
import { Header } from '../../components';
import { COLORS } from '../../constants';
import { styles } from './style';

const width = Dimensions.get('window').width / 1 - 30;

const FrankieScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [FrankieData, setFrankieData] = useState(null); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('frankie')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();

          const doc_id = doc.id;

          return {doc_id, ...data};
        });
        setFrankieData(snap);
      });
  }, []);

  console.log(FrankieData);

  const Card = ({Frankie}: any) => {
    return (
      <TouchableOpacity
        style={styles.mainView}
        onPress={() => navigation.navigate('Nutrition', Frankie)}>
        {/* Image */}
        <Image source={{uri: Frankie.image}} style={styles.image} />

        {/* Details */}
        <View style={styles.detailsContainer}>
          {/* Name */}
          <Text style={styles.name}>{Frankie.name}</Text>
          <View style={styles.caloriesView}>
            <Text style={{fontSize: 16}}>
              Total Calories : {Frankie.calories}
            </Text>
            <Image
              source={require('../../assets/FoodImages/caloriesicon.png')}
              style={styles.calorieIcon}
            />
          </View>
          <Text style={styles.price}>Rs : {Frankie.price}</Text>
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
      <Header headerTitle={'Frankie'} onpress={() => navigation.goBack()} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        data={FrankieData}
        renderItem={({item}) => {
          return <Card Frankie={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default FrankieScreen;
