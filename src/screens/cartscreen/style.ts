import React from "react";
import { Dimensions, StyleSheet } from "react-native";
var {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    topview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addeditems: {
      fontSize: 28,
      color: 'black',
      fontWeight: 'bold',
    },
    height20: {
      height: 20,
    },
    imageview: {
      width: width - 20,
      margin: 10,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderColor: '#cccccc',
      paddingBottom: 10,
    },
    imagelink: {
      width: width / 3,
      height: width / 3,
    },
    text199view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text199: {
      fontWeight: 'bold',
      color: '#9fd236',
      fontSize: 20,
    },
    height10: {
      height: 10,
    },
    counter: {
      paddingHorizontal: 8,
      fontWeight: 'bold',
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
      backgroundColor: '#9fd236',
      width: width - 40,
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
    },
    order: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });