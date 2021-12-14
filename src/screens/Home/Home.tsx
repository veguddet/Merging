import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES, images, dummyData} from '../../constants';
import {CategoryCard, TrendingCard} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/core';
import { useSelector } from 'react-redux';

const Home1 = ({navigation}:any) => {
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
      //  console.log(snapshot.data().firstname);
        setUserName(snapshot.data().firstname);
        setUserImage(snapshot.data().image);
      });
  }, []))

  const handleNavigation = (item: any)=> {
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
            source = {userImage? {uri : 'data:image/jpeg;base64,' + userImage}:require('../../assets/user2.png')}
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

const banners = [
  'https://cdn.discoversg.com/wp-content/2017/11/Whatsnew-SzeChuan-banner-1440x600.jpg',
  'https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-biryani-festival-at-ameya-suites-2020-2-25-t-17-1-31.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7DhLwSA6guHewONhKqIkA5FmMG4Swy-V7g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIDLkzMV6rNcKj7gmDWEoM8RPVeK27iKwdw&usqp=CAU',
  'https://www.dominos.co.in/theme2/front/assets/banner2.png',
  'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/07/blog-banner-1-1030x538.jpg',
]
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height;

  function renderBanner() {
    const [imgActive, setimgActive] = useState(0);
    
  const onchange = (nativeEvent) => {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width)
      if(slide !=imgActive) {
        setimgActive(slide);
      }
    }
  }
    return(
      <View style={styles.container}>
        <View style={{ width: WIDTH,height:HEIGHT * 0.25,}}>
          <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{ width: WIDTH,height:HEIGHT * 0.25,}}
          >
            {
              banners.map((e, index) =>
              <Image 
              key={e}
              resizeMode = 'stretch'
              style={{ width: WIDTH,height:HEIGHT * 0.25,}}
              source={{uri: e}}
              />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
          {
      banners.map((e, index) =>
      <Text
       key={e}
       style={imgActive ==index ? styles.dotActive:styles.dot}
      >
       ● 
      </Text>
      )
    }
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // justifyContent:'center',
      // alignItems: 'center',
    },
    wrapDot: {
      position :'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignself: 'center',
      justifyContent:'center',
      alignItems: 'center',
    },
    dotActive: {
      margin:5,
      color:'black'
    },
    dot:{
      margin:5,
      color:'white'
    }
  });

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
             // backgroundColor: '#f9dd7a',
              backgroundColor: COLORS.LIGHT_GREEN,
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
            //  backgroundColor: '#e5e4eb',
              backgroundColor: COLORS.LIGHT_GREY2,
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
            //  backgroundColor: '#e5e4eb',
              backgroundColor: COLORS.LIGHT_GREY2,
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
             // backgroundColor: '#e5e4eb',
              backgroundColor: COLORS.LIGHT_GREY2,
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
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding/2,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
         
        }}>
        {/* Image */}
        <View
          style={{
            width: 150,
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
          paddingBottom={20}
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
              />
            );
          }}
        />
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
     <StatusBar
      barStyle="dark-content" 
      backgroundColor={COLORS.DEFAULT_WHITE}
      translucent={false} 
      />
      <FlatList
       // marginTop={20}
      //  data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Banner */}
            {renderBanner()}

            {/* See Recipe Card */}
            {renderSeeRecipeCard()}

            {/* Scroll Header */}
            {renderScrollHeader()}

            {/* Trending Section */}
            {renderTrendingSection()}

          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
            />
          );
        }}
      />
    </View>
  );
};

export default Home1;
