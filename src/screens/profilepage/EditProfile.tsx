import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';
import {Display} from '../../utils';
import {COLORS} from '../../constants';
import {Header} from '../../components';

const EditProfile = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [lName, setlName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [user, setUser] = useState({});
  const [city, setCity] = useState('');

  useEffect(() => {
    let id = auth().currentUser.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(snapshot => {
        console.log('from', snapshot.data());
        setName(snapshot.data().firstname);
        setPhone(snapshot.data().mobile);
        setlName(snapshot.data().lastname);
        setAddress(snapshot.data().address);
        setEmail(snapshot.data().email);
        setImage(snapshot.data().image);
        setCity(snapshot.data().city);
      });
  }, [user]);
  const launchImageGallery = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: true,
      includeExtra: true,
    };

    console.log('launch gallery called');

    launchImageLibrary(options, response => {
      console.log(response);

      if (response.didCancel === true) {
        console.log('No Image Selected');
      } else if (response.assets) {
        console.log(response.assets[0].uri);

        setImage(response.assets[0].base64);

        console.log(image);
      }
    });
  };

  const handleSave = navigation => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      name.length !== 0 &&
      name.length !== 0 &&
      reg.test(email) &&
      phone.length == 10
    ) {
      // here add data to firestore
      let id = auth().currentUser.uid;
      firestore().collection('users').doc(id).update({
        Name: name,
        image: image,
        lastname: lName,
        mobile: phone,
        email: email,
        address: address,
        firstname: name,
        city: city,
      });

      navigation.navigate('ProfileTab');
    } else {
      console.log('Not all valid field selected');
      Alert.alert('Check Your All Feilds');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header
        headerTitle={'Edit Profile'}
        onpress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{marginTop: '3%'}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  source={
                    image
                      ? {uri: 'data:image/jpeg;base64,' + image}
                      : require('../../assets/user2.png')
                  }
                  style={styles.image}
                  imageStyle={{borderRadius: 15}}>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={launchImageGallery}>
                      <Icon
                        name="camera"
                        size={35}
                        color={COLORS.LIGHT_GREY}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={styles.userName}>{name}</Text>

            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={name}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={lName}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={lName}
                onChangeText={text => setlName(text)}
              />
            </View>
            <View style={styles.action}>
              <Feather
                name="phone"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={phone}
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={styles.textInput}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome
                name="envelope-o"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={email}
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome
                name="location-arrow"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={address}
                placeholderTextColor="#666666"
                autoCorrect={false}
                multiline={true}
                keyboardType="numbers-and-punctuation"
                style={styles.textInput}
                value={address}
                onChangeText={text => setAddress(text)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome
                name="globe"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder="India"
                placeholderTextColor="#666666"
                autoCorrect={false}
                multiline={true}
                keyboardType="numbers-and-punctuation"
                style={styles.textInput}
                value="India"
                editable={false}
              />
            </View>
            <View style={styles.action}>
              <Icon
                name="map-marker-outline"
                size={20}
                color={COLORS.DEFAULT_GREEN}
                style={{paddingLeft: 30}}
              />
              <TextInput
                placeholder={city}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={city}
                onChangeText={text => setCity(text)}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => handleSave(navigation)}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  commandButton: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: 10,
    marginHorizontal: 20,
    height: Display.setHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: '#05375a',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  image: {
    height: 100,
    width: 100,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
