
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
var {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  topview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  topCardView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addeditems: {
    fontSize: 28,
    color: '#228b22',
    fontWeight: 'bold',
    marginTop: 30,
  },
  height20: {
    height: 20,
  },
  imageview: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingLeft:10,
    borderRadius:10
  },
  imagelink: {
    width: 150,
    height: 150,
    borderRadius:5
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
    width: 40,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    backgroundColor: 'green',
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
    color: `#006400`,
    fontSize: 20,
  },
  height10: {
    height: 20,
  },
  counter: {
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  buyBtn: {
    width: 170,
    height: 50,
    backgroundColor: '#228b22',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  amountview: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
