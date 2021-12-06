import React from 'react';
import { StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import COLORS from '../Home/colors';


const PrimaryButton = ({title, onPress = () => {}}:any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor:`#dc143c`}}>
        <Text style={{...style.title, color: COLORS.white}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18,},
  btnContainer: {
    backgroundColor: `#dc143c`,
    height: 50,
    marginTop:20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};