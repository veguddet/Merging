import React, { useEffect } from 'react';
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
} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import COLORS from './colors';
const width = Dimensions.get('window').width / 2 - 30;
import FoodData from '../../Data/FoodData'

const Home1 = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  useEffect(() => {
    let id= auth().currentUser.uid
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(snapshot => {
        
        // let snap = snapshot.docs.map(doc => {
        //   const data = doc.data();
        //   const doc_id = doc.id;
        //   return {doc_id, ...data};
         console.log(snapshot.data().firstname)
         setUserName(snapshot.data().firstname)
        // });
        //console.log(snap)
        // setBiryaniData(snap);
      });
  }, []);
  
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
  

  const categories = ['Food','Offers' ];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({food}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (food.name == 'Burger') {
            navigation.navigate('BurgerScreen', food);
          } 
          else if(food.name == 'Biryani'){
            navigation.navigate('BiryaniScreen', food);
          }
          else if(food.name == 'Pizza'){
            navigation.navigate('PizzaScreen', food);
          }
          else if(food.name == 'Frankie'){
            navigation.navigate('FrankieScreen', food);
          }
                  
        }}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}></View>

          <View
            style={{
              height: 130,
              alignItems: 'center',
            }}>
            <Image
              source={food.img}
              style={{width: 150, height: 160, borderRadius: 20, flex: 1}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {food.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            {/* <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              Rs{food.price}
            </Text> */}
            {/* <View
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
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Welcome {userName} !
          </Text>
        </View>
        
      </View>

      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={FoodData}
        renderItem={({item}) => {
          return <Card food={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold',padding:20},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height:200,
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
export default Home1;
