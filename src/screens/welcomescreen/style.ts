import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS } from './../../constants/theme';

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
        // marginTop: '160%',
     },
    buttons: {
    width: "40%",
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: COLORS.DEFAULT_GREEN,
   // backgroundColor: COLORS.darkLime,
    bottom:80,
    top:20,
  },
  buttonText: {
      fontSize: 16,
      color: "white",
     // fontFamily: FONTS.POPPINS_EXTRA_BOLD
  },
});