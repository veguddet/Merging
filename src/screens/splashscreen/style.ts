import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DEFAULT_GREEN,
  },
  image: {
    height: 120,
    width: 120,
  },
  titleText: {
    color: 'white',
    fontSize: 26,
    fontFamily: FONTS.POPPINS_LIGHT,
    paddingTop: 16,
  },
});
