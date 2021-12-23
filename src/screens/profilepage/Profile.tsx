import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Title, TouchableRipple} from 'react-native-paper';
import Share from 'react-native-share';
import {
  default as Icon,
  default as MaterialCommunityIcons,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

const Profile = ({navigation}: any) => {
  const [user, setUser] = useState({});

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from EatHealthy App. I've already ordered more than 10 meals on it.",
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  useEffect(() => {
    GetUser();
  }, [user]);

  const GetUser = () => {
    let user = auth().currentUser;
    let id = user?.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(snapshot => {
        console.log(snapshot.data());
        setUser(snapshot.data());
      });
  };

  const sighnout = async () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onValueChange = snapshot => {
    console.log(snapshot);
    const data = snapshot.val();
    const items = Object.values(data);
    console.log('onvaluechange called');
    console.log(items);
    setUser(items);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={styles.imageContainer}>
            <Avatar.Image
              source={
                user.image
                  ? {uri: 'data:image/jpeg;base64,' + user.image}
                  : require('../../assets/user2.png')
              }
              size={110}
            />
            <View style={{marginLeft: 20}}>
              <Title style={styles.title}>{user.firstname}</Title>
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  activeOpacity={1}
                  name="account-edit"
                  size={25}
                  backgroundColor="#fff"
                  color={COLORS.DEFAULT_GREEN}
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon
              name="map-marker-radius"
              color={COLORS.DEFAULT_GREEN}
              size={25}
            />
            <Text style={styles.userText}>{user.address}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color={COLORS.DEFAULT_GREEN} size={22} />
            <Text style={styles.userText}>{user.mobile}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color={COLORS.DEFAULT_GREEN} size={22} />
            <Text style={styles.userText}>{user.email}</Text>
          </View>
        </View>

        <View style={styles.boarder}></View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon
                name="heart-outline"
                color={COLORS.DEFAULT_GREEN}
                size={25}
              />
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('CompletedOrderScreen')}>
            <View style={styles.menuItem}>
              <Icon
                name="bookmark-outline"
                color={COLORS.DEFAULT_GREEN}
                size={25}
              />
              <Text style={styles.menuItemText}>Your Orders</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={myCustomShare}>
            <View style={styles.menuItem}>
              <Icon
                name="share-outline"
                color={COLORS.DEFAULT_GREEN}
                size={25}
              />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Contact')}>
            <View style={styles.menuItem}>
              <Icon
                name="account-check-outline"
                color={COLORS.DEFAULT_GREEN}
                size={25}
              />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.menuItem}>
              <Icon name="cog-outline" color={COLORS.DEFAULT_GREEN} size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableOpacity onPress={() => sighnout()}>
            <View style={styles.menuItem}>
              <Icon
                name="lock-outline"
                color={COLORS.DEFAULT_GREEN}
                size={25}
              />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
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
    margin: 10,
  },
  boarder: {
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 26,
    color: COLORS.DEFAULT_BLACK,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  userText: {
    color: '#777777',
    marginLeft: 10,
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
});
