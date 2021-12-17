import React, {useEffect} from 'react';
import {View, Text,Image, StatusBar, StyleSheet,} from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS, FONTS } from '../../constants';

const Lottie = ({navigation}:any) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.goBack();
       // navigate('Home1');
      }, 6000);
    }, []);

    return (
      <View style={styles.container}>
        <StatusBar
      barStyle="light-content"
      backgroundColor={COLORS.DEFAULT_GREEN}
      translucent={false}
     />
      <LottieView
      style={{
       // margin: 30,
      }}
      //source={require('../../assets/lottie/black_red_scooter.json')}
      source={require('../../assets/lottie/order_submit.json')}
        autoPlay
        loop
      />
      {/* <View style={styles.textContainer}>
      <Text style={styles.text}>Congratulations</Text>
      <Text style={styles.text1}>Your Order is Placed</Text>
      </View> */}
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //  backgroundColor: COLORS.DEFAULT_GREEN,
      backgroundColor: COLORS.DEFAULT_WHITE,
    },
    textContainer: {
      marginTop: '120%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.DEFAULT_YELLOW,
      margin: 10,
      fontFamily: FONTS.POPPINS_BOLD,
    },
    text1: {
      fontSize: 16,
      fontFamily: FONTS.POPPINS_LIGHT,
      color: COLORS.DEFAULT_WHITE,
    },
  });

  export default Lottie ;
