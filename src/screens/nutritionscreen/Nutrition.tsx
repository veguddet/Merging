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
  Alert,
  ImageBackground,
} from 'react-native';
import {Checkbox, Title} from 'react-native-paper';
import { COLORS,FONTS } from '../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {AddData} from '../../redux/cartAction';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Nutrition = ({navigation, route, addItem}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(0);
  const [proteins, setProteins] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fats, setFats] = React.useState(0);
  const [isveggies, setIsVeggies] = React.useState(false);
  const [isPatty, setIsPatty] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [fromPizza, setFromPizza] = React.useState(false);
  const [fromBiryani, setFromBiryani] = React.useState(false);
  const [fromFrankie, setFromFrankie] = React.useState(false);
  const [fromBurger, setFromBurger] = React.useState(false);

  useEffect(() => {
    let calories = Route.calories;
    let proteins = Route.proteins;
    let carbs = Route.carbs;
    let fats = Route.fats;
    let amount = Route.price;
    setCount(calories);
    setProteins(proteins);
    setCarbs(carbs);
    setFats(fats);
    setAmount(amount);
    if (Route.type === 'pizza') {
      setFromPizza(true);
    } else if (Route.type === 'biryani') {
      setFromBiryani(true);
    } else if (Route.type === 'frankie') {
      setFromFrankie(true);
    } else if (Route.type === 'burger') {
      setFromBurger(true);
    }
  }, []);

  const handleAddData = () => {
    addItem({
      Proteins: proteins,
      Fats: fats,
      Carbs: carbs,
      calories: counter,
      Name: Route.name,
      Price: amount,
      Image: Route.image,
      id: Math.floor(Math.random() * 9999999),
      count: 1,
    });
     navigation.jumpTo('Carttab')
   // navigation.popToTop();
  };
  console.log(counter);
  const Route = route.params;
  return (
    <ScrollView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <View style={style.container}>
        <View style={{}}>
          <ImageBackground
            resizeMode="cover"
            style={style.image}
            source={{uri: Route.image}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconAntDesign
                name="arrowleft"
                size={30}
                color={COLORS.DEFAULT_GREEN}
                style={{padding: 15}}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 8,
          }}>
          <Image
            source={require('../../assets/FoodImages/caloriesicon.png')}
            style={{height: 50, width: 50}}
          />
          <Text style={style.text}>Total Calories : {counter}</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
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
                fontSize: 18,
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
              fontSize: 20,
              // fontWeight: 'bold',
              // color: COLORS.DEFAULT_BLACK,
            }}>
            Nutritional Info
          </Text>

          <View style={style.mainView}>
            <View style={{width: '25%', paddingLeft: 10}}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <View style={{}}>
                  <Image
                    style={style.icon1}
                    source={{
                      uri: 'https://icon-library.com/images/carbs-icon/carbs-icon-9.jpg',
                    }}
                  />
                </View>

                <Text style={style.pfcText}> Carbs</Text>
              </View>

              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image
                  style={style.icon1}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aEbf49xmjKsZLN0AnrVFpNYiw0hP-jqyEQ&usqp=CAU',
                  }}
                />
                <Text style={style.pfcText}> Protiens</Text>
              </View>

              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image
                  style={style.icon1}
                  source={{
                    uri: 'https://p.kindpng.com/picc/s/591-5913801_fatloss-icon-fat-loss-icon-hd-png-download.png',
                  }}
                />
                <Text style={style.pfcText}> Fat</Text>
              </View>
            </View>

            <View style={{width: '80%', paddingLeft: 15}}>
              <View style={{ paddingTop: 7}}>
                <Text style={style.nutritionsText}>
                  {Route.carbs}g {isPatty ? '+ 10' : ''}{' '}
                  {isveggies ? '+ 10' : ''} {checCheese ? '+ 10' : ''}{' '}
                  {checCheese || isveggies || isPatty ? (
                    <Text>: {carbs}g</Text>
                  ) : (
                    ''
                  )}
                </Text>
              </View>
              <View  style={{ paddingTop: 15}}>
                <Text style={style.nutritionsText}>
                  {Route.proteins}g {isPatty ? '+ 10' : ''}{' '}
                  {isveggies ? '+ 10' : ''} {checCheese ? '+ 10' : ''}{' '}
                  {checCheese || isveggies || isPatty ? (
                    <Text>: {proteins}g</Text>
                  ) : (
                    ''
                  )}
                </Text>
              </View>

              <View  style={{ paddingTop: 15}}>
                <Text style={style.nutritionsText}>
                  {Route.fats}g {isPatty ? '+ 10' : ''}{' '}
                  {isveggies ? '+ 10' : ''} {checCheese ? '+ 10' : ''}{' '}
                  {checCheese || isveggies || isPatty ? (
                    <Text>: {fats}g</Text>
                  ) : (
                    ''
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            //  flexDirection: 'row',
            // alignItems: 'flex-end',
            justifyContent: 'space-around',
            // paddingTop:10
          }}>
          <View style={style.checkboxView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../assets/FoodImages/cheese1.png')}
                style={style.Icon}
              />
              <Text style={style.checkboxText}>
                {fromBiryani ? 'Extra Paneer' : 'Extra Cheese'}
              </Text>
              <Text style={style.checkboxPrice}>+ 10</Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'per 25 grams',
                    'Carbs : 20  Protines : 30  Fat : 26',
                    [
                      {
                        text: 'Ok',
                      },
                    ],
                  )
                }
                style={style.checkboxPrice}
                // onPress={() => navigation.navigate('BurgerDetails', burgers)}
              >
                <IconFeather name="info" size={22} color={COLORS.darkLime} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginRight: 10,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Checkbox
                status={checCheese ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckCheese(!checCheese);
                  {
                    checCheese
                      ? setCount(counter - 50)
                      : setCount(counter + 50);
                    checCheese ? setCarbs(carbs - 10) : setCarbs(carbs + 10);
                    checCheese
                      ? setProteins(proteins - 10)
                      : setProteins(proteins + 10);
                    checCheese ? setFats(fats - 10) : setFats(fats + 10);
                    checCheese
                      ? setAmount(amount - 50)
                      : setAmount(amount + 50);
                  }
                }}
              />
            </View>
          </View>

          <View style={style.checkboxView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../assets/FoodImages/veggies.png')}
                style={style.Icon}
              />
              <Text style={style.checkboxText}>Extra Veggies</Text>
              <Text style={style.checkboxPrice}>+ 10</Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'per 25 grams',
                    'Carbs : 20  Protines : 30  Fat : 26',
                    [
                      {
                        text: 'Ok',
                      },
                    ],
                  )
                }
                style={style.checkboxPrice}
                // onPress={() => navigation.navigate('BurgerDetails', burgers)}
              >
                <IconFeather name="info" size={22} color={COLORS.darkLime} />
              </TouchableOpacity>
            </View>
            <View style={{marginRight: 10}}>
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
                    isveggies ? setFats(fats - 10) : setFats(fats + 10);
                    isveggies ? setAmount(amount - 30) : setAmount(amount + 30);
                  }
                }}
              />
            </View>
          </View>
          {fromBiryani ? (
            <View></View>
          ) : (
            <View style={style.checkboxView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                {fromPizza ? (
                  <Image
                    source={require('../../assets/FoodImages/extracrust.png')}
                    style={style.Icon}
                  />
                ) : fromBurger ? (
                  <Image
                    source={require('../../assets/FoodImages/patty.png')}
                    style={style.Icon}
                  />
                ) : fromFrankie ? (
                  <Image
                    source={require('../../assets/FoodImages/egg.jpg')}
                    style={style.Icon}
                  />
                ) : (
                  <View></View>
                )}

                <Text style={style.checkboxText}>
                  {' '}
                  {fromBurger ? 'ExtraPatty' : ''}
                  {fromPizza ? 'Extra Crust' : ''}
                  {fromFrankie ? 'Extra Egg' : ''}
                </Text>
                <Text style={style.checkboxPrice}>+ 10</Text>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      'per 25 grams',
                      'Carbs : 20  Protines : 30  Fat : 26',
                      [
                        {
                          text: 'Ok',
                        },
                      ],
                    )
                  }
                  style={style.checkboxPrice}
                  // onPress={() => navigation.navigate('BurgerDetails', burgers)}
                >
                  <IconFeather name="info" size={22} color={COLORS.darkLime} />
                </TouchableOpacity>
              </View>
              <View style={{marginRight: 10}}>
                <Checkbox
                  status={isPatty ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setIsPatty(!isPatty);
                    {
                      isPatty ? setCount(counter - 90) : setCount(counter + 90);
                      isPatty ? setCarbs(carbs - 10) : setCarbs(carbs + 10);
                      isPatty
                        ? setProteins(proteins - 10)
                        : setProteins(proteins + 10);
                      isPatty ? setFats(fats - 10) : setFats(fats + 10);
                      isPatty ? setAmount(amount - 50) : setAmount(amount + 50);
                    }
                  }}
                />
              </View>
            </View>
          )}
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
              style={{
                color: COLORS.DEFAULT_WHITE,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
function mapDispatchToProps(dispatch: any) {
  return {
    addItem: product => dispatch(AddData(product)),
  };
}
export default connect(null, mapDispatchToProps)(Nutrition);

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
    height: 250,
  },
  mainView: {
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 25,
    paddingLeft: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 10,
    flexDirection: 'row',
    // paddingLeft: 60,
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
  Icon: {
    height: 30,
    width: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  detailsContainer: {
    flex: 0.55,
    // backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
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
    marginVertical: 5,
    fontSize: 18,
    marginLeft: 30,
    //marginBottom: 10,
    //paddingTop: 10,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
  },
  checkboxPrice: {
    marginLeft: 10,
    marginTop: 12,
    fontSize: 15,
  },
  pfcText: {
    fontSize: 18,
    // marginLeft: 15,
    color: COLORS.DEFAULT_GREEN,
  },
  icon1: {
    width: 40,
    height: 40,
  },
});
