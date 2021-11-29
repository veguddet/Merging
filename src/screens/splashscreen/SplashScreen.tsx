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
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1MNr7YXhLO48AN4y5k_u7KaTbYMreXfrvw&usqp=CAU',
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.titleText}>Food App</Text>
    </View>
  );
};
export default SplashScreen;
