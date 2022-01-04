import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 600,
  },
  buttons: {
    width: '40%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: COLORS.DEFAULT_GREEN,
    bottom: 80,
    top: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  headingText: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
  },
  description: {
    marginTop: SIZES.radius,
    width: '70%',
    color: COLORS.gray,
    ...FONTS.body3,
  },
});
