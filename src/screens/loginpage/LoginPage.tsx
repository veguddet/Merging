import React, {Component} from 'react';
import {SafeAreaView, Text, View, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const LoginPage = ({navigation}:any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  console.log(email,password)

 const handleSignIn=()=>{
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User signed in ');
        navigation.navigate('Tabs')
      })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
      Alert.alert("Please check Your Credentials")
   });
 }

  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //     console.log(error.code);
  //     console.log(error.message);
  //  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View style={{margin: '5%'}}>
        <Text
          style={{
            fontSize: 40,
            marginTop: '10%',
            color: '#e86c1a',
            fontWeight: 'bold',
            left: 80,
          }}>
          Food App
        </Text>
        <TextInput
          style={{marginTop: '20%'}}
          placeholder={'Email'}
          mode="outlined"
          label={'Email'}
          onChangeText={email => {
            setEmail(email)
          }}
        />
        <TextInput
          style={{marginTop: '5%', marginBottom: '5%'}}
          placeholder={'Password'}
          secureTextEntry={true}
          mode="outlined"
          label={'Password'}
          onChangeText={password => {
            setPassword(password)
          }}
        />
        <Button
          title="Login"
          color="#841584"
         // onPress={() => navigation.navigate('Tabs')}
         onPress={() => handleSignIn()}
        />
        <Text
          style={{
            fontSize: 15,
            marginTop: '10%',
            marginBottom: '10%',
            textAlign: 'center',
          }}>
          OR
        </Text>
        <Button
          title="Register"
          color="#841584"
          onPress={() => navigation.navigate('Register')}
        // onPress={() => navigation.navigate('Tabs')}
         
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

// import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'
// import { TextInput } from 'react-native-paper'
// import database from '@react-native-firebase/database';

// export default class LoginPage extends React.Component {

//   constructor(props)
//   {
//     super(props);
//     this.state={
//       Email:'',
//       Password:''
//     }
//     this.login = this.login.bind(this);
//   }
//   login()
//   {
//     const reference = database().ref('users_details');
//     reference
//       .set({
//         Email:this.state.Email,
//         Password:this.state.Password,
//       })
//       .then(() => console.log('Data Updated.'));
//   }
//   render() {
//     return(
//       <View style={{flex:1,backgroundColor:'#f8f8f8'}}>
//           <View style={{margin:'5%'}}>
//           <Text style={{fontSize:40, marginTop:'10%', color:'#e86c1a', fontWeight:'500', justifyContent:"center", marginLeft:'20%'}}> Food App </Text>
//             <TextInput style={{ marginTop:'20%'}} placeholder={"Email"} mode='outlined' label={"Email"}
//             onChangeText={( Email) => { this.setState({ Email: Email }); } } children={undefined} autoComplete={undefined} />
//             <TextInput style={{ marginTop:'5%', marginBottom:'5%'}} placeholder={"Password"} secureTextEntry={true} mode='outlined' label={"Password"}
// onChangeText={(Password) => { this.setState({ Password: Password }); } } children={undefined} autoComplete={undefined}/>
// <Button
//   title="Login"
//   color="#841584"
//   onPress={()=>{this.login()}}
//   />
// </View>
// </View>
// )
// }
// }
