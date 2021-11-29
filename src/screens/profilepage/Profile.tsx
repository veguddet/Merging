import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {styles} from './style';
const Profile = ({navigation}: any) => {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [text4, onChangeText4] = React.useState('');

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10, backgroundColor: '#cce6ff'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: 'white'}}>LOGOUT</Text>
        </TouchableOpacity>
        <View>
          {/* <TextInput
         style={styles.input1}
         onChangeText={onChangeText}
         value={text}
         placeholder="Enter your First Name"
         // keyboardType="numeric"
       /> */}

          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVXz698GCgRABdAlakP-I6V8_MZYuk7dZRXa6f2775hMk-UCKrq_eZa8XdY8IGkdJHVM&usqp=CAU',
            }}></Image>
        </View>
      </View>

      <View style={{paddingTop: 20}}>
        <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your First Name"
          // keyboardType="numeric"
        />
        <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Enter your Last Name"
          // keyboardType="numeric"
        />
        <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          placeholder="Enter your Address"
          // keyboardType="numeric"
        />
        <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>
          Bio
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={text3}
          placeholder="Enter your Bio"
          // keyboardType="numeric"
        />
        <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>
          Mobile Number
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText4}
          value={text4}
          placeholder="Enter your Mobile Number"
          keyboardType="numeric"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: 'white'}}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => Alert.alert('Profile Details Updated')}>
        <Text
          style={{color: 'white', textAlign: 'center', alignContent: 'center'}}>
          OK
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
