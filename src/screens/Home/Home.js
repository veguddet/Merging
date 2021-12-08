// import React, { useEffect } from 'react';
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
// } from 'react-native';
// import auth, { firebase } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// import COLORS from './colors';
// const width = Dimensions.get('window').width / 2 - 30;
// import FoodData from '../../Data/FoodData'

// const Home1 = ({navigation}) => {
//   const [userName, setUserName] = React.useState('');
//   useEffect(() => {
//     let id= auth().currentUser.uid
//     const subscriber = firestore()
//       .collection('users')
//       .doc(id)
//       .get()
//       .then(snapshot => {

//         // let snap = snapshot.docs.map(doc => {
//         //   const data = doc.data();
//         //   const doc_id = doc.id;
//         //   return {doc_id, ...data};
//          console.log(snapshot.data().firstname)
//          setUserName(snapshot.data().firstname)
//         // });
//         //console.log(snap)
//         // setBiryaniData(snap);
//       });
//   }, []);

//   const [catergoryIndex, setCategoryIndex] = React.useState(0);

//   const categories = ['Food','Offers' ];

//   const CategoryList = () => {
//     return (
//       <View style={style.categoryContainer}>
//         {categories.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             activeOpacity={0.8}
//             onPress={() => setCategoryIndex(index)}>
//             <Text
//               style={[
//                 style.categoryText,
//                 catergoryIndex === index && style.categoryTextSelected,
//               ]}>
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const Card = ({food}) => {
//     return (
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => {
//           if (food.name == 'Burger') {
//             navigation.navigate('BurgerScreen', food);
//           }
//           else if(food.name == 'Biryani'){
//             navigation.navigate('BiryaniScreen', food);
//           }
//           else if(food.name == 'Pizza'){
//             navigation.navigate('PizzaScreen', food);
//           }
//           else if(food.name == 'Frankie'){
//             navigation.navigate('FrankieScreen', food);
//           }
//         }}
//>
//         <View style={style.card}>
//           <View style={{alignItems: 'flex-end'}}></View>

//           <View
//             style={{
//               height: 130,
//               alignItems: 'center',
//             }}>
//             <Image
//               source={food.img}
//               style={{width: 150, height: 160, borderRadius: 20, flex: 1}}
//             />
//           </View>

//           <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
//             {food.name}
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginTop: 5,
//             }}>
//             {/* <Text style={{fontSize: 19, fontWeight: 'bold'}}>
//               Rs{food.price}
//             </Text> */}
//             {/* <View
//               style={{
//                 height: 25,
//                 width: 25,
//                 backgroundColor: COLORS.green,
//                 borderRadius: 5,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
//                 +
//               </Text>
//             </View> */}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
//       <View style={style.header}>
//         <View>
//           <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
//           <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
//             Welcome {userName} !
//           </Text>
//         </View>

//       </View>

//       <CategoryList />
//       <FlatList
//         columnWrapperStyle={{justifyContent: 'space-between'}}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           marginTop: 10,
//           paddingBottom: 50,
//         }}
//         numColumns={2}
//         data={FoodData}
//         renderItem={({item}) => {
//           return <Card food={item} />;
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   categoryContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 20,

//   },
//   categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold',padding:20},
//   categoryTextSelected: {
//     color: COLORS.green,
//     paddingBottom: 5,
//     borderBottomWidth: 2,
//     borderColor: COLORS.green,
//   },
//   card: {
//     height:200,
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
// export default Home1;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, SIZES, images, dummyData} from '../../constants';
import {CategoryCard, TrendingCard} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home1 = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  useEffect(() => {
    let id = auth().currentUser.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(snapshot => {
        // let snap = snapshot.docs.map(doc => {
        //   const data = doc.data();
        //   const doc_id = doc.id;
        //   return {doc_id, ...data};
        console.log(snapshot.data().firstname);
        setUserName(snapshot.data().firstname);
        // });
        //console.log(snap)
        // setBiryaniData(snap);
      });
  }, []);

  const handleNavigation = item => {
    switch (item.name) {
      case 'Burger':
        navigation.navigate('BurgerScreen');
        break;
      case 'Biryani':
        navigation.navigate('BiryaniScreen');
        break;
      case 'Pizza':
        navigation.navigate('PizzaScreen');
        break;
      case 'Frankie':
        navigation.navigate('FrankieScreen');
        break;
    }

    // if (item.name == 'Burger') {
    //     navigation.navigate('BurgerScreen');
    //   }
    //   else if(item.name == 'Biryani'){
    //     navigation.navigate('BiryaniScreen');
    //   }
    //   else if(item.name == 'Pizza'){
    //     navigation.navigate('PizzaScreen');
    //   }
    //   else if(item.name == 'Frankie'){
    //     navigation.navigate('FrankieScreen');
    //   }
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 90,
        }}>
        {/* Text */}
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
              fontWeight: 'bold',
            }}>
            Hello {userName},
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            What you want to Eat today?
          </Text>
        </View>

        {/* Image */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/images/person.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          //  source={icons.search}
          style={{
            //  width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <Icon name="search-outline" size={25} />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search your favourite food ! "
        />
      </View>
    );
  }

  function renderScrollHeader() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 20,
          marginLeft: 10,
        }}>
        <TouchableOpacity
         onPress={() => navigation.navigate('BurgerScreen')}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#f9dd7a',
              // backgroundColor: COLORS.gray,
              marginHorizontal: 10,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../../assets/FoodImages/burger.jpg')}
              style={{height: 40, width: 40}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10,
              }}>
              Burgers
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PizzaScreen')}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#e5e4eb',
              marginHorizontal: 10,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../../assets/FoodImages/Pizza.png')}
              style={{height: 40, width: 40}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10,
              }}>
              Pizza
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('BiryaniScreen')}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#e5e4eb',
              marginHorizontal: 10,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../../assets/FoodImages/Biryani.jpg')}
              style={{height: 40, width: 40}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10,
              }}>
              Biryani
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('FrankieScreen')}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#e5e4eb',
              marginHorizontal: 10,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../../assets/FoodImages/frankie.jpg')}
              style={{height: 40, width: 40}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10,
              }}>
              Frankie
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        {/* Text */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            You have 2 items in your cart that you haven't tried yet
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log('See Items')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Items
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            color: COLORS.black,
            ...FONTS.h2,
            fontWeight: 'bold',
          }}>
          Categories
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          // horizontal
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                containerStyle={{
                  paddingLeft: 15,
                }}
                recipeItem={item}
                onPress={() => handleNavigation(item)}
                //     onPress={() => {
                //                   if (item.name == 'Burger') {
                //                     navigation.navigate('BurgerScreen');
                //                   }
                //                   else if(item.name == 'Biryani'){
                //                     navigation.navigate('BiryaniScreen');
                //                   }
                //                   else if(item.name == 'Pizza'){
                //                     navigation.navigate('PizzaScreen');
                //                   }
                //                   else if(item.name == 'Frankie'){
                //                     navigation.navigate('FrankieScreen');
                //                   }
                //                 }}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        {/* Section Title */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.black,
            fontWeight: 'bold',
          }}>
          Trending Food Items
        </Text>

        {/* View All */}
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      <FlatList
        marginTop={20}
        //  data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Search Bar */}
            {renderSearchBar()}

            {/* See Recipe Card */}
            {/* {renderSeeRecipeCard()} */}

            {/* {  Scroll Header  } */}
            {renderScrollHeader()}

            {/* Trending Section */}
            {renderTrendingSection()}

            {/* Category Header */}
            {/* {renderCategoryHeader()} */}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default Home1;
