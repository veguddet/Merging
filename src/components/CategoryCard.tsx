import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../src/constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Image */}
      <Image
        source={{uri: categoryItem.image}}
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}>
        {/* Name */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          {categoryItem.name}
        </Text>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          {categoryItem.calories}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
