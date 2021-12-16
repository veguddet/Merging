// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// import COLORS from '../Home/colors';
// import firestore from '@react-native-firebase/firestore';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';
// const width = Dimensions.get('window').width / 2 - 30;

// const PizzaScreen = ({navigation}: any) => {
//   const [loading, setLoading] = useState(true); // Set loading to true on component mount
//   const [pizzaData, setPizzaData] = useState(null); // Initial empty array of users

//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('pizzas')
//       .get()
//       .then(snapshot => {
//         let snap = snapshot.docs.map(doc => {
//           const data = doc.data();

//           const doc_id = doc.id;

//           return {doc_id, ...data};
//         });
//         //console.log(snap)
//         setPizzaData(snap);
//       });
//   }, []);

//   console.log(pizzaData);

//   const Card = ({pizza}: any) => {
//     return (
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => navigation.navigate('PizzaDetails', pizza)}>
//         <View style={style.card}>
//           <View
//             style={{
//               flex: 1,
//               alignItems: 'center',
//             }}>
//             <Image
//               // source={{uri: item.img}}
//               source={{uri: pizza.image}}
//               style={{width: 150, height: 150, borderRadius: 20}}
//             />
//           </View>
//           <Text style={{fontSize: 19, fontWeight: 'bold',paddingTop:5}}>{pizza.name}</Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginTop:5,
//             }}>
//             <Text style={{fontSize: 19, fontWeight: 'bold',}}>
//               Rs {pizza.price}
//             </Text>

//             <View style={{justifyContent:'center',alignItems:'center'}}  >
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//             <IconAntDesign name="right" size={20} color="green" />
//           </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         paddingHorizontal: 20,
//         backgroundColor: COLORS.white,
//         marginTop: 50,
//       }}>
//       <View style={style.header}>
//       <View style={{flexDirection: 'row',alignItems:'center'}}>
//         <TouchableOpacity    onPress={() => navigation.goBack()}> 
          
//           <IconAntDesign name="arrowleft" size={30} color="#900" />
//         </TouchableOpacity>
//           <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold',paddingLeft:20}}>
//             Pizza!
//           </Text>
//         </View>
//       </View>
//       <View style={{marginTop: 30, flexDirection: 'row'}}>
//         <View style={style.searchContainer}>
//           <TextInput placeholder="Search" style={style.input} />
//         </View>
//         <View style={style.sortBtn}></View>
//       </View>

//       <FlatList
//         columnWrapperStyle={{justifyContent: 'space-between'}}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           marginTop: 10,
//           paddingBottom: 50,
//         }}
//         numColumns={2}
//         data={pizzaData}
//         renderItem={({item}) => {
//           return <Card pizza={item} />;
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   categoryContainer: {
//     flexDirection: 'row',
//     marginTop: 30,
//     marginBottom: 20,
//     justifyContent: 'space-between',
//   },
//   categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
//   categoryTextSelected: {
//     color: COLORS.green,
//     paddingBottom: 5,
//     borderBottomWidth: 2,
//     borderColor: COLORS.green,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: COLORS.light,
//     width,
//     marginHorizontal: 2,
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 15,
//   },
//   header: {
//     marginTop: 30,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   searchContainer: {
//     height: 50,
//     backgroundColor: COLORS.light,
//     borderRadius: 10,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     flex: 1,
//     color: COLORS.dark,
//   },
//   sortBtn: {
//     marginLeft: 10,
//     height: 50,
//     width: 50,
//     borderRadius: 10,
//     backgroundColor: COLORS.green,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default PizzaScreen;

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
  ScrollView,
} from 'react-native';

//import COLORS from '../Home/colors';
import { COLORS, dummyData, FONTS } from '../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BurgerData from '../../Data/BurgerData';
import firestore from '@react-native-firebase/firestore';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from '../splashscreen/style';
import caloriesicon from './../../assets/FoodImages/caloriesicon.png';
//import caloriesicon from '../../../assets/FoodImages/caloriesicon.png';
import CategoryCard from './../../components/CategoryCard';
import PizzaData from '../../Data/PizzaData';
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

  const Card = ({pizza}: any) => {
    return (
      // <TouchableOpacity
      //   activeOpacity={0.8}
      //   onPress={() => navigation.navigate('PizzaDetails', pizza)}>
      //   <View style={style.card}>
      //     <View
      //       style={{
      //         flex: 1,
      //         alignItems: 'center',
      //       }}>
      //       <Image
      //         source={{uri: pizza.image}}
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
      //     }}>
      //         {pizza.name}
      //       </Text>
      //       <View style={{flexDirection: 'row',alignItems: 'center',}}>
      //     {/* <Text style={style.nutritionText}>
      //         Carbs : {pizza.carbs}
      //       </Text>
      //       <Text style={style.nutritionText}>
      //         Fat : {pizza.fats}
      //       </Text> */}
      //       <Text style={style.nutritionText}>
      //         Calories : {pizza.calories}
      //       </Text>
      //       <Image source={caloriesicon} style={{height: 30, width: 25}} />
      //     </View>

      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //       }}>
      //       <Text style={{
      //         fontSize: 18, 
      //         fontWeight: 'bold',
      //         paddingLeft:6, 
      //         color:COLORS.DEFAULT_YELLOW 
      //         }}>
      //         Rs {pizza.price}
      //       </Text>

      //       <View style={{justifyContent:'center',alignItems:'center'}}  >
      //         <TouchableOpacity 
      //         onPress={() => navigation.navigate('PizzaDetails', pizza)}
      //         >
      //       <IconAntDesign name="right" size={20} 
      //      // color={COLORS.DEFAULT_BLACK} 
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
      onPress={() => navigation.navigate('BurgerDetails' , pizza )}
  >
      {/* Image */}
      <Image 
          // source={{uri:categoryItem.image}}
          source={{uri: pizza.image}}
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
              {pizza.name}
          </Text>
          <View style={{flexDirection:'row',alignItems: 'center',}}>
        <Text style={{fontSize: 16,}}>Total Calories : {pizza.calories}</Text>
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
             Rs : {pizza.price}
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAntDesign name="arrowleft" size={30} color={COLORS.DEFAULT_BLACK} />
          </TouchableOpacity> */}
           <Ionicons 
                name="chevron-back-outline" 
                size={30} 
               // color={COLORS.DEFAULT_BLACK}
                onPress={() => navigation.goBack()} />

          <Text
            style={{
              fontSize: 24,
              color: COLORS.DEFAULT_GREEN,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingBottom: 10,
            }}>
            pizza
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
      //  numColumns={2}
        data={burgerData}
        renderItem={({item}) => {
          return <Card pizza={item} />;
        }}
      />

       {/* <FlatList
         // marginTop={20}
          data={PizzaData}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent= {
        // }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{
               // marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
            />
          );
        }}
      /> */}
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
  nutritionText: {
    fontSize: 16, 
   // fontWeight: 'bold',
    paddingLeft:6, 
    color:COLORS.DEFAULT_BLACK 
  },
});

export default PizzaScreen;

