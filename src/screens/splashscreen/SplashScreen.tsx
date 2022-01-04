import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {styles} from './style';
import {COLORS} from './../../constants/theme';
import auth, {firebase} from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: any) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    handleLogin();
  }, [logged]);

  const handleLogin = () => {
    setTimeout(function () {
      auth().onAuthStateChanged(user => {
        if (user !== null) {
          navigation.navigate('Tabs');
        } else {
          console.log('elseaaa', user);

          navigation.navigate('Onboard');

          setLogged(true);
        }
      });
    }),
      4000;
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Image
        source={require('../../assets/images/plate.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.titleText}>Eat Healthy</Text>
    </View>
  );
};

export default SplashScreen;
