import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
var {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: width,
    backgroundColor: 'gray',
    height: 60,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  cartTab: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: COLORS.DEFAULT_GREEN,
    left: 15,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});
