import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from './../../constants/theme';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.DEFAULT_GREEN,
    margin: 10,
  },
  priceTagText: {
    color: COLORS.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemNameView: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fireImage: {
    height: 50,
    width: 50,
  },
  image: {
    width: '100%',
    height: 250,
  },
  fireImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },
  mainView: {
    elevation: 3,
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 7,
    marginRight: 10,
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    color: COLORS.DEFAULT_BLACK,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  Icon: {
    height: 30,
    width: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  detailsContainer: {
    flex: 0.55,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  pfcView: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.DEFAULT_YELLOW,
    width: 90,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
  },
  nutritionsText: {
    marginVertical: 5,
    fontSize: 18,
    marginLeft: 30,
    paddingTop: 3,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
  },
  checkboxPrice: {
    marginLeft: 10,
    marginTop: 12,
    fontSize: 15,
  },
  pfcText: {
    fontSize: 18,
    color: COLORS.DEFAULT_GREEN,
    paddingTop: 5,
  },
  icon1: {
    width: 40,
    height: 40,
  },
  nutritionText: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },
  checkBoxTopView: {
    flex: 1,

    justifyContent: 'space-around',
  },
  innercheckBoxView: {
    flex: 1,
    flexDirection: 'row',
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  innerCounterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  addToCartText: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  pfcTopView: {
    width: '80%',
    paddingLeft: 5,
  },
  innermainView: {
    width: '25%',
    paddingLeft: 7,
  },
});
