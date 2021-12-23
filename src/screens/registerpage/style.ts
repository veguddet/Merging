import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import { Display } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textContainer: {
    marginTop: '1%',
    marginBottom: '1%',
    top: 10,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  signinButton: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 10,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: COLORS.DEFAULT_WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
});
