import { isTSEnumMember } from '@babel/types';
import React, { useCallback, useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { style } from '../homeitems/details/DetailScreen';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/core';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { Display } from '../../utils';
import Ionicons from "react-native-vector-icons/Ionicons";

//import { styles } from './styles';

const CompletedOrderScreen = ({ navigation }: any) => {
    const { cartList } = useSelector(state => state.cartReducer);
    const [completedOrders, setCompletedOrders] = useState({});
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [onEdit, setEdit] = useState(false);

    useEffect(() => {
        let id = auth().currentUser.uid;
        const subscriber = firestore()
            .collection('users')
            .doc(id)
            .collection('userOrders')
            .get()
            .then(snapshot => {
                let snap = snapshot.docs.map(doc => {
                    const data = doc.data();
                    console.log('data', data);
                    const doc_id = doc.id;
                    return { doc_id, ...data };
                });

                setCompletedOrders(snap);
            });
        console.log('insidecomplete', completedOrders);
    }, [completedOrders]);

    const Card = ({ data }: any) => {
        let Item = [];
        if (data.Orders) {
            Item = data.Orders.map(row => {
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{row.Name}</Text>
                        <Text>{row.Price}*{row.count}={row.Price*row.count}</Text>
                    </View>
                );
            });
        }

        return (
            <View style={{flex:1,marginLeft:'5%', shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,}}>
                <View>
                    <Text>Address : {data.Address}</Text>
                </View>
                <View>
                    <Text>Items Ordered : </Text>
                </View>
                {Item}
                <View><Text>Grand Total : {data.GrandTotal}</Text></View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topview}>
                <View style={{ 
                    alignItems: 'center', 
                    flexDirection: 'row' ,
                   // justifyContent: 'center',
                    marginTop: '5%',
                    }}>
                <Ionicons 
                name="chevron-back-outline" 
                size={30} 
               // style={{paddingTop: 5}}
               // color={COLORS.DEFAULT_GREEN}
                onPress={() => navigation.goBack()} />
                    <Text style={styles.addeditems}>CompletedOrderScreen</Text>
                </View>

                <View style={styles.height10} />

                <View style={{ marginTop: '5%' }}>
                    <FlatList
                        data={completedOrders}
                        renderItem={({ item }) => {
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
      //  flex: 1,
      //  marginTop: 30,
    },
    details: {
        fontSize: 18,
        color: COLORS.gray,
        // fontWeight: '800',
    },
    detailsContainer: {
        padding: 20,
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    grandTotal: {
        fontSize: 30,
        fontWeight: '500',
    },
    Itemdata: {
        fontSize: 16,
        fontWeight: '300',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'grey',
    },

    topCardView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addeditems: {
        fontSize: 28,
        color: COLORS.DEFAULT_GREEN,
        fontWeight: 'bold',
      //  marginTop: 20,
    //  alignItems: 'center',
      paddingLeft: 30,
    },
    height20: {
        height: 20,
    },
    imageview: {
        width: '',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#cccccc',
        paddingBottom: 5,
    },
    imagelink: {
        width: 120,
        height: 120,
    },
    text199view: {
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 60,
        paddingLeft: 10,
        paddingTop: 40,
        fontWeight: 'bold',
        fontSize: 20,
    },
    text199: {
        width: 100,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#228b22',
        right: 120,
        color: '#000000',
        fontWeight: 'bold',
        borderColor: '#000000',
    },
    text19: {
        fontWeight: 'bold',
        color: `#f0ffff`,
        fontSize: 15,
        paddingRight: 5,
    },
    text1: {
        fontWeight: 'bold',
        color: `#006400`,
        fontSize: 20,
    },
    height10: {
        height: 20,
    },
    counter: {
        paddingHorizontal: 8,
        fontWeight: 'bold',
    },
    buyBtn: {
        backgroundColor: COLORS.DEFAULT_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        height: Display.setHeight(6),
        borderRadius: 10,
        marginBottom: 20,
    },
    amountview: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    touch: {
        width: 130,
        height: 50,
        backgroundColor: '#00B761',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    order: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default CompletedOrderScreen;
