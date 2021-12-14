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
  StatusBar,
} from 'react-native';

//import COLORS from '../Home/colors';
import { COLORS, FONTS } from '../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BurgerData from '../../Data/BurgerData';
import firestore from '@react-native-firebase/firestore';
import Ionicons from "react-native-vector-icons/Ionicons";
const width = Dimensions.get('window').width / 1 - 30;

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
              style={{
                width: 325,
                height: 200, 
                borderRadius: 10
              }}
            />
          </View>
          <Text style={{
            fontSize: 18, 
            color:COLORS.DEFAULT_BLACK,
            fontFamily: FONTS.POPPINS_MEDIUM,
            padding:5
            }}>{burgers.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between', 
            }}>
            <Text style={{
               fontSize: 18, 
               fontWeight: 'bold',
               paddingLeft:8, 
               color:COLORS.DEFAULT_YELLOW 
              }}>
              Rs {burgers.price}
            </Text>

            <View style={{justifyContent:'center',alignItems:'center'}}  >
              <TouchableOpacity 
             // onPress={() => navigation.goBack()}
              onPress={() => navigation.navigate('BurgerDetails', burgers)}
              >
            <IconAntDesign name="right" size={20} 
           // color={COLORS.DEFAULT_GREEN} 
            />
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
        backgroundColor: COLORS.DEFAULT_WHITE,
      }}>
      <StatusBar
      barStyle="light-content" 
      backgroundColor={COLORS.DEFAULT_GREEN}
      translucent={false} 
      />
      <View style={style.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAntDesign name="arrowleft" size={30} color={'black'}/>
          </TouchableOpacity> */}
          <Ionicons 
                name="chevron-back-outline" 
                size={30} 
                style={{paddingBottom: 5}}
               // color={COLORS.DEFAULT_GREEN}
                onPress={() => navigation.goBack()} />

          <Text
            style={{
              fontSize: 24,
             // color: COLORS.DEFAULT_BLACK,
              color: COLORS.DEFAULT_GREEN,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingBottom: 10,
            }}>
            Burgers
          </Text>
        </View>
      </View>

      <FlatList
       // columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 30,
        }}
       // numColumns={2}
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
    color: COLORS.DEFAULT_GREEN,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.DEFAULT_GREEN,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
   // width,
   // marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // backgroundColor: COLORS.DEFAULT_GREEN,
  },
});
export default BurgerScreen;
