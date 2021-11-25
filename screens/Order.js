import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Order = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=> {
            navigation.navigate('Tabs');
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Congratulations</Text>
            <Text style={styles.text}>Order is Placed</Text>
            <Text style={styles.text}>Toatl Amount is $565</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        margin: 10,
    },
});
export default Order
