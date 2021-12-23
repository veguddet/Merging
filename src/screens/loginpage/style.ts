import {Dimensions, StyleSheet} from 'react-native';
import {Display} from '../../utils';
import {COLORS, FONTS} from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.DEFAULT_BLACK,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: COLORS.DEFAULT_BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: COLORS.DEFAULT_BLACK,
    flex: 1,
  },
  signinButton: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: 6,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signupButton: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: 6,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: COLORS.DEFAULT_WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: COLORS.DEFAULT_BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
