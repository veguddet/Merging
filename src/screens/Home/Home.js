import React, {useCallback, useEffect, useLayoutEffect} from 'react';
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
import { useFocusEffect } from '@react-navigation/core';
import { useSelector } from 'react-redux';

const Home1 = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  const [userImage, setUserImage] = React.useState('');
  const [searchText, setsearchtext] = React.useState('');
  const [FilteredData, setFilter] = React.useState('');
  const { cartList } = useSelector(state => state.cartReducer);
  useFocusEffect(useCallback(() => {

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
        setUserImage(snapshot.data().image);
        // });
        //console.log(snap)
        // setBiryaniData(snap);
      });
  }, []))

  const searchData = text => {
    if (text) {
      const newData = this.state.data.filter(item => {
        const itemData = item.text
          ? item.text.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({FilteredData:newData})
      this.setState({text})
      // setText(text);
    } else {
      this.setState({FilteredData:this.state.data})
      this.setState({text:''})
    }
  };

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
            // source={require('../../assets/images/person.png')}
            source = {userImage? {uri : 'data:image/jpeg;base64,' + userImage}:require('../../assets/profile.png')}
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
          value={searchText}
          onChangeText={text => this.searchData(text)}
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
          marginHorizontal: SIZES.padding/2,
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
            paddingVertical: SIZES.radius/2,
          }}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            You have {cartList.length} items in your cart that you haven't tried yet
          </Text>

          <TouchableOpacity
            style={{
              marginTop:5,
            }}
            onPress={() => navigation.jumpTo('Carttab')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Items(Go to Cart)
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
        paddingTop:10
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
            {/* {renderSearchBar()} */}

            {/* See Recipe Card */}
            {renderSeeRecipeCard()}

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
