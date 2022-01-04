import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {connect, useSelector} from 'react-redux';
import {COLORS} from '../../constants';
import {AddData, DeleteData} from '../../redux/cartAction';
import {style} from './style';

const Nutrition = ({navigation, route, addItem, removeItem}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [valCount, setValCount] = React.useState(1);
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
  const [id, setId] = React.useState(0);
  const [onEdit, setEdit] = useState(false);
  const {cartList} = useSelector(state => state.cartReducer);
  const existedItem = cartList.find(item => id === item.id);

  useEffect(() => {
    let calories = Route.calories;
    let proteins = Route.proteins;
    let carbs = Route.carbs;
    let fats = Route.fats;
    let amount = Route.price;
    let id = Route.id;
    setId(id);
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
    calculatecount();
  }, [existedItem]);

  const calculatecount = () => {
    if (existedItem) {
      cartList.map(list => {
        if (list.id == Route.id) {
          console.log(list, 'ajshjahsjahsjahjs');
          setValCount(list.count);
        }
      });
    } else {
      cartList.map(list => {
        console.log(list, 'insie listttttt');
      });
      console.log('ajsjash');
      return;
    }
  };

  const increment = () => {
    if (valCount < 1) {
      return valCount;
    } else {
      setValCount(valCount => valCount + 1);
    }
  };

  const decrement = () => {
    if (valCount < 1 || valCount === 1) {
      return valCount;
    } else {
      setValCount(valCount => valCount - 1);
    }
  };

  const handleModel = () => {
    if (phone.length == 10) {
      setEdit(!onEdit);
    } else {
      Alert.alert('10 digits');
    }
  };

  const handleAddData = async () => {
    if (existedItem) {
      await removeItem(Route.id);
      addItem({
        Proteins: proteins,
        Fats: fats,
        Carbs: carbs,
        calories: counter,
        Name: Route.name,
        Price: amount,
        Image: Route.image,

        id: Route.id,
        count: valCount,
      });
      navigation.jumpTo('Carttab');
    } else {
      addItem({
        Proteins: proteins,
        Fats: fats,
        Carbs: carbs,
        calories: counter,
        Name: Route.name,
        Price: amount,
        Image: Route.image,

        id: Route.id,
        count: valCount,
      });
      navigation.jumpTo('Carttab');
    }
  };

  console.log(counter);
  const Route = route.params;
  return (
    <View style={style.container}>
      <ScrollView
        style={{
          ...style.container,
        }}>
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

          <View style={style.fireImageView}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/01/d6/5c/01d65ce7c564223a72839a33349406ec.jpg',
              }}
              style={style.fireImage}
            />
            <Text style={style.text}>
              Total Calories : {counter * valCount}
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={style.itemNameView}>
            <Text style={style.name}>{Route.name}</Text>
            <View style={style.priceTag}>
              <Text style={style.priceTagText}>{amount * valCount} Rs</Text>
            </View>
          </View>
          <View style={style.descContainer}>
            <Text style={style.descText}>{Route.desc}</Text>
          </View>

          <View style={style.mainView}>
            <View style={style.center}>
              <Text style={style.nutritionHeading}>
                Nutritional Information
              </Text>
            </View>

            <View style={style.nutritionContainer}>
              <View>
                <Text style={style.gramsText}>{Route.proteins}g</Text>
                <Text style={style.pfcText}>Protines</Text>
              </View>
              <View>
                <Text style={style.gramsText}>{Route.carbs}g</Text>
                <Text style={style.pfcText}>Carbs</Text>
              </View>
              <View>
                <Text style={style.gramsText}>{Route.fats}g</Text>
                <Text style={style.pfcText}>Fats</Text>
              </View>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={onEdit}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setEdit(!onEdit);
            }}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <View style={style.modalHeader}>
                  <Text style={style.modalText}>Add-Ons</Text>
                  <TouchableOpacity
                    style={style.modalIcon}
                    onPress={() => setEdit(!onEdit)}>
                    <IconAntDesign
                      name="close"
                      size={30}
                      color={COLORS.DEFAULT_BLACK}
                      style={{padding: 15}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={style.checkBoxTopView}>
                  <View style={style.checkboxView}>
                    <View style={style.innercheckBoxView}>
                      <Image
                        source={require('../../assets/FoodImages/cheese1.png')}
                        style={style.Icon}
                      />
                      <Text style={style.checkboxText}>
                        {fromBiryani ? 'Extra Paneer' : 'Extra Cheese'}
                      </Text>
                      <Text style={style.checkboxPrice}>(+50 Rs)</Text>
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert(
                            'per 25 grams',
                            'Carbs : 10  Protines : 10  Fat : 10',
                            [
                              {
                                text: 'Ok',
                              },
                            ],
                          )
                        }
                        style={style.checkboxPrice}>
                        <View style={{marginLeft: 10}}>
                          <IconFeather
                            name="info"
                            size={22}
                            color={COLORS.DEFAULT_GREEN}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        marginRight: 10,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        backgroundColor: checked ? 'red' : 'white',
                      }}>
                      <Checkbox
                        status={checCheese ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setCheckCheese(!checCheese);
                          {
                            checCheese
                              ? setCount(counter - 50)
                              : setCount(counter + 50);
                            checCheese
                              ? setCarbs(carbs - 10)
                              : setCarbs(carbs + 10);
                            checCheese
                              ? setProteins(proteins - 10)
                              : setProteins(proteins + 10);
                            checCheese
                              ? setFats(fats - 10)
                              : setFats(fats + 10);
                            checCheese
                              ? setAmount(amount - 50)
                              : setAmount(amount + 50);
                          }
                        }}
                      />
                    </View>
                  </View>

                  <View style={style.checkboxView}>
                    <View style={style.innercheckBoxView}>
                      <Image
                        source={require('../../assets/FoodImages/veggies.png')}
                        style={style.Icon}
                      />
                      <Text style={style.checkboxText}>Extra Veggies</Text>
                      <Text style={style.checkboxPrice}>(+50 Rs)</Text>
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert(
                            'per 25 grams',
                            'Carbs : 10  Protines : 10  Fat : 10',
                            [
                              {
                                text: 'Ok',
                              },
                            ],
                          )
                        }
                        style={style.checkboxPrice}>
                        <View style={{marginLeft: 7}}>
                          <IconFeather
                            name="info"
                            size={22}
                            color={COLORS.DEFAULT_GREEN}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        marginRight: 10,
                        backgroundColor: checked ? 'red' : 'white',
                      }}>
                      <Checkbox
                        status={isveggies ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setIsVeggies(!isveggies);
                          {
                            isveggies
                              ? setCount(counter - 50)
                              : setCount(counter + 50);
                            isveggies
                              ? setCarbs(carbs - 10)
                              : setCarbs(carbs + 10);
                            isveggies
                              ? setProteins(proteins - 10)
                              : setProteins(proteins + 10);
                            isveggies ? setFats(fats - 10) : setFats(fats + 10);
                            isveggies
                              ? setAmount(amount - 50)
                              : setAmount(amount + 50);
                          }
                        }}
                      />
                    </View>
                  </View>
                  {fromBiryani ? (
                    <View></View>
                  ) : (
                    <View style={style.checkboxView}>
                      <View style={style.innercheckBoxView}>
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
                          {''}
                          {fromBurger ? 'ExtraPatty' : ''}
                          {fromPizza ? 'Extra Crust' : ''}
                          {fromFrankie ? 'Extra Egg' : ''}
                        </Text>
                        <Text style={style.checkboxPrice}>(+50 Rs)</Text>
                        <TouchableOpacity
                          onPress={() =>
                            Alert.alert(
                              'per 25 grams',
                              'Carbs : 10  Protines : 10  Fat : 10',
                              [
                                {
                                  text: 'Ok',
                                },
                              ],
                            )
                          }
                          style={style.checkboxPrice}>
                          <View style={{marginLeft: 24}}>
                            <IconFeather
                              name="info"
                              size={22}
                              color={COLORS.DEFAULT_GREEN}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginRight: 10,
                          backgroundColor: checked ? 'red' : 'white',
                        }}>
                        <Checkbox
                          status={isPatty ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setIsPatty(!isPatty);
                            {
                              isPatty
                                ? setCount(counter - 90)
                                : setCount(counter + 90);
                              isPatty
                                ? setCarbs(carbs - 10)
                                : setCarbs(carbs + 10);
                              isPatty
                                ? setProteins(proteins - 10)
                                : setProteins(proteins + 10);
                              isPatty ? setFats(fats - 10) : setFats(fats + 10);
                              isPatty
                                ? setAmount(amount - 50)
                                : setAmount(amount + 50);
                            }
                          }}
                        />
                      </View>
                    </View>
                  )}
                </View>
                <View style={style.counterView2}>
                  <View style={style.innerCounterView}>
                    <TouchableOpacity
                      style={style.borderBtn}
                      onPress={() => decrement()}>
                      <Text style={style.borderBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={style.counterText}>{valCount}</Text>
                    <TouchableOpacity
                      style={style.borderBtn}
                      onPress={() => increment()}>
                      <Text style={style.borderBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={style.buyBtn}
                    onPress={handleAddData}>
                    <Text style={style.addToCartText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={style.counterView}>
          <TouchableOpacity
            style={style.buyBtn}
            onPress={() => setEdit(!onEdit)}>
            <Text style={style.addToCartText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
function mapDispatchToProps(dispatch: any) {
  return {
    addItem: product => dispatch(AddData(product)),
    removeItem: (product: any) => dispatch(DeleteData(product)),
  };
}
export default connect(null, mapDispatchToProps)(Nutrition);
