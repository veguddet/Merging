import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../constants';
import {Display} from '../../utils';

const Rating = ({navigation}: any) => {
  const [defaultRating, setDefaultRating] = useState(0);

  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>How was your experience with us</Text>
        <Text style={styles.textStyleSmall}>Please Rate Us</Text>

        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginLeft: 10}}
          onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    lineHeight: 16 * 1.4,
    marginBottom: 300,
  },
  button: {
    backgroundColor: COLORS.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 60,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    // color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
