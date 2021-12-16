import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      margin: 10,
      paddingLeft: 20,
    },
    text: {
      fontSize: 20,
      color: 'black',
      margin: 10,
      paddingLeft: 20,
      alignContent: 'stretch',
    },
    image: {
      width: '100%',
      height: 300,
    },
    grams: {
      alignContent: 'space-between',
      justifyContent: 'space-around',
      paddingRight: 20,
      fontSize: 20,
      margin: 10,
    },
    button: {
      backgroundColor: '#229879',
      borderRadius: 10,
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      alignItems: 'center',
    },
    buttonText: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'white',
    },
  });