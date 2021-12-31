import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {COLORS, FONTS} from '../constants';
import {Display} from '../utils';

const Header = ({headerTitle, onpress, showCart}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        color={COLORS.DEFAULT_WHITE}
        onPress={onpress}
      />
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {showCart ? (
          <View>
          <Ionicons
            name="cart-outline"
            size={30}
            color={COLORS.DEFAULT_WHITE}
            onPress={() => navigation.navigate('Carttab')}
          />
          {cartList.length ? (
            <View style={styles.cartTab}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                {cartList.length}
              </Text>
            </View>
          ) : (
           null
          )}
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'space-evenly',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.DEFAULT_WHITE,
    //  lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  cartTab: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: COLORS.DEFAULT_WHITE,
    left: 15,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});

export default Header;
