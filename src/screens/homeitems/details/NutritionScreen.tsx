import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {SIZES, FONTS, COLORS, icons} from '../../../constants';

const HEADER_HEIGHT = 350;

const NutrionScreen = ({navigation, route}:any) => {
  
  const Route = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [biryaniData, setBiryaniData] = useState(null);

  React.useEffect(() => {
    let array = []
   setBiryaniData(Route)
}, [null])

  function renderHeaderBar() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}>
        {/* Screen Overlay */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />

        {/* Header Bar Title */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
        
          <Text style={{color: COLORS.white2, ...FONTS.h3}}>
            {/* {Route?.author?.name} */}
          </Text>
        </Animated.View>

        {/* Back Button */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            //   borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGray,
            }}
          />
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
          }}>
          {/* <Image
            source={
              Route?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.darkGreen,
            }} */}
          {/* /> */}
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {/* Background Image */}
        <Animated.Image
          source={{uri:Route?.image}}
         
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />

        {/* Recipe Creator Card */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          {/* <RecipeCreatorCardInfo 
                   Route={Route}
                   /> */}
        </Animated.View>
      </View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        {/* Recipe */}
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.black}}>
            {Route?.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: COLORS.lightGray2,
              ...FONTS.body4,
            }}>
            
          </Text>
        </View>

        {/* Viewers */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
       
        </View>
      </View>
    );
  }

  function renderIngredientHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Nutrition
        </Text>
        {/* <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}>
          {Route?.ingredients.length} items
        </Text> */}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={biryaniData}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}

            {/* Info */}
            {renderRecipeInfo()}

            {/* Ingredient Title */}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            {/* Icon */}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>

            {/* Description */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.body2,
                  color: COLORS.black,
                }}>
                {item.description}
              </Text>
            </View>

            {/* Quantity */}
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.body3,
                }}>
                {item.quantity}
              </Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />

      {/* Header Bar */}
      {renderHeaderBar()}
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.darkGreen,
            borderRadius: 8,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 15,
            paddingTop: 15,
            paddingBottom: 15,
          }}
          onPress={() =>
            navigation.navigate('Cart', {cartItem: Route})
          }>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NutrionScreen;
