import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

var {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  topview: {
    backgroundColor: 'white',
  },
  addeditems: {
    fontSize: 28,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  details: {
    fontSize: 18,
    color: COLORS.gray,
    marginBottom: 10,
    paddingLeft: 10,
  },
  items: {
    fontSize: 18,
    color: COLORS.gray,
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    paddingTop: 15,
    flexDirection: 'row',
    marginHorizontal: 1,
  },
  details1: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 12,
    marginRight: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
