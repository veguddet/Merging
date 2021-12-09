import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';
//import { useTheme } from 'react-native-paper';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [lName, setlName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
    let id = auth().currentUser.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(snapshot => {
        // let snap = snapshot.docs.map(doc => {
        //   const data = doc.data();
        //   const doc_id = doc.id;
        //   return {doc_id, ...data};
        console.log('from', snapshot.data());
       // setUser(snapshot.data());
        setName(snapshot.data().firstname);
        setPhone(snapshot.data().mobile);
        setlName(snapshot.data().lastname);
        setAddress(snapshot.data().address);
        setEmail(snapshot.data().email)
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
    if (name.length !== 0 && name.length !== 0) {
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
      });

      navigation.navigate('ProfileTab');
    } else {
      console.log('Not all valid field selected');
    }
  };
  // const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      <View style={{marginTop: '20%'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.9,
              }}>
              <ImageBackground
                //  source={require('../../assets/profile.png')}
                source={
                  image.length === 0
                    ? require('../../assets/profile.png')
                    : {uri: 'data:image/jpeg;base64,' + image}
                }
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={launchImageGallery}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.9,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // borderWidth: 0.5,
                        // borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>

          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={20}
              // color={colors.text}
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
              // color={colors.text}
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
              // color={colors.text}
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
              // color={colors.text}
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
              name="globe"
              size={20}
              // color={colors.text}
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
            <Icon
              name="map-marker-outline"
              size={20}
              // color={colors.text}
              style={{paddingLeft: 30}}
            />
            <TextInput
              placeholder="City"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            style={styles.commandButton}
            // onPress={() => navigation.navigate('Profile')}
            onPress={() => handleSave(navigation)}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
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
    //  marginTop: 10,
    paddingLeft: 20,
    color: '#05375a',
  },
});

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   StatusBar,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import firestore from '@react-native-firebase/firestore';
// import auth, {firebase} from '@react-native-firebase/auth';
// //import { useTheme } from 'react-native-paper';

// const EditProfile = ({navigation}) => {
//   const [image,setImage] = useState('');
//   const [name,setName] = useState('');
//   const [lName,setlName] = useState('');
//   const [phone,setPhone] = useState('');
//   const [email,setEmail] = useState('');
//   const [address,setAddress] = useState('');

//   const launchImageGallery = () => {
//     let options = {
//       mediaType: 'photo',

//       includeBase64: true,

//       includeExtra: true,
//     };

//     console.log('launch gallery called');

//     launchImageLibrary(options, response => {
//       console.log(response);

//       if (response.didCancel === true) {
//         console.log('No Image Selected');
//       } else if (response.assets) {
//         console.log(response.assets[0].uri);

//         setImage(response.assets[0].base64);

//         console.log(image);
//       }
//     });
//   };
//   const handleSave = navigation => {
//     if (name.length !== 0 && name.length !== 0) {
//       // here add data to firestore
//        let id =auth().currentUser.uid
//       firestore().collection('users').doc(id).update({
//         firstname:name,
//         image: image,
//         lastname: lName,
//         mobile: phone,
//         email: email,
//         address: address,
//       });

//       navigation.navigate('ProfileTab');
//     } else {
//       console.log('Not all valid field selected');
//     }
//   };
//   // const {colors} = useTheme();
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
//       <ScrollView>
//       <View style={{marginTop: 40}}>
//         <View style={{alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => {}}>
//             <View
//               style={{
//                 height: 100,
//                 width: 100,
//                 borderRadius: 15,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 opacity: 0.9,
//               // paddingBottom: 20,
//               }}>
//               <ImageBackground
//               //  source={require('../../assets/profile.png')}
//               source = {image.length === 0 ?

//                 require('../../assets/profile.png') :

//                 {uri : 'data:image/jpeg;base64,' + image}}
//                 style={{height: 100, width: 100, }}
//                 imageStyle={{borderRadius: 15}}>
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                     <TouchableOpacity onPress={launchImageGallery}>
//                     <Icon
//                     name="camera"
//                     size={35}
//                     color="#fff"
//                     style={{
//                       opacity: 0.9,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       // borderWidth: 0.5,
//                       // borderColor: '#fff',
//                       borderRadius: 10,
//                     }}
//                   />
//                     </TouchableOpacity>

//                 </View>
//               </ImageBackground>
//             </View>
//           </TouchableOpacity>
//           {/* <Text
//             style={{
//               marginTop: 10,
//               fontSize: 18,
//               fontWeight: 'bold',
//             }}>
//             Venky
//           </Text> */}
//           <View style={{paddingTop: 20}}></View>

//           <View style={styles.action}>
//             <FontAwesome
//               name="user-o"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="First Name"
//               placeholderTextColor="#666666"
//               autoCorrect={false}
//               style={styles.textInput}
//               value={name}
//               onChangeText={(text)=>setName(text)}
//             />
//           </View>
//           <View style={styles.action}>
//             <FontAwesome
//               name="user-o"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="Last Name"
//               placeholderTextColor="#666666"
//               autoCorrect={false}
//               style={styles.textInput}
//               value={lName}
//               onChangeText={(text)=>setlName(text)}
//             />
//           </View>
//           <View style={styles.action}>
//             <Feather
//               name="phone"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="Phone"
//               placeholderTextColor="#666666"
//               keyboardType="number-pad"
//               autoCorrect={false}
//               style={styles.textInput}
//               value={phone}
//               onChangeText={(text)=>setPhone(text)}
//             />
//           </View>
//           <View style={styles.action}>
//             <FontAwesome
//               name="envelope-o"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="Email"
//               placeholderTextColor="#666666"
//               keyboardType="email-address"
//               autoCorrect={false}
//               style={styles.textInput}
//               value={email}
//               onChangeText={(text)=>setEmail(text)}
//             />
//           </View>
//           <View style={styles.action}>
//             <FontAwesome
//               name="location-arrow"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="Address"
//               placeholderTextColor="#666666"
//               autoCorrect={false}
//               multiline={true}
//               keyboardType="numbers-and-punctuation"
//               style={styles.textInput}
//               value={address}
//               onChangeText={(text)=>setAddress(text)}
//             />
//           </View>
//           <View style={styles.action}>
//             <FontAwesome
//               name="globe"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="Country"
//               placeholderTextColor="#666666"
//               autoCorrect={false}
//               keyboardType="web-search"
//               style={styles.textInput}
//             />
//           </View>
//           <View style={styles.action}>
//             <Icon
//               name="map-marker-outline"
//               size={20}
//               // color={colors.text}
//               style={{paddingLeft: 30}}
//             />
//             <TextInput
//               placeholder="City"
//               placeholderTextColor="#666666"
//               autoCorrect={false}
//               keyboardType="name-phone-pad"
//               style={styles.textInput}
//             />
//           </View>
//           <TouchableOpacity
//             style={styles.commandButton}
//             // onPress={() => navigation.navigate('Profile')}
//             onPress={()=>handleSave(navigation)}
//             >
//             <Text style={styles.panelButtonTitle}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default EditProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   commandButton: {
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#FF6347',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   panel: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     paddingTop: 20,
//     // borderTopLeftRadius: 20,
//     // borderTopRightRadius: 20,
//     // shadowColor: '#000000',
//     // shadowOffset: {width: 0, height: 0},
//     // shadowRadius: 5,
//     // shadowOpacity: 0.4,
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#333333',
//     shadowOffset: {width: -1, height: -3},
//     shadowRadius: 2,
//     shadowOpacity: 0.4,
//     // elevation: 5,
//     paddingTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//   },
//   panelButton: {
//     padding: 13,
//     borderRadius: 10,
//     backgroundColor: '#FF6347',
//     alignItems: 'center',
//     marginVertical: 7,
//   },
//   panelButtonTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//    // paddingTop: 10,
//   },
//   actionError: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FF0000',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     //  marginTop: 10,
//     paddingLeft: 20,
//     color: '#05375a',
//   },
// });
