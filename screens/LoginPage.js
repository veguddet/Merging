import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
    StatusBar,
    TextInput,
} from 'react-native';

const LoginPage = ({navigation}) => {

return(

<SafeAreaView style={{flex:1,backgroundColor:'#f8f8f8'}}>
<View style={{margin:'5%'}}>
<Text style={{fontSize:40, marginTop:'10%', color:'#e86c1a', fontWeight:'500', justifyContent:"center", marginLeft:'20%'}}>Subway</Text>
<TextInput style={{ marginTop:'20%'}} placeholder={"Email"} mode='outlined' label={"Email"}/>
<TextInput style={{ marginTop:'5%', marginBottom:'5%'}} placeholder={"Password"} secureTextEntry={true} mode='outlined' label={"Password"}/>
<Button
title="Login"
color="#841584"
onPress={() => {
    navigation.navigate("Home")
  }}
/>
<Text style={{fontSize:15, marginTop:'10%', marginBottom:'10%', textAlign:'center',}}>OR</Text>
<Button
title="Register"
color="#841584"
onPress={() => navigation.navigate("Register")}
/>
</View>
</SafeAreaView>
)
}

export default LoginPage