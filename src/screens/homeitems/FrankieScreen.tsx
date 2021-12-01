import React, { useEffect, useState } from 'react';
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
import firestore from '@react-native-firebase/firestore';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width / 2 - 30;

const FrankieScreen = ({navigation}:any) => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [frankieData, setfrankieData] = useState(null); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('frankie')
      .get()
      .then(
        snapshot => {

          let snap = snapshot.docs.map(doc => {

            const data = doc.data();

            const doc_id = doc.id;
          


            return { doc_id, ...data };

          });
         //console.log(snap)
         setfrankieData(snap)
         
        })
  }, []);

  





  const Card = ({frankie}:any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>  navigation.navigate('DetailsScreen', frankie)}>
        <View style={style.card}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
             // source={{uri: item.img}}
             source={{uri:frankie.image}}
              style={{width: 150, height: 200, borderRadius: 20}}
            />
          </View>
          <Text style={{fontSize: 19, fontWeight: 'bold',}}>
            {frankie.name}
            </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              Rs{frankie.price}
            </Text>
            
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
           
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white,marginTop:50}}>
      <View style={style.header}>
      <View style={{flexDirection: 'row',alignItems:'center'}}>
        <TouchableOpacity    onPress={() => navigation.goBack()}> 
          
          <IconAntDesign name="arrowleft" size={30} color="#900" />
        </TouchableOpacity>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold',paddingLeft:20}}>
            frankie!
          </Text>
         
        </View>
      
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
        
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
         
        </View>
      </View>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={frankieData}
        renderItem={({item}) => {
          return <Card frankie={item} />;
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
export default FrankieScreen;
