import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {CategoryCard, Slider, TrendingCard} from '../../components';
import {COLORS, dummyData, images, SIZES} from '../../constants';
import {styles} from './style';

const Home1 = ({navigation}: any) => {
  const [userName, setUserName] = React.useState('');
  const [userImage, setUserImage] = React.useState('');
  const [searchText, setsearchtext] = React.useState('');
  const [FilteredData, setFilter] = React.useState('');
  const {cartList} = useSelector(state => state.cartReducer);
  const [address, setAddress] = React.useState('');
  useFocusEffect(
    useCallback(() => {
      let id = auth().currentUser.uid;
      const subscriber = firestore()
        .collection('users')
        .doc(id)
        .get()
        .then(snapshot => {
          setUserName(snapshot.data().firstname);
          setUserImage(snapshot.data().image);
          setAddress(snapshot.data().city);
        });
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []),
  );

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to miss your favaourite food?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const handleNavigation = (item: any) => {
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
      <View style={styles.header}>
        {/* Text */}
        <View
          style={{
            flex: 1,
          }}>
          <View style={{width: '80%', flexDirection: 'row'}}>
            <Icon1 name="map-marker-radius" color="#FF6347" size={20} />
            <Text style={styles.address}>{address},</Text>
          </View>
          <Text style={styles.username}>Hello {userName},</Text>

          <Text style={styles.query}>What you want to Eat today?</Text>
        </View>

        {/* Image */}
        <View>
          <TouchableOpacity onPress={() => navigation.jumpTo('ProfileTab')}>
            <Image
              source={
                userImage
                  ? {uri: 'data:image/jpeg;base64,' + userImage}
                  : require('../../assets/user2.png')
              }
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderScrollHeader() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 20,
          marginLeft: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('BurgerScreen')}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/FoodImages/burger.jpg')}
              style={styles.img1}
            />
            <Text style={styles.text1}>Burgers</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PizzaScreen')}>
          <View style={styles.container1}>
            <Image
              source={require('../../assets/FoodImages/Pizza.png')}
              style={styles.img1}
            />
            <Text style={styles.text1}>Pizza</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BiryaniScreen')}>
          <View style={styles.container1}>
            <Image
              source={require('../../assets/FoodImages/Biryani.jpg')}
              style={styles.img1}
            />
            <Text style={styles.text1}>Biryani</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('FrankieScreen')}>
          <View style={styles.container1}>
            <Image
              source={require('../../assets/FoodImages/frankie.jpg')}
              style={styles.img1}
            />
            <Text style={styles.text1}>Frankie</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View style={styles.recipe}>
        {/* Image */}
        <View style={styles.container4}>
          <Image source={images.recipe} style={styles.img2} />
        </View>

        {/* Text */}
        <View style={styles.container5}>
          <Text style={styles.text5}>
            You have {cartList.length} items in your cart that you haven't tried
            yet
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 5,
            }}
            onPress={() => navigation.jumpTo('Carttab')}>
            <Text style={styles.text6}>See Items</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View>
        <Text style={styles.text7}>Categories</Text>

        <FlatList
          data={dummyData.trendingRecipes}
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
    <View style={styles.statusbar}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.DEFAULT_WHITE}
        translucent={false}
      />
      <FlatList
        // marginTop={20}
        // data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Scroll Header */}
            {renderScrollHeader()}

            {/* Swiper */}
            {<Slider />}

            {/* See Recipe Card */}
            {cartList.length ? renderSeeRecipeCard() : <Text></Text>}

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
