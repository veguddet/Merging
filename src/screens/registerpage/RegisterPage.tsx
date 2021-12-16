import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {styles} from './style';
import { COLORS } from '../../constants';
import { FONTS } from './../../constants/theme';
import { Separator } from '../../components';

interface RegisterProps { navigation:any}
interface RegisterState {
  firstname: any;
  lastname: any;
  mobile: any;
  email: any;
  password: any;
  address: any;
  city: any;
 
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
      city:'',
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      await Alert.alert("valid");
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
              city: this.state.city,
            })
            .catch(err => console.log(err));
          this.setState({
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            password: '',
            address: '',
            city:'',
          });

          this.props.navigation.navigate('Login');
        });
    }
    else {
      Alert.alert("invalid");
    }
  }
  
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
      <StatusBar
      barStyle="dark-content" 
      backgroundColor={COLORS.white }
      translucent={false} />
        <ScrollView style={styles.scrollView}>
          <Separator height={20}/>
          <View>
            <Text
              style={{
                fontSize: 28,
                top: 20,
                color: COLORS.DEFAULT_GREEN,
                textAlign: 'center',
                fontFamily: FONTS.POPPINS_BOLD,
              }}>
              Create Account
            </Text>
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'FirstName'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              mode="outlined"
              label={'Firstname'}
              onChangeText={firstname => {
                this.setState({firstname: firstname});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'LastName'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
            //  outlineColor='black'
              mode="outlined"
              label={'Lastname'}
              onChangeText={lastname => {
                this.setState({lastname: lastname});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Mobile No'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              mode="outlined"
              label={'Mobile No'}
              onChangeText={mobile => {
                this.setState({mobile: mobile});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'email'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              mode="outlined"
              label={'email'}
              onChangeText={email => {
                this.setState({email: email});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Password'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              secureTextEntry={true}
              mode="outlined"
              label={'Password'}
              onChangeText={password => {
                this.setState({password: password});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'Address'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              multiline={true}
              mode="outlined"
              label={'Address'}
              onChangeText={address => {
                this.setState({address: address});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder={'City'}
              activeOutlineColor={COLORS.DEFAULT_GREEN}
              mode="outlined"
              label={'City'}
              onChangeText={city => {
                this.setState({city: city});
              }}
            />
          </View>
          <View>
          <TouchableOpacity 
            style={styles.signinButton}
            onPress={() => {this.submit();}}
            >
              <Text style={styles.signinButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
