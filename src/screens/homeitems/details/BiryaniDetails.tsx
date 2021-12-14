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
  StatusBar,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
//import COLORS from '../../Home/colors';
import { COLORS } from '../../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import cheese1 from '../../../assets/FoodImages/cheese1.png';
import patty from '../../../assets/FoodImages/patty.png';
import veggies from '../../../assets/FoodImages/veggies.png'
import caloriesicon from '../../../assets/FoodImages/caloriesicon.png';
import { connect } from 'react-redux';
import { AddData } from '../../../redux/cartAction';

const BiryaniDetails = ({navigation, route,addItem}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(0);
  const [proteins, setProteins] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fats, setFats] = React.useState(0);
  const [isveggies, setIsVeggies] = React.useState(false);
  const [isPatty, setIsPatty] = React.useState(false);
  const [amount, setAmount] = React.useState(0);


  useEffect(() => {
    let calories = Route.calories;
    let proteins = Route.proteins;
    let carbs = Route.carbs;
    let fats = Route.fats;
    let amount =Route.price;
    setCount(calories);
    setProteins(proteins);
    setCarbs(carbs);
    setFats(fats);
    setAmount(amount);
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
      <StatusBar
      barStyle="light-content" 
      backgroundColor={COLORS.DEFAULT_GREEN }
      translucent={false} 
      />
      <View style={style.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
           style={style.image} source={{uri: Route.image}} 
          />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingRight:8}}>
          <Image
          source={caloriesicon}
          style={{height:50,width:50}}
          />
        <Text style={style.text}>Total Calories : {counter}</Text>
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
          <Text style={{
            fontSize: 22, 
           // fontWeight: 'bold', 
            color: COLORS.DEFAULT_BLACK,
            }}>
              {Route.name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.DEFAULT_WHITE,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Rs {amount}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              fontSize: 22,
            //  fontWeight: 'bold',
             // color: COLORS.DEFAULT_BLACK,
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
            <Text style={style.checkboxText}>Extra Paneer</Text>
          
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
                    checCheese ? setAmount(amount - 50) : setAmount(amount + 50);
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
                    isveggies ? setAmount(amount - 30) : setAmount(amount + 30);
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
              style={{color: COLORS.DEFAULT_WHITE, fontSize: 18, fontWeight: 'bold'}}>
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
export default connect(null,mapDispatchToProps)(BiryaniDetails);

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.DEFAULT_GREEN,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 280,
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
    //backgroundColor: COLORS.DEFAULT_YELLOW,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
   // backgroundColor: COLORS.DEFAULT_BLACK,
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
  borderBtnText: {
    fontWeight: 'bold', 
    fontSize: 28,
  },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
  },
  priceTag: {
    backgroundColor: COLORS.DEFAULT_YELLOW,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  nutritionsText: {
    marginLeft: 10,
    color: COLORS.DEFAULT_GREEN,
    fontWeight: 'bold',
    fontSize: 20,
  },
  checkboxbiew: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.6,
    paddingBottom: 10,
    paddingRight:18,
   // color: COLORS.DEFAULT_GREEN,
  },
  checkboxText: {
    paddingLeft: 10,
    color: COLORS.DEFAULT_BLACK,
   // fontWeight: 'bold',
    fontSize: 20,
    flex: 0.4,
  },
  calories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  addToCart:{
    backgroundColor:COLORS.DEFAULT_GREEN,
    width:'70%',
    alignItems:'center',
    justifyContent:'center',  
  },
});