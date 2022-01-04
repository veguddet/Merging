import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Header} from '../../components';
import {COLORS} from '../../constants';
import {styles} from './style';

interface RegisterProps {
  navigation: any;
}
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
      city: '',
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true && this.state.mobile.length == 10) {
      auth()
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
            .then(() => {
              this.props.navigation.navigate('Login');
            })
            .catch(err => console.log(err));

          this.setState({
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            password: '',
            address: '',
            city: '',
          });
        });
    } else {
      Alert.alert(
        'Please check entered feild below are the instructions',
        "`Email format :abc@gmail.com \n Phone no : 10 digits'",
        [
          {
            text: 'Ok',
          },
        ],
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.DEFAULT_GREEN}
          translucent={false}
        />
        <Header
          headerTitle={'Sign Up'}
          onpress={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
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
              onPress={() => {
                this.submit();
              }}>
              <Text style={styles.signinButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
