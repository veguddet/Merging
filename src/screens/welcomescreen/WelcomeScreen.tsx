import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
const WelcomeScreen = ({navigation}: any) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYSotR6O1bhHCUmHIlrlbsHCkGV6X_0kKWQ&usqp=CAU',
        }}
        style={styles.imageContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate('Login')}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate('Register')}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default WelcomeScreen;
