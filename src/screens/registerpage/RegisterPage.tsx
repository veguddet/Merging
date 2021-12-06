import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {styles} from './style';
interface RegisterProps { navigation:any}
interface RegisterState {
  firstname: any;
  lastname: any;
  mobile: any;
  email: any;
  password: any;
  address: any;
 
}

export default class RegisterPage extends React.Component<
  RegisterProps,
  RegisterState
> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      password: '',
      address: '',
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    // const user = database().ref('user').push();
    // user
    //   .set({
    //     firstname: this.state.firstname,
    //     lastname: this.state.lastname,
    //     mobile: this.state.mobile,
    //     email: this.state.email,
    //     password: this.state.password,
    //   })
    //   .then(() => console.log('Data updated.'));
    
           await auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        let id = res.user.uid;
          
          firestore()
          .collection('users')
          .doc(id)
          .set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mobile: this.state.mobile,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
          })
          .catch(err => console.log(err));
        this.setState({
          firstname: '',
          lastname: '',
          mobile: '',
          email: '',
          password: '',
          address: '',
        })
          
          
          this.props.navigation.navigate('Login')}
      );
     
    
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text
              style={{
                fontSize: 24,
                top: 40,
                color: '#e86c1a',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Create Account
            </Text>
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'FirstName'}
              mode="outlined"
              label={'Firstname'}
              onChangeText={firstname => {
                this.setState({firstname: firstname});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'LastName'}
              mode="outlined"
              label={'Lastname'}
              onChangeText={lastname => {
                this.setState({lastname: lastname});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Mobile No'}
              mode="outlined"
              label={'Mobile No'}
              onChangeText={mobile => {
                this.setState({mobile: mobile});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'email'}
              mode="outlined"
              label={'email'}
              onChangeText={email => {
                this.setState({email: email});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              mode="outlined"
              label={'Password'}
              onChangeText={password => {
                this.setState({password: password});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Adress'}

              mode="outlined"
              label={'Adress'}
              onChangeText={address => {
                this.setState({address: address});
              }}
              children={undefined}
              autoComplete={undefined}
            />
          </View>
          <View
            style={{
              marginRight: 20,
              marginLeft: 20,
              marginTop: 20,
              paddingTop: 30,
            }}>
            <Button
              title="SignUp"
              color="#841584"
              onPress={() => {
                this.submit();
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
