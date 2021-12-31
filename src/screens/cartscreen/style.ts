// import {Dimensions, StyleSheet} from 'react-native';
// import {COLORS} from '../../constants';
// var {width} = Dimensions.get('window');

// export const styles = StyleSheet.create({
//   topview: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   topCardView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   addeditems: {
//     fontSize: 26,
//     color: COLORS.DEFAULT_GREEN,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 5,
//   },
//   height20: {
//     height: 20,
//   },
//   imageview: {
//     backgroundColor: COLORS.LIGHT_GREY,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: COLORS.DEFAULT_GREY,
//     paddingLeft: 10,
//     borderRadius: 10,
//   },
//   imagelink: {
//     width: 150,
//     height: 150,
//     borderRadius: 5,
//   },
//   text199view: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     position: 'absolute',
//     marginTop: 80,
//     paddingLeft: 30,
//     paddingTop: 50,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   text199: {
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 5,
//     backgroundColor: '#228b22',
//     color: '#000000',
//     fontWeight: 'bold',
//     borderColor: '#000000',
//   },
//   borderBtn: {
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 40,
//     height: 40,
//   },
//   borderBtnText: {
//     fontWeight: 'bold',
//     fontSize: 28,
//   },
//   buyBtn: {
//     width: 170,
//     height: 50,
//     backgroundColor: COLORS.DEFAULT_GREEN,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   text19: {
//     fontWeight: 'bold',
//     color: `#f0ffff`,
//     fontSize: 20,
//     paddingRight: 10,
//   },
//   text1: {
//     fontWeight: 'bold',
//     color: COLORS.DEFAULT_GREEN,
//     fontSize: 20,
//     paddingLeft: 20,
//   },
//   height10: {
//     height: 20,
//   },
//   counter: {
//     paddingHorizontal: 8,
//     fontWeight: 'bold',
//   },
//   amountview: {},
//   amount: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginRight: 50,
//   },
//   touch: {
//     width: 130,
//     height: 50,
//     backgroundColor: '#00B761',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   order: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   cardView: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     padding: 10,
//     paddingTop: 18,
//     justifyContent: 'flex-end',
//     paddingLeft: 20,
//   },
//   itemName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   counterView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//     justifyContent: 'space-evenly',
//   },
//   counterText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 10,
//   },
//   totalView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: '3%',
//     marginTop: '3%',
//     alignItems: 'center',
//   },
//   emptyCartImage: {
//     width: 400,
//     height: 400,
//     marginBottom: '37%',
//   },
// });


import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
var {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  topview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topCardView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  addeditems: {
    fontSize: 26,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  height20: {
    height: 20,
  },
  imageview: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    paddingLeft: 20,
    borderRadius: 10,
  },
  imagelink: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  text199view: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 80,
    paddingLeft: 30,
    paddingTop: 50,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text199: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#228b22',
    color: '#000000',
    fontWeight: 'bold',
    borderColor: '#000000',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buyBtn: {
    width: 170,
    height: 50,
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text19: {
    fontWeight: 'bold',
    color: `#f0ffff`,
    fontSize: 20,
    paddingRight: 10,
  },
  text1: {
    fontWeight: 'bold',
    color: COLORS.DEFAULT_GREEN,
    fontSize: 20,
    paddingLeft: 20,
  },
  height10: {
    height: 20,
  },
  counter: {
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  amountview: {},
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 50,
  },
  touch: {
    width: 130,
    height: 50,
    backgroundColor: '#00B761',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  order: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  cardView: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
    paddingTop: 18,
   justifyContent: 'flex-end',
    paddingLeft: 5,
  },
  itemName: {
    //fontWeight: 'bold',
    fontSize: FONTS.h2.fontSize,
    marginBottom:5,
    marginLeft:20,
    color: COLORS.DEFAULT_BLACK,
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    marginRight:50
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  infoBoxWrapper: {
  flexDirection: 'row',
    marginTop:10,
    height: 35,
    },
    infoBox: {
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    },
    
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
    marginTop: '3%',
    alignItems: 'center',
  },
  emptyCartImage: {
    // width: 360,
    // height: 300,
    width: 400,
    height: 400,
    marginBottom: '37%',
  },
  boarder: {
    borderWidth:0.2,
    borderColor:COLORS.DEFAULT_GREY,
    width:'100%',
  },
  emptyCartText: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingBottom: 5,
    textAlign: 'center',
    color: COLORS.DEFAULT_BLACK,
  },
  emptyCartText2: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingBottom: 30,
    textAlign: 'center',
    color: COLORS.DEFAULT_BLACK,
  },
});