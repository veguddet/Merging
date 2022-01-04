import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

export default class Slider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: 200}}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            autoplayDirection={true}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{
              bottom: 40,
            }}
            loop={true}>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/images/banner.jpg')}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/images/banner1.png')}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/images/banner2.jpg')}
              />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  imgBackground: {},
  image: {
    height: '100%',
    width: '100%',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  dotActive: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
});
