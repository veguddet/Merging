import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Display } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textContainer: {
      marginTop: '2%',
      marginBottom: '2%',
      top: 40,
    },
    scrollView: {
      marginHorizontal: 10,
    },
    signinButton: {
      backgroundColor: COLORS.DEFAULT_GREEN,
    //  backgroundColor: COLORS.darkGreen,
      borderRadius: 8,
      marginHorizontal: 20,
      height: Display.setHeight(6),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
  },
  signinButtonText: {
      fontSize: 18,
      lineHeight: 18 * 1.4,
      color: COLORS.DEFAULT_WHITE,
      fontFamily: FONTS.POPPINS_MEDIUM,
  },
  });