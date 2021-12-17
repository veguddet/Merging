import React, {Component, useState} from 'react';
import {
  Text, View, Alert, TextInput, StatusBar, TouchableOpacity, ScrollView
} from 'react-native';
import {styles} from './style';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { COLORS } from './../../constants/theme';
import Separator from './../../components/Separator';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const LoginPage = ({navigation}:any) => {

  const [ isPasswordShow, setIsPasswordShow ] = useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  console.log(email,password)

 const handleSignIn=()=>{
   if(email===''){
     Alert.alert('Empty')
   }
   else{
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
 }

  return (
    <View style={styles.container}>
      <StatusBar
      barStyle="dark-content" 
      backgroundColor={COLORS.white }
      translucent={false} />
    <ScrollView>
      <View style={styles.headerContainer}>
                <Ionicons 
                name="chevron-back-outline" 
                size={30} 
                color={COLORS.DEFAULT_BLACK}
                onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Sign In</Text>
            </View>
            <Text style={styles.title}>Welcome to  Eat Healthy</Text>
            <Text style={styles.content}>
                Enter your username and password, and enjoy food Ordering Online !
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather 
                    name='user' 
                    size={22} 
                    color={COLORS.DEFAULT_GREY} 
                    style={{marginRight: 10}} 
                    />
                    <TextInput 
                    placeholder='Username'
                    placeholderTextColor={COLORS.DEFAULT_GREY}
                    selectionColor={COLORS.DEFAULT_GREY}
                    style={styles.inputText}
                   // label={'Email'}
                    onChangeText={email => {
                    setEmail(email)
                      }}
                    />
                </View>
            </View>
            <Separator height={15}/>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Feather
                name='lock' 
                size={22} 
                color={COLORS.DEFAULT_GREY} 
                style={{marginRight: 10}}  
                />
                    <TextInput
                    secureTextEntry={isPasswordShow ? false : true}
                    placeholder='Password'
                    placeholderTextColor={COLORS.DEFAULT_GREY}
                    selectionColor={COLORS.DEFAULT_GREY}
                    style={styles.inputText} 
                   // label={'Password'}
                    onChangeText={password => {
                    setPassword(password)
                      }}
                    />
                    <Feather
                     name={isPasswordShow ? 'eye' : 'eye-off'}
                     size={22} 
                     color={COLORS.DEFAULT_GREY} 
                     style={{marginRight: 10}}   
                     onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />
                </View>
            </View>
            <TouchableOpacity 
            style={styles.signinButton}
            onPress={() => handleSignIn()}
            >
                <Text style={styles.signinButtonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity 
            style={styles.signupButton}
            onPress={() => navigation.navigate('Register')}
           // onPress={() => navigation.navigate('Tabs')}
            >
                <Text style={styles.signinButtonText}>Sign Up</Text>
            </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginPage;
