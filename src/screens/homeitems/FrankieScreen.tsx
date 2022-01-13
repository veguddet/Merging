import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, SafeAreaView, StatusBar} from 'react-native';
import {CustomFlatlist, Header} from '../../components';
import {COLORS} from '../../constants';
import {styles} from './style';

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header
        headerTitle={'Frankie'}
        showCart
        onpress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        data={FrankieData}
        renderItem={({item}) => {
          return <CustomFlatlist data={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default FrankieScreen;
