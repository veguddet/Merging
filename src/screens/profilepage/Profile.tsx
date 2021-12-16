import React, { useEffect, useState } from 'react';
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
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import { COLORS } from '../../constants';

const Profile = ({ navigation }: any) => {
  
  const [user,setUser] = useState({}); 

//   let id =auth().currentUser.uid 
//   firestore().collection("users").get().then((snapshot) => {
//     const userData = snapshot.docs.filter((doc) => doc.data())
//     console.log(userData)
//     setUser(user)
//   })

// }
useEffect(() => {
  let id = auth().currentUser.uid;
  const subscriber = firestore()
    .collection('users')
    .doc(id)
    .get()
    .then(snapshot => {
      // let snap = snapshot.docs.map(doc => {
      //   const data = doc.data();
      //   const doc_id = doc.id;
      //   return {doc_id, ...data};
      console.log(snapshot.data());
      setUser(snapshot.data());
    
    });
}, [user]);

const sighnout = ()=>{
   auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const onValueChange = (snapshot) => {
  console.log(snapshot)
  const data = snapshot.val();
  const items = Object.values(data);
  console.log("onvaluechange called")
  console.log(items)
  setUser(items);
}


return (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={COLORS.DEFAULT_GREEN}
      translucent={false}
    />
    <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row',  marginTop:"10%" }}>
          <Avatar.Image
            // source={require('../../assets/images/person.png')}
            source = {user.image? {uri : 'data:image/jpeg;base64,' + user.image}:require('../../assets/user2.png')}
            size={110}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>{user.firstname}</Title>
            {/* <Caption style={styles.caption}></Caption> */}
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                activeOpacity={1}
                name="account-edit"
                size={25}
                backgroundColor='#fff'
               // color='#000'
              // color="#FF6347" 
               color={COLORS.DEFAULT_GREEN}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          </View>
        </View>
      </View>
      {/* <View style={styles.boarder}></View> */}
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" 
         // color='#777777' 
         color={COLORS.DEFAULT_GREEN}
        //  color="#FF6347" 
          size={20} />
          <Text style={{ color: '#777777', marginLeft: 10 }}>{user.address}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" 
          color={COLORS.DEFAULT_GREEN}
          //color="#FF6347" 
          size={20} />
          <Text style={{ color: '#777777', marginLeft: 10 }}>{user.mobile}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" 
          //color="#FF6347"  
          color={COLORS.DEFAULT_GREEN}
          size={20} />
          <Text style={{ color: '#777777', marginLeft: 10 }}>{user.email}</Text>
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
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name='heart-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('CompletedOrderScreen')}>
          <View style={styles.menuItem}>
            <Icon name='bookmark-outline' color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.menuItemText}>My Orders</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name='share-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={() => navigation.navigate('Nutrition')}>
          <View style={styles.menuItem}>
            <Icon name='account-check-outline' color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.menuItem}>
            <Icon name='cog-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() =>sighnout()}>
          <View style={styles.menuItem}>
            <Icon name='lock-outline' 
           // color="#FF6347" 
           color={COLORS.DEFAULT_GREEN}
            size={25} />
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
   // color:COLORS.DEFAULT_GREEN,
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
    margin: 10,
  },
  boarder: {
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 10,
    marginBottom: 10,
  },
});

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Text,
//   Button,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';
// import {
//   Avatar,
//   Title,
//   Caption,
//   TouchableRipple,
// } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import firestore from '@react-native-firebase/firestore';
// import auth, { firebase } from '@react-native-firebase/auth';
// import { COLORS } from '../../constants';

// const Profile = ({ navigation }: any) => {
  
//   const [user,setUser] = useState({}); 

// //   let id =auth().currentUser.uid 
// //   firestore().collection("users").get().then((snapshot) => {
// //     const userData = snapshot.docs.filter((doc) => doc.data())
// //     console.log(userData)
// //     setUser(user)
// //   })

// // }
// useEffect(() => {
//   let id = auth().currentUser.uid;
//   const subscriber = firestore()
//     .collection('users')
//     .doc(id)
//     .get()
//     .then(snapshot => {
//       // let snap = snapshot.docs.map(doc => {
//       //   const data = doc.data();
//       //   const doc_id = doc.id;
//       //   return {doc_id, ...data};
//       console.log(snapshot.data());
//       setUser(snapshot.data());
    
//     });
// }, [user]);

// const onValueChange = (snapshot) => {
//   console.log(snapshot)
//   const data = snapshot.val();
//   const items = Object.values(data);
//   console.log("onvaluechange called")
//   console.log(items)
//   setUser(items);
// }

// const sighnout= async ()=>{
//   await auth() 
//    .signOut()
//    .then(() => console.log('User signed out!'));
//  }

// return (
//   <View style={styles.container}>
//     <StatusBar
//       barStyle="light-content"
//       backgroundColor={COLORS.DEFAULT_GREEN}
//       translucent={false}
//     />
//     <ScrollView>
//       <View style={styles.userInfoSection}>
//         <View style={{ flexDirection: 'row',  marginTop:"10%" }}>
//           <Avatar.Image
//             // source={require('../../assets/images/person.png')}
//             source = {user.image? {uri : 'data:image/jpeg;base64,' + user.image}:require('../../assets/user2.png')}
//             size={110}
//           />
//           <View style={{ marginLeft: 20 }}>
//             <Title style={styles.title}>{user.firstname}</Title>
//             {/* <Caption style={styles.caption}></Caption> */}
//             <View style={{ marginRight: 10 }}>
//               <MaterialCommunityIcons.Button
//                 activeOpacity={1}
//                 name="account-edit"
//                 size={25}
//                 backgroundColor='#fff'
//                // color='#000'
//               // color="#FF6347" 
//                color={COLORS.DEFAULT_GREEN}
//                 onPress={() => navigation.navigate('EditProfile')}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       {/* <View style={styles.boarder}></View> */}
//       <View style={styles.userInfoSection}>
//         <View style={styles.row}>
//           <Icon name="map-marker-radius" 
//          // color='#777777' 
//          color={COLORS.DEFAULT_GREEN}
//         //  color="#FF6347" 
//           size={20} />
//           <Text style={{ color: '#777777', marginLeft: 10 }}>{user.address}</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="phone" 
//           color={COLORS.DEFAULT_GREEN}
//           //color="#FF6347" 
//           size={20} />
//           <Text style={{ color: '#777777', marginLeft: 10 }}>{user.mobile}</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="email" 
//           //color="#FF6347"  
//           color={COLORS.DEFAULT_GREEN}
//           size={20} />
//           <Text style={{ color: '#777777', marginLeft: 10 }}>{user.email}</Text>
//         </View>
//       </View>
//       {/* <View style={styles.infoBoxWrapper}>
//          <View style={styles.infoBox}>
//            <Title>$117</Title>
//            <Caption>Wallet</Caption>
//          </View>
//          <View style={styles.infoBox}>
//            <Title>17</Title>
//            <Caption>Orders</Caption>
//          </View>
//        </View> */}
//       <View style={styles.boarder}></View>
//       <View style={styles.menuWrapper}>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name='heart-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
//             <Text style={styles.menuItemText}>Your Favorites</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => {navigation.navigate('CompletedOrderScreen')}}>
//           <View style={styles.menuItem}>
//             <Icon name='credit-card' color={COLORS.DEFAULT_GREEN} size={25} />
//             <Text style={styles.menuItemText}>Your Orders</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name='share-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
//             <Text style={styles.menuItemText}>Tell Your Friends</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name='account-check-outline' color={COLORS.DEFAULT_GREEN} size={25} />
//             <Text style={styles.menuItemText}>Support</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name='cog-outline'  color={COLORS.DEFAULT_GREEN} size={25} />
//             <Text style={styles.menuItemText}>Settings</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => sighnout()}>
//           <View style={styles.menuItem}>
//             <Icon name='lock-outline' 
//            // color="#FF6347" 
//            color={COLORS.DEFAULT_GREEN}
//             size={25} />
//             <Text style={styles.menuItemText}>Logout</Text>
//           </View>
//         </TouchableRipple>
//       </View>
//       <View style={styles.spacing}></View>
//     </ScrollView>
//   </View>
// );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,  
//     backgroundColor: 'white',
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     // marginTop: 10,
//     marginBottom: 5,
//    // color:COLORS.DEFAULT_GREEN,
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: '500',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 15,
//   },
//   infoBoxWrapper: {
//     borderBottomColor: '#dddddd',
//     borderBottomWidth: 1,
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     height: 100,
//   },
//   infoBox: {
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRightColor: '#dddddd',
//     borderRightWidth: 1,
//   },
//   menuWrapper: {
//     // marginTop: 10,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   menuItemText: {
//     color: '#777777',
//     marginLeft: 20,
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 26,
//   },
//   spacing: {
//     margin: 10,
//   },
//   boarder: {
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     height: 10,
//     marginBottom: 10,
//   },
// });

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Text,
//   Button,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';
// import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import firestore from '@react-native-firebase/firestore';
// import auth, {firebase} from '@react-native-firebase/auth';

// const Profile = ({navigation}: any) => {
//   const [user, setUser] = useState({});

//   //   let id =auth().currentUser.uid
//   //   firestore().collection("users").get().then((snapshot) => {
//   //     const userData = snapshot.docs.filter((doc) => doc.data())
//   //     console.log(userData)
//   //     setUser(user)
//   //   })

//   // }
//   useEffect(() => {
//     let id = auth().currentUser.uid;
//     const subscriber = firestore()
//       .collection('users')
//       .doc(id)
//       .get()
//       .then(snapshot => {
//         // let snap = snapshot.docs.map(doc => {
//         //   const data = doc.data();
//         //   const doc_id = doc.id;
//         //   return {doc_id, ...data};
//         console.log(snapshot.data());
//         setUser(snapshot.data());
//         // });
//         //console.log(snap)
//         // setBiryaniData(snap);
//       });
//   }, [user]);

//   const onValueChange = snapshot => {
//     console.log(snapshot);
//     const data = snapshot.val();
//     const items = Object.values(data);
//     console.log('onvaluechange called');
//     console.log(items);
//     setUser(items);
//   };

//   // useEffect(() => {
//   //   console.log("useeffect called")
//   //   itemRef.on('value', onValueChange);
//   //   // call getFruitDetail here
//   //   getFruitDetails();
//   //   return () => { itemRef.off('value', onValueChange) }; // clean up code after componentWillUnmount
//   // }, [])

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
//       <ScrollView>
//         <View style={styles.userInfoSection}>
//           <View style={{flexDirection: 'row', marginTop: 15}}>
//             <Avatar.Image
//               // source={require('../../assets/images/person.png')}
//               source={{uri: 'data:image/jpeg;base64,' + user.image}}
//               size={110}
//             />
//             <View style={{marginLeft: 20}}>
//               <Title style={styles.title}>{user.firstname}</Title>
//               <Caption style={styles.caption}>@venky_17</Caption>
//               <View style={{marginRight: 10}}>
//                 <MaterialCommunityIcons.Button
//                   activeOpacity={1}
//                   name="account-edit"
//                   size={25}
//                   backgroundColor="#fff"
//                   color="#000"
//                   onPress={() => navigation.navigate('EditProfile')}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//         {/* <View style={styles.boarder}></View> */}
//         <View style={styles.userInfoSection}>
//           <View style={styles.row}>
//             <Icon name="map-marker-radius" color="#777777" size={20} />
//             <Text style={{color: '#777777', marginLeft: 10}}>
//               Kurnool, India
//             </Text>
//           </View>
//           <View style={styles.row}>
//             <Icon name="phone" color="#777777" size={20} />
//             <Text style={{color: '#777777', marginLeft: 10}}>
//               +91-9894903211
//             </Text>
//           </View>
//           <View style={styles.row}>
//             <Icon name="email" color="#777777" size={20} />
//             <Text style={{color: '#777777', marginLeft: 10}}>{user.email}</Text>
//           </View>
//         </View>
//         {/* <View style={styles.infoBoxWrapper}>
//          <View style={styles.infoBox}>
//            <Title>$117</Title>
//            <Caption>Wallet</Caption>
//          </View>
//          <View style={styles.infoBox}>
//            <Title>17</Title>
//            <Caption>Orders</Caption>
//          </View>
//        </View> */}
//         <View style={styles.boarder}></View>
//         <View style={styles.menuWrapper}>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Icon name="heart-outline" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Your Favorites</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Icon name="credit-card" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Payments</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Icon name="share-outline" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Tell Your Friends</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Icon name="account-check-outline" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Support</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Icon name="cog-outline" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Settings</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple
//             onPress={() => {
//               navigation.navigate('Login');
//             }}>
//             <View style={styles.menuItem}>
//               <Icon name="lock-outline" color="#FF6347" size={25} />
//               <Text style={styles.menuItemText}>Logout</Text>
//             </View>
//           </TouchableRipple>
//         </View>
//         <View style={styles.spacing}></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     backgroundColor: 'white',
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     // marginTop: 10,
//     marginBottom: 5,
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: '500',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 15,
//   },
//   infoBoxWrapper: {
//     borderBottomColor: '#dddddd',
//     borderBottomWidth: 1,
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     height: 100,
//   },
//   infoBox: {
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRightColor: '#dddddd',
//     borderRightWidth: 1,
//   },
//   menuWrapper: {
//     // marginTop: 10,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   menuItemText: {
//     color: '#777777',
//     marginLeft: 20,
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 26,
//   },
//   spacing: {
//     margin: 10,
//   },
//   boarder: {
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     height: 10,
//     marginBottom: 10,
//   },
// });
