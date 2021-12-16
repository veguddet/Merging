import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
//import { styles } from './styles';

const Nutrition = ({navigation}: any) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image 
      style={styles.image} 
      source={require('../../assets/FoodImages/burger.jpg')}
      />
      <View 
       style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginVertical: 5
    }}>
      <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }}>
      <Text style={styles.header}>Nutrition</Text>
      <Text style={styles.text}>Calories</Text> 
      <Text style={styles.text}>Protines</Text>
      <Text style={styles.text}>Fat</Text>
      <Text style={styles.text}>Carbs</Text>
      </View>
      <View 
      style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingTop: 50
           }}>
      <Text style={styles.grams}>217g</Text> 
      <Text style={styles.grams}>42g</Text> 
      <Text style={styles.grams}>35g</Text>
      <Text style={styles.grams}>24g</Text> 
      </View>
      </View>

      <View 
       style={{
        flexDirection: 'row',
       // paddingHorizontal: 30,
        marginVertical: 5
    }}>
      <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }}>
      <Text style={styles.header}>Extra Toppings</Text>
      <Text style={styles.text}>Extra Cheese</Text>
      <Text style={styles.text}>Extra Tomatos</Text>
      <Text style={styles.text}>Extra Sause</Text>
      </View>
      <View 
      style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingTop: 50
           }}>
      <Text style={styles.grams}>46g</Text> 
      <Text style={styles.grams}>32g</Text>
      <Text style={styles.grams}>12g</Text> 
      </View>
      </View>

      <View 
       style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginVertical: 5
    }}>
      <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }}>
      <Text style={styles.header}>Total Calories</Text>
      </View>
      <View 
      style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
             // paddingTop: 50
           }}>
      <Text style={styles.grams}>450g</Text> 
      </View>
      </View>
      <View>
      <TouchableOpacity
        style={styles.button}
       //</View> onPress={() => navigation.navigate('Order')}
       >
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default Nutrition;
