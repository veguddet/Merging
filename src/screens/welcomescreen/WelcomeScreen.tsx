// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ImageBackground,
//   StatusBar,
// } from 'react-native';
// import {styles} from './style';
// import { COLORS } from './../../constants/theme';

// const WelcomeScreen = ({navigation}: any) => {
//   return (
//     <View>
//       <StatusBar
//       barStyle="light-content"
//       backgroundColor={COLORS.black}
//       translucent={false}
//     // hidden
//     />
//       <ImageBackground
//         source={{
//           uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
//         }}
//         style={styles.imageContainer}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.buttons}>
//             <Text
//               style={styles.buttonText}
//                 onPress={() => navigation.navigate('Login')}>
//               LOGIN
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.buttons}>
//             <Text
//               style={styles.buttonText}
//               onPress={() => navigation.navigate('Register')}>  
//               REGISTER
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };
// export default WelcomeScreen;

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, SIZES, FONTS } from './../../constants';
import { CustomButton } from '../../components';

const WelcomeScreen = ({ navigation }: any) => {

    function renderHeader() {
        return (
            <View
            style={{
                height: SIZES.height > 700  ? "65%" : "60%"
            }}
            >
               <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.black}
                translucent={false}
               />
                <ImageBackground
                   source={images.loginBackground}
                   style={{
                       flex: 1,
                       justifyContent: 'flex-end',
                   }}
                   resizeMode="cover"
                   
                >
                    <LinearGradient
                       start={{ x: 0, y: 0 }}
                       end={{ x: 0, y: 1 }}
                       colors={[
                           COLORS.transparent,
                           COLORS.black
                       ]}
                       style={{
                           height: 200,
                           justifyContent: "flex-end",
                           paddingHorizontal: SIZES.padding
                       }}
                    >
                         <Text
                           style={{
                               width: "90%",
                               color: COLORS.white,
                               ...FONTS.largeTitle,
                               lineHeight: 45
                           }}
                        >
                            Eat Healthy and Delicious Food Easily
                        </Text> 
                    </LinearGradient>
                </ImageBackground>

            </View>
        )
    }

    function renderDetail() {
        return (
            <View
               style={{
                   flex: 1,
                   paddingHorizontal: SIZES.padding
               }}
            >
                {/* Description */}
                <Text
                   style={{
                       marginTop: SIZES.radius,
                       width: "70%",
                       color: COLORS.gray,
                       ...FONTS.body3
                   }}
                >
                    Discover more than 1200 food recipes in your
                    hand and find it easily!
                </Text>
                {/* Buttons */}
                <View
                  style={{
                      flex: 1,
                      justifyContent: 'center'
                  }}
                >
                    {/* Login */}
                    <CustomButton
                    buttonText="Login" 
                    buttonContainerStyle={{
                        paddingVertical: 18,
                        borderRadius: 20
                    }}
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => navigation.navigate('Login')}
                    />

                    {/* Sign Up */}
                    <CustomButton
                    buttonText="Sign Up" 
                    buttonContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingVertical: 18,
                        borderRadius: 20,
                        borderColor: COLORS.darkLime,
                        borderWidth: 1
                    }}
                    colors={[]}
                    onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </View>
        )
    }

    return (
        <View 
           style={{
               flex:1,
               backgroundColor: COLORS.black
        }}
        >
            <StatusBar barStyle="light-content" />

            {/* Header  */}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}
        </View>
    )
}

export default WelcomeScreen;