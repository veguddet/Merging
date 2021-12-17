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
import firestore from '@react-native-firebase/firestore';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { FONTS, COLORS } from '../../constants';
import Ionicons from "react-native-vector-icons/Ionicons";
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
        //console.log(snap)
        setFrankieData(snap);
      });
  }, []);

  console.log(FrankieData);

  const Card = ({Frankie}: any) => {
    return (
      // <TouchableOpacity
      //   activeOpacity={0.8}
      //   onPress={() => navigation.navigate('Nutrition', Frankie)}>
      //   <View style={style.card}>
      //     <View
      //       style={{
      //         flex: 1,
      //         alignItems: 'center',
      //       }}>
      //       <Image
      //         source={{uri: Frankie.image}}
      //         style={{
      //           width: 325,
      //           height: 200, 
      //           borderRadius: 10
      //         }}
      //       />
      //     </View>
      //     <Text style={{
      //       fontSize: 18, 
      //       color:COLORS.DEFAULT_BLACK,
      //       fontFamily: FONTS.POPPINS_MEDIUM,
      //       padding:5
      //       }}>{Frankie.name}
      //       </Text>
      //       <View style={{flexDirection:'row',alignItems: 'center',}}>
      //   <Text style={{fontSize: 16, paddingLeft: 5,}}>Total Calories : {Frankie.calories}</Text>
      //   <Image
      //     source={require('../../assets/FoodImages/caloriesicon.png')}
      //     style={{height:25,width:25}}
      //     />
      //   </View>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //       }}>
      //       <Text style={{
      //          fontSize: 18, 
      //          fontWeight: 'bold',
      //          paddingLeft:8, 
      //          color:COLORS.DEFAULT_YELLOW 
      //         }}>
      //         Rs {Frankie.price}
      //       </Text>

      //       <View style={{justifyContent:'center',alignItems:'center'}}  >
      //         <TouchableOpacity 
      //       onPress={() => navigation.navigate('Nutrition', Frankie)}
      //         >
      //       <IconAntDesign name="right" size={20} 
      //      // color={COLORS.DEFAULT_GREEN} 
      //       />
      //     </TouchableOpacity>
      //       </View>
      //     </View>
      //   </View>
      // </TouchableOpacity>
      <TouchableOpacity 
      style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          borderRadius: 12,
          backgroundColor: COLORS.gray2,
         // ...containerStyle
      }}
      onPress={() => navigation.navigate('Nutrition' , Frankie )}
  >
      {/* Image */}
      <Image 
          // source={{uri:categoryItem.image}}
          source={{uri: Frankie.image}}
         // resizeMode="contain"
          style={{
              width: 100,
              height: 100,
              borderRadius: 12,
          }}
      />

      {/* Details */}
      <View
         style={{
             width: '65%',
             paddingHorizontal: 20,
         }}
      >
          {/* Name */}
          <Text
             style={{
                 flex: 1,
                 ...FONTS.h2,
                 color: COLORS.black
             }}
          >
              {Frankie.name}
          </Text>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
        <Text style={{fontSize: 16,}}>Total Calories : {Frankie.calories}</Text>
        <Image
          source={require('../../assets/FoodImages/caloriesicon.png')}
          style={{height:25,width:25}}
          />
        </View>
          <Text
             style={{
                 flex: 1,
                 ...FONTS.h2,
                 color: COLORS.DEFAULT_GREEN
             }}
          >
             Rs : {Frankie.price}
          </Text>

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
      <View style={{flexDirection: 'row',alignItems:'center'}}>
        {/* <TouchableOpacity    
        onPress={() => navigation.goBack()}> 
          <IconAntDesign name="arrowleft" size={30} color={COLORS.LIGHT_GREEN} />
        </TouchableOpacity> */}
        <Ionicons 
                name="chevron-back-outline" 
                size={30} 
              //  color={COLORS.DEFAULT_GREEN}
                style={{paddingBottom: 5}}
                onPress={() => navigation.goBack()}
                />
          <Text style={{
             fontSize: 24,
             color: COLORS.DEFAULT_GREEN,
             fontWeight: 'bold',
             paddingLeft: 30,
             paddingBottom: 10,
            }}>
            Frankie
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
        data={FrankieData}
        renderItem={({item}) => {
          return <Card Frankie={item} />;
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
  },
});

export default FrankieScreen;
