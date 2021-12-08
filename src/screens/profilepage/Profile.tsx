import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Button,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}: any) => {
  return (
    <View style={styles.container}> 
      <StatusBar 
      barStyle='dark-content' 
      backgroundColor="white"
      translucent
     />
     <ScrollView>
       <View style={styles.userInfoSection}>
         <View style={{flexDirection: 'row', marginTop: 15}}>
           <Avatar.Image 
           source={require('../../assets/images/person.png')}
          size={110}
           />
           <View style={{marginLeft: 20}}>
             <Title style={styles.title}>Venky Reddy</Title>
             <Caption style={styles.caption}>@venky_17</Caption>
             <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
              activeOpacity={1}
                name="account-edit"
                size={25}
                backgroundColor= '#fff'
                color='#000'
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
           </View>
         </View>
       </View>
       {/* <View style={styles.boarder}></View> */}
       <View style={styles.userInfoSection}>
         <View style={styles.row}>
           <Icon name="map-marker-radius" color='#777777' size={20} />
           <Text style={{color:'#777777', marginLeft: 10}}>Kurnool, India</Text>
         </View>
         <View style={styles.row}>
           <Icon name="phone" color='#777777' size={20} />
           <Text style={{color:'#777777', marginLeft: 10}}>+91-9894903211</Text>
         </View>
         <View style={styles.row}>
           <Icon name="email" color='#777777' size={20} />
           <Text style={{color:'#777777', marginLeft: 10}}>venky_reddy@gmail.com</Text>
         </View>
       </View>
       {/* <View style={styles.infoBoxWrapper}>
         <View style={styles.infoBox}>
           <Title>$117</Title>
           <Caption>Wallet</Caption>
         </View>
         <View style={styles.infoBox}>
           <Title>17</Title>
           <Caption>Orders</Caption>
         </View>
       </View> */}
        <View style={styles.boarder}></View>
       <View style={styles.menuWrapper}>
         <TouchableRipple onPress={() => {}}>
           <View style={styles.menuItem}>
             <Icon name='heart-outline' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
         </TouchableRipple>
         <TouchableRipple onPress={() => {}}>
           <View style={styles.menuItem}>
             <Icon name='credit-card' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Payments</Text>
            </View>
         </TouchableRipple>
         <TouchableRipple onPress={() => {}}>
           <View style={styles.menuItem}>
             <Icon name='share-outline' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
         </TouchableRipple>
         <TouchableRipple onPress={() => {}}>
           <View style={styles.menuItem}>
             <Icon name='account-check-outline' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Support</Text>
            </View>
         </TouchableRipple>
         <TouchableRipple onPress={() => {}}>
           <View style={styles.menuItem}>
             <Icon name='cog-outline' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Settings</Text>
            </View>
         </TouchableRipple>
         <TouchableRipple onPress={() => {navigation.navigate('Login')}}>
           <View style={styles.menuItem}>
             <Icon name='lock-outline' color="#FF6347" size={25} />
             <Text style={styles.menuItemText}>Logout</Text>
            </View>
         </TouchableRipple>
       </View>
       <View style={styles.spacing}></View>
       </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 20,
     backgroundColor: 'white',
   },
   userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
   // marginTop: 10,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
  },
  menuWrapper: {
   // marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  spacing: {
    margin : 10,
  },
  boarder: {
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height:10,
    marginBottom: 10,
  },
  });

