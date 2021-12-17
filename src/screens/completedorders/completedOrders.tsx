import {isTSEnumMember} from '@babel/types';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  Button,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import {style} from '../homeitems/details/DetailScreen';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';
import {useFocusEffect} from '@react-navigation/core';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS} from '../../constants';
import {Display} from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import { styles } from './styles';

const CompletedOrderScreen = ({navigation}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  const [completedOrders, setCompletedOrders] = useState({});
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [onEdit, setEdit] = useState(false);

  useEffect(() => {
      let user = auth().currentUser;
    let id = user?.uid;
    const subscriber = firestore()
      .collection('users')
      .doc(id)
      .collection('userOrders')
      .orderBy('Date','desc')
      .get()
      .then(snapshot => {
        let snap = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('data', data);
          const doc_id = doc.id;
          return {doc_id, ...data};
        });

        setCompletedOrders(snap);
      });
    console.log('insidecomplete', completedOrders);
  }, [completedOrders]);

  // const Card = ({ data }: any) => {
  //     let Item = [];
  //     if (data.Orders) {
  //         Item = data.Orders.map(row => {
  //             return (
  //                 <View style={{ flexDirection: 'row' }}>
  //                     <Text>{row.Name}</Text>
  //                     <Text>{row.Price}*{row.count}={row.Price*row.count}</Text>
  //                 </View>
  //             );
  //         });
  //     }

  //     return (
  //         <View style={{flex:1,marginLeft:'5%', shadowColor: 'black',
  //         shadowOffset: {width: 0, height: 2},
  //         shadowRadius: 6,
  //         shadowOpacity: 0.26,
  //         elevation: 8,
  //         backgroundColor: 'white',
  //         padding: 20,
  //         borderRadius: 10,
  //         marginTop: 20,
  //         marginLeft: 20,
  //         marginRight: 20,}}>
  //             <View>
  //                 <Text>Address : {data.Address}</Text>
  //             </View>
  //             <View>
  //                 <Text>Items Ordered : </Text>
  //             </View>
  //             {Item}
  //             <View><Text>Grand Total : {data.GrandTotal}</Text></View>
  //         </View>
  //     );
  // };

  const Card = ({data}: any) => {
    var Item = [];
    if (data.Orders) {
      Item = data.Orders.map(row => {
        return (
          <View style={{flexDirection: 'row', marginRight: '20%'}}>
            <Text> Item Name : {row.Name}</Text>
          </View>
        );
      });
    }

    return (
      <View style={{flex: 1}}>
        <View style={styles.details1}>
          <View>
            <Text>Order ID :{data.doc_id}</Text>
          </View>

          <View>
            <Text>Grand Total : {data.GrandTotal}</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                marginTop: 5,
              }}
              onPress={() => navigation.navigate('OrderHistory', data, Item)}>
              <Text
                style={{
                  color: COLORS.darkGreen,
                  textDecorationLine: 'underline',
                  ...FONTS.h4,
                }}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topview}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            // justifyContent: 'center',
            marginTop: '3%',
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            // style={{paddingTop: 5}}
            // color={COLORS.DEFAULT_GREEN}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.addeditems}>Order History</Text>
        </View>

        {/* <View style={styles.height10} /> */}

        <View style={{marginTop: '2%'}}>
          <FlatList
            data={completedOrders}
            renderItem={({item}) => {
              return <Card data={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    backgroundColor: 'white',
  },
  details: {
    fontSize: 18,
    color: COLORS.white2,
  },
  addeditems: {
    fontSize: 28,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  height10: {
    height: 5,
  },
  details1: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 9,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
export default CompletedOrderScreen;

// import React, { useCallback, useEffect, useState } from 'react';
// import {
//     Text,
//     View,
//     TouchableOpacity,
//     StyleSheet,
//     FlatList,
//     Image

// } from 'react-native';

// import { useSelector } from 'react-redux';

// import firestore from '@react-native-firebase/firestore';
// import auth, { firebase } from '@react-native-firebase/auth';

// import { COLORS ,FONTS } from '../../constants';

// import Ionicons from "react-native-vector-icons/Ionicons";

// //import { styles } from './styles';

// const CompletedOrderScreen = ({ navigation }: any) => {
//     const { cartList } = useSelector(state => state.cartReducer);
//     const [completedOrders, setCompletedOrders] = useState({});
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [onEdit, setEdit] = useState(false);

//     useEffect(() => {
//         let id = auth().currentUser.uid;
//         const subscriber = firestore()
//             .collection('users')
//             .doc(id)
//             .collection('userOrders')
//             .orderBy('Date', 'desc')
//             .get()
//             .then(snapshot => {
//                 let snap = snapshot.docs.map(doc => {
//                     const data = doc.data();

//                     const doc_id = doc.id;
//                     return { doc_id, ...data };
//                 });

//                 setCompletedOrders(snap);
//             });

//     }, [completedOrders]);

//     const Card = ({ data }: any) => {
//         var Item = [];
//         if (data.Orders) {
//             Item = data.Orders.map(row => {
//                 return (
//                     <View style={{ flexDirection: 'row', marginRight:'20%',}}>
//                         <Text> Item Name : {row.Name}</Text>

//                     </View>
//                 );
//             });
//         }

//         return (
//             <View style={{flex:1,}}>

//             <View style={styles.details1}>
//                 <View>
//                     <Text>Order ID :{data.doc_id}</Text>
//                 </View>

//                 <View><Text>Grand Total : {data.GrandTotal}</Text></View>

//             <View>
//             <TouchableOpacity
//             style={{
//               marginTop:5,
//             }}
//             onPress={() => navigation.navigate('OrderHistory',data,Item)}>
//             <Text
//               style={{
//                 color: COLORS.darkGreen,
//                 textDecorationLine: 'underline',
//                 ...FONTS.h4,
//               }}>
//               See More
//             </Text>
//           </TouchableOpacity>
//           </View>
//           </View>

//             </View>

//         );
//     };

//     return (

//         <View style={{ flex: 1 ,backgroundColor:'white',}}>
//              <View style={styles.topview}>
//                  <View style={{
//                      alignItems: 'center',
//                     flexDirection: 'row' ,
//                    marginTop: '10%',
//                     }}>
//                 <Ionicons
//                  name="chevron-back-outline"
//                 size={30}
//                 style={{paddingTop: 5,}}
//                 color={COLORS.DEFAULT_GREEN}
//                 onPress={() => navigation.goBack()} />
//                     <Text style={styles.addeditems}>My Order History</Text>
//                 </View>

//                 <View style={styles.height10} />

//                  <View style={{ marginTop: '5%' }}>
//                      <FlatList
//                         data={completedOrders}
//                          renderItem={({ item }) => {
//                              return <Card data={item} />;
//                         }}/>

//                     </View>
//                     </View>
//                  </View>

//     );

// };

// const styles = StyleSheet.create({
//     topview: {
//       backgroundColor:'white',
//     },
//     details: {
//         fontSize: 18,
//         color: COLORS.white2,

//     },
//     addeditems: {
//         fontSize: 28,
//         color: COLORS.DEFAULT_GREEN,
//         fontWeight: 'bold',
//         paddingLeft: 10,

//     },

//     height10: {
//         height:5,
//     },
//     details1:{
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 6,
//         shadowOpacity: 0.26,
//         elevation: 9,
//         backgroundColor: 'white',
//         padding: 20,
//         borderRadius: 10,
//         marginTop: 30,
//        marginLeft: 15,
//        marginRight: 15,
//         flexDirection: 'column',
//          justifyContent: 'space-between',
//          alignItems: 'flex-start',
//       }

// });
// export default CompletedOrderScreen;
