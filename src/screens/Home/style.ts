import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  address: {
    color: COLORS.DEFAULT_BLACK,
    ...FONTS.h4,
    fontWeight: '500',
    paddingLeft: 5,
  },
  username: {
    color: COLORS.darkGreen,
    fontSize: 17,
  },
  query: {
    marginTop: 3,
    color: COLORS.gray,
    ...FONTS.body3,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.LIGHT_GREEN,
    marginHorizontal: 10,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  img1: {
    height: 40,
    width: 40,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  container1: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.LIGHT_GREY2,
    marginHorizontal: 10,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  recipe: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding / 2,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  container4: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img2: {
    width: 70,
    height: 70,
  },
  container5: {
    flex: 1,
    paddingVertical: SIZES.radius / 2,
  },
  text5: {
    width: '70%',
    ...FONTS.body4,
  },
  text6: {
    color: COLORS.darkGreen,
    textDecorationLine: 'underline',
    ...FONTS.h4,
  },
  text7: {
    marginHorizontal: SIZES.padding,
    color: COLORS.black,
    ...FONTS.h2,
    fontWeight: 'bold',
  },
  statusbar: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
});
