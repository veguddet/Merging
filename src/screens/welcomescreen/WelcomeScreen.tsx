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
          uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
        }}
        style={styles.imageContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text
              style={styles.buttonText}
              //  onPress={() => navigation.navigate('Home1')}>
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
