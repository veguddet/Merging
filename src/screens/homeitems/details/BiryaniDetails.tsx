import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';
import {Checkbox} from 'react-native-paper';
import COLORS from '../../Home/colors';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import caloriesicon from '../../../assets/FoodImages/caloriesicon.png';
import veggies from '../../../assets/FoodImages/veggies.png';

const BiryaniDetails = ({navigation, route}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(0);
  const [proteins, setProteins] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [cal, setCal] = React.useState();

  useEffect(() => {
    let calories = Route.calories;
    let proteins = Route.proteins;
    let carbs = Route.carbs;
    setCount(calories);
    setProteins(proteins);
    setCarbs(carbs);
  }, []);
  console.log(counter);
  const Route = route.params;
  return (
    <ScrollView>
      <View style={style.container}>
        <Image style={style.image} source={{uri: Route.image}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 8,
          }}>
          <Image source={caloriesicon} style={{height: 50, width: 50}} />
          <Text style={style.text}>Total Calories:{counter}</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{Route.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Rs{Route.price}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 20,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Nutritional Info
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              paddingLeft: 10,
            }}>
            <Text style={style.nutritionsText}>Carbs:{carbs}</Text>
            <Text style={style.nutritionsText}>Proteins:{proteins}</Text>
            <Text style={style.nutritionsText}>Fats:{Route.fats}</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={style.checkboxbiew}>
            <Image source={veggies} style={style.Icon} />
            <Text style={style.checkboxText}>Extra Veggies</Text>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                {
                  checked ? setCount(counter - 70) : setCount(counter + 70);
                }
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BiryaniDetails;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 400,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  nutritionsText: {
    marginLeft: 10,
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 20,
  },
  checkboxbiew: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.6,
    paddingLeft: 20,
  },
  checkboxText: {
    padding: 10,
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 0.4,
  },
  Icon: {
    height: 40,
    width: 40,
  },
  calories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});
