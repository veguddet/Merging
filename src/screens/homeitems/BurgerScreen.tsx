import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import COLORS from '../Home/colors';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BurgerData from '../../Data/BurgerData';
import firestore from '@react-native-firebase/firestore';
const width = Dimensions.get('window').width / 2 - 30;

const BurgerScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [burgerData, setBurgerData] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('burger')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();

          const doc_id = doc.id;
          console.log(data);

          return {doc_id, ...data};
        });
        setBurgerData(snap);
        //console.log(payments)
      });
  }, []);
//  const searchData = (text:any) => {
//     if (text) {
//       const newData = this.state.DATA.filter(item => {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       this.setState({FilteredData:newData})
//       this.setState({text})
//       // setText(text);
//     } else {
//       this.setState({FilteredData:this.state.DATA})
//       this.setState({text:''})
//     }
//   };

  const Card = ({burgers}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('BurgerDetails', burgers)}>
        <View style={style.card}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              // source={{uri: item.img}}
              source={{uri: burgers.image}}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>
          <Text style={{fontSize: 19, fontWeight: 'bold',padding:5}}>{burgers.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
             
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold',paddingLeft:8}}>
              Rs{burgers.price}
            </Text>

            <View style={{justifyContent:'center',alignItems:'center'}}  >
              <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAntDesign name="right" size={20} color="green" />
          </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        marginTop: 50,
      }}>
      <View style={style.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAntDesign name="arrowleft" size={30} color="#900" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 38,
              color: COLORS.green,
              fontWeight: 'bold',
              paddingLeft: 30,
            }}>
            Burgers!
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}></View>
      </View>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={burgerData}
        renderItem={({item}) => {
          return <Card burgers={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BurgerScreen;
