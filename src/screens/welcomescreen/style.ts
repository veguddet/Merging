import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    imageContainer: {
        height: '100%',
        width: '100%',
     },
    buttonContainer: {
         flexDirection: 'row', 
        // paddingVertical: 20,
        // marginHorizontal: 20,
         marginVertical: 700
     },
    buttons: {
    width: "40%",
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#841584",
    bottom:80,
    top:20,
  },
  buttonText: {
      fontSize: 16,
      color: "white",
  },
});