import React, { Component } from 'react'
import {
     SafeAreaView, 
     Text, 
     View, 
     Button, 
     StyleSheet, 
     ScrollView, 
} from 'react-native'
import { TextInput } from 'react-native-paper'
import database from '@react-native-firebase/database';


export default class RegisterPage extends React.Component{
constructor(props)
{
super(props);
this.state={
firstname:'',
lastname:'',
mobile:'',
username:'',
password:''
}
this.submit = this.submit.bind(this);
}

submit()
{
const user = database().ref('user').push();

user
.set({
firstname:this.state.firstname,
lastname:this.state.lastname,
mobile:this.state.mobile,
username:this.state.username,
password:this.state.password,
})
.then(() => console.log('Data updated.'));
}
render(){
return(
<SafeAreaView style={{flex:1,}}>
<ScrollView style={styles.scrollView}>
<View>
<Text style={{fontSize:24, top: 40, color:'#e86c1a', fontWeight:"bold", textAlign:'center'}}>Create Account</Text>
</View>
<View style={styles.textContainer}>
<TextInput
placeholder={"FirstName"} mode='outlined' label={"Firstname"}
onChangeText={(firstname) => { this.setState({ firstname: firstname }); } } children={undefined} autoComplete={undefined}/>
</View>
<View style={styles.textContainer}>
<TextInput
placeholder={"LastName"} mode='outlined' label={"Lastname"}
onChangeText={(lastname) => { this.setState({ lastname: lastname }); } } children={undefined} autoComplete={undefined}/>
</View>
<View style={styles.textContainer}>
<TextInput
placeholder={"Mobile No"} mode='outlined' label={"Mobile No"}
onChangeText={(mobile) => { this.setState({ mobile: mobile }); } } children={undefined} autoComplete={undefined}/>
</View>
<View style={styles.textContainer}>
<TextInput
placeholder={"Username"} mode='outlined' label={"Username"}
onChangeText={(username) => { this.setState({ username: username }); } } children={undefined} autoComplete={undefined}/>
</View>
<View style={styles.textContainer}>
<TextInput
placeholder={"Password"} secureTextEntry={true} mode='outlined' label={"Password"}
onChangeText={(password) => { this.setState({ password: password }); } } children={undefined} autoComplete={undefined}/>
</View>
<View style={{marginRight:20,marginLeft:20, marginTop:20, paddingTop: 30}}>
<Button
title='SignUp'
color="#841584"
onPress={()=>{this.submit()}} />
</View>
</ScrollView>
</SafeAreaView>
)
}
}

const styles = StyleSheet.create({

container: {
flex: 1,
},
textContainer : {
marginTop:'2%',
marginBottom:'2%',
top: 40,
},
scrollView: {
marginHorizontal: 10,
}
})