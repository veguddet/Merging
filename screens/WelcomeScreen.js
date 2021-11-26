import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity, ImageBackground} from 'react-native';
import image from '../assets/burger1.png';

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={image} style={styles.imageContainer} >

      <View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}
        onPress={() => navigation.navigate("Login")}
        >LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}
        onPress={() => navigation.navigate("Register")}
        >REGISTER</Text>
      </TouchableOpacity>

      </View>
      </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
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
    bottom:50,
  },
  buttonText: {
      fontSize: 16,
      color: "white",
  },
});
export default WelcomeScreen