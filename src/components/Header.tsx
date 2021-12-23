import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../constants';
import {Display} from '../utils';

const Header = ({headerTitle,onpress}:any) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        color={COLORS.DEFAULT_WHITE}
        onPress={onpress}
      />
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: COLORS.DEFAULT_GREEN,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.DEFAULT_WHITE,
    //  lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
});

export default Header;
