import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../constants';

const CustomFlatlist = ({data}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => navigation.navigate('Nutrition', data)}>
      {/* Image */}
      <Image source={{uri: data.image}} style={styles.image} />

      {/* Details */}
      <View style={styles.detailsContainer}>
        {/* Name */}
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.caloriesView}>
          <Text style={{fontSize: 16}}>Total Calories : {data.calories}</Text>
          <Image
            source={require('../assets/FoodImages/caloriesicon.png')}
            style={styles.calorieIcon}
          />
        </View>
        <Text style={styles.price}>Rs : {data.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomFlatlist;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  detailsContainer: {
    width: '65%',
    paddingHorizontal: 20,
  },
  name: {
    flex: 1,
    ...FONTS.h2,
    color: COLORS.black,
  },
  caloriesView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calorieIcon: {
    height: 25,
    width: 25,
  },
  price: {
    ...FONTS.h3,
    paddingBottom: 20,
    color: COLORS.DEFAULT_GREEN,
  },
});
