import React from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, COLORS, SIZES, FONTS} from './../../constants';
import {CustomButton} from '../../components';
import {styles} from './style';

const WelcomeScreen = ({navigation}: any) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.black}
          translucent={false}
        />
        <ImageBackground
          source={images.loginBackground}
          style={styles.imageBackground}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.linearGradient}>
            <Text style={styles.headingText}>
              Eat Healthy and Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Description */}
        <Text style={styles.description}>
          Discover more than 1200 food recipes in your hand and find it easily!
        </Text>
        {/* Buttons */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {/* Login */}
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.navigate('Login')}
          />

          {/* Sign Up */}
          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />

      {/* Header  */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default WelcomeScreen;
