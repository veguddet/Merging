import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const TrendingCard = ({containerStyle, recipeItem, onPress}: any) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Background Image */}
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 170,
          height: 200,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Category */}
      <View
        style={{
          position: 'absolute',
          top: 15,
          left: 25,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          {recipeItem.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;
