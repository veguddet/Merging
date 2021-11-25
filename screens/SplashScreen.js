import React, {useEffect} from 'react';
import { View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import image from '../assets/plate.png';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=> {
            navigation.navigate('Welcome');
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle='light-content'
            backgroundColor="black"
            translucent
            />
            <Image
               source={image} 
               resizeMode="contain"
               style={styles.image}
            />
            <Text style={styles.titleText}>Food App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    },
    image: {
        height: 100,
        width: 100,
    },
    titleText: {
        color: "white",
        fontSize: 26,
       // fontFamily: Fonts.POPPINS_LIGHT,
        paddingTop: 16,

    }
})

export default SplashScreen;