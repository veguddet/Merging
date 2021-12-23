import React from 'react';
import {
  Image, Linking,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
import { Header } from '../../components';
import { COLORS } from '../../constants';

export default function ContactUs({navigation}: any) {
  function dialCall() {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${8512234567}`;
    } else {
      phoneNumber = `telprompt:${8512234567}`;
    }
    Linking.openURL(phoneNumber);
  }
  function openEmail() {
    let emailUrl = '';
    emailUrl = `mailto:${'eathealthy@gmail.com'}`;
    Linking.openURL(emailUrl);
  }

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header headerTitle={'Contact Us'} onpress={() => navigation.goBack()} />
      <View style={styles.view1}>
        <Image
          resizeMode="cover"
          style={{width: 200, height: 175}}
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/logistics/256/Customer_Support-512.png',
          }}
        />

        <Text style={styles.text}>Connect With Us</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.view3}>Help Desk: Email</Text>
        <Text style={styles.view4}>eathealthysupport@eat.com</Text>
        <Button style={styles.view5} onPress={() => openEmail()}>
          <Text style={{color: 'white'}}>Click To Mail</Text>
        </Button>
      </View>
      <View style={styles.view2}>
        <Text style={styles.view3}>Help Desk: Number</Text>
        <Text style={styles.view4}>+91 8267367450</Text>
        <Button style={styles.view5} onPress={() => dialCall()}>
          <Text style={{color: 'white'}}>Click To Call</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    padding: 5,
    fontSize: 25,
    color: 'green',
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  box2: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: 'space-evenly',
  },
  view2: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: COLORS.LIGHT_GREY,
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
  },
  view3: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.gray,
    padding: 10,
  },
  view5: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  box7: {
    paddingHorizontal: 180,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
});
