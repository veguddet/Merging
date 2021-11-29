import React from "react";
import { Dimensions, StyleSheet } from "react-native";
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
  });