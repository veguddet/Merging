import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import COLORS from '../../Home/colors';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import cheese1 from '../../../assets/FoodImages/cheese1.png';
import patty from '../../../assets/FoodImages/patty.png';
import veggies from '../../../assets/FoodImages/veggies.png'
import caloriesicon from '../../../assets/FoodImages/caloriesicon.png';
import { connect } from 'react-redux';
import { AddData } from '../../../redux/cartAction';

const BurgerDetails = ({navigation, route,addItem}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(0);
  const [proteins, setProteins] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fats, setFats] = React.useState(0);
  const [isveggies, setIsVeggies] = React.useState(false);
  const [isPatty, setIsPatty] = React.useState(false);

  useEffect(() => {
    let calories = Route.calories;
    let proteins = Route.proteins;
    let carbs = Route.carbs;
    let fats = Route.fats;
    setCount(calories);
    setProteins(proteins);
    setCarbs(carbs);
    setFats(fats);
  }, []);

   const handleAddData=()=>{
          addItem({
                Proteins:proteins,
                Fats:fats,
                Carbs:carbs,
                calories:counter,
                Name:Route.name,
                Price:Route.price,
                Image:Route.image,
                id:Math.floor(Math.random()*9999999),
                count:1

          })
         // navigation.navigate('Cart')
         navigation.popToTop()
  }
  console.log(counter);
  const Route = route.params;
  return (
    <ScrollView>
      <View style={style.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Image style={style.image} source={{uri: Route.image}} />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingRight:8}}>
          <Image
          source={caloriesicon}
          style={{height:50,width:50}}
          />
        <Text style={style.text}>Total Calories:{counter}</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
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
              marginLeft: 20,
              marginTop: 10,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Nutritional Info
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
            paddingTop:10,
            paddingLeft:5
            }}>
            <Text style={style.nutritionsText}>Carbs:{carbs}</Text>
            <Text style={style.nutritionsText}>Proteins:{proteins}</Text>
            <Text style={style.nutritionsText}>Fats:{fats}</Text>
          </View>
        </View>
        <View style={{flex: 1,paddingTop:10}}>
         
          <View style={style.checkboxbiew}>
          <Image source={cheese1} style={style.Icon}/>
            <Text style={style.checkboxText}>Extra Cheese</Text>
          
            <Checkbox
              status={checCheese ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckCheese(!checCheese);
                {
                  checCheese ? setCount(counter - 50) : setCount(counter + 50);
                  checCheese ? setCarbs(carbs - 10) : setCarbs(carbs + 10);
                  checCheese
                    ? setProteins(proteins - 10)
                    : setProteins(proteins + 10);
                    checCheese ? setFats(fats - 50) : setFats(fats + 50);
                }
              }}
            />
          </View>

          <View style={style.checkboxbiew}>
          <Image source={veggies} style={style.Icon}/>
            <Text style={style.checkboxText}>Extra Veggies</Text>
            <Checkbox
              status={isveggies ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsVeggies(!isveggies);
                {
                  isveggies ? setCount(counter - 50) : setCount(counter + 50);
                  isveggies ? setCarbs(carbs - 10) : setCarbs(carbs + 10);
                  isveggies
                    ? setProteins(proteins - 10)
                    : setProteins(proteins + 10);
                    isveggies ? setFats(fats - 30) : setFats(fats + 30);
                }
              }}
            />
          </View>
          <View style={style.checkboxbiew}>
          <Image source={patty} style={style.Icon}/>
            <Text style={style.checkboxText}>Extra Patty</Text>
            <Checkbox
              status={isPatty ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsPatty(!isPatty);
                {
                    isPatty ? setCount(counter - 90) : setCount(counter + 90);
                    isPatty ? setCarbs(carbs - 30) : setCarbs(carbs + 30);
                    isPatty
                    ? setProteins(proteins - 10)
                    : setProteins(proteins + 10);
                    isPatty ? setFats(fats - 50) : setFats(fats + 50);
                }
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={style.buyBtn} onPress={handleAddData}>
            <Text
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
function mapDispatchToProps(dispatch:any) {
return { 
  addItem: (product) => dispatch(AddData(product))
};
} 
export default connect(null,mapDispatchToProps)(BurgerDetails);

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
    //margin: 10,
  },
  image: {
    width: '100%',
    height: 290,
    paddingTop: 20,
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
  Icon:{
      height:40,
      width:40,
    
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.6,
    paddingBottom: 10,
    paddingRight:18
  },
  checkboxText: {
    paddingLeft: 10,
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 0.4,
  },
  calories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  addToCart:{
    backgroundColor:'green',
    width:'70%',
    alignItems:'center',
    justifyContent:'center'

    
  },

});