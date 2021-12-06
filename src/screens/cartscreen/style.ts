import React from "react";
import { Dimensions, StyleSheet } from "react-native";
var {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    topview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
       marginTop:50
    },
    topCardView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    addeditems: {
      fontSize: 28,
      color: 'black',
      fontWeight: 'bold',
      marginTop:30
    },
    height20: {
      height: 20,
    },
    imageview: {
      width: width - 20,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderColor: '#cccccc',
      paddingBottom: 10,
    },
    imagelink: {
      width: 100,
      height: 100,
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
      height: 20,
    },
    counter: {
      paddingHorizontal: 8,
      fontWeight: 'bold',
    },
    buyBtn: {
      width: 170,
      height: 50,
      backgroundColor:'#00B761',
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
      backgroundColor:'#00B761',
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