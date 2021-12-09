import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {styles} from './style';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" translucent />
      <Image
      source={require('../../assets/images/plate.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.titleText}>Food App</Text>
    </View>
  );
};
export default SplashScreen;
