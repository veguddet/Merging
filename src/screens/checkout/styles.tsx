
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
var {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    topview: {
      flex: 1,
       marginTop:30
    },
    topCardView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
     
    },
    addeditems: {
      fontSize: 28,
      color: "#228b22",
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
      paddingBottom: 5,
    },
    imagelink: {
      width: 120,
      height: 120,
    },
    text199view: {
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'absolute',
      marginTop: 60,
      paddingLeft:10,
      paddingTop:40,
      fontWeight: 'bold',
      fontSize: 20,
      
      
    },
    text199: {
      width:100,
   borderRadius:10,
   height:40,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"#228b22",
   right:120,
   color: '#000000',
    fontWeight: 'bold',
    borderColor:'#000000',
    
   
    
    },
    text19: {
      fontWeight: 'bold',
       color: `#f0ffff`,
       fontSize: 15,
       paddingRight:5,
       
    
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
      backgroundColor:"#228b22",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    amountview: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 10,
      
    },
    amount: {
      fontSize: 20,
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