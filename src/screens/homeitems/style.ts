import {Dimensions, StyleSheet} from 'react-native';
import {Display} from '../../utils';
import {COLORS, FONTS} from './../../constants/theme';

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
