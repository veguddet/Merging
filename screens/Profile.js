import React from 'react';
import {View, Text, ScrollView, TextInput,StyleSheet,TouchableOpacity,Alert,Image} from 'react-native';

const Profile = ({route, navigation}) => {
  
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState(null);
  const [text4, onChangeText4] = React.useState(null);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
      
      <View style={{width: '100%', padding: 10,backgroundColor:'#cce6ff'}}>
      <TouchableOpacity
          style={styles.button}
         
          onPress={() => {
            navigation.navigate("Login")
          }}
            >
          <Text style={{color:'white'}}>LOGOUT</Text>
        </TouchableOpacity>
        <View>
         {/* <TextInput
         style={styles.input1}
         onChangeText={onChangeText}
         value={text}
         placeholder="Enter your First Name"
         // keyboardType="numeric"
       /> */}
    
         <Image style={{width:50,height:50,borderRadius:25}} source={require('../assets/profile.png')}></Image>
      
       
         </View>
       
      </View>
      
      <View style={{paddingTop:20}}>
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your First Name"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Enter your Last Name"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Enter your Address"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Bio</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Enter your Bio"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Mobile Number</Text>
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
            navigation.navigate("Home")
          }}
            >
          <Text style={{color:'white'}}>CANCEL</Text>
        </TouchableOpacity>
        </View>
    <TouchableOpacity
          style={styles.button1}
          onPress={() => Alert.alert("Profile Details Updated")}
            >
          <Text style={{color:'white'}}>OK</Text>
        </TouchableOpacity>
    </View>
);
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft:200,
    bottom:30,
    right:5,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    marginLeft:20,
    bottom:30,
    borderWidth: 0.5,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft:0,
    width:100,
    left:280,
    top:30
  },
  button1: {
    alignItems: "center",
    backgroundColor: "black",
    width:100,
    left:280,
    bottom:20,
    top:100
  },
  button2: {
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft:0,
    width:100,
    left:20,
    top:120
  
  },
});
export default Profile;
