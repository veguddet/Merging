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
import {CustomFlatlist, Header} from '../../components';
import {COLORS} from '../../constants';
import {styles} from './style';

const width = Dimensions.get('window').width / 1 - 30;

const Biryani = ({navigation}: any) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [biryaniData, setBiryaniData] = useState(null); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('biryani')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();

          const doc_id = doc.id;

          return {doc_id, ...data};
        });
        setBiryaniData(snap);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header
        headerTitle={'Biryani'}
        showCart
        onpress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        data={biryaniData}
        renderItem={({item}) => {
          return <CustomFlatlist data={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Biryani;
