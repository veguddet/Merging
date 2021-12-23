import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from './../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: COLORS.DEFAULT_RED,
    margin: 10,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  text1: {
    fontSize: 16,
    margin: 10,
    fontFamily: FONTS.POPPINS_LIGHT,
  },
});
