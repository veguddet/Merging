import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../Home/colors';
import {Checkbox} from 'react-native-paper';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen = ({navigation, route}: any) => {
  const Route = route.params;
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(600);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAntDesign name="arrowleft" size={30} color="#900" />
          </TouchableOpacity>
      <View style={style.imageContainer}>
     
        <Image
          source={{uri: Route.image}}
          style={{width: '100%', height: '90%', borderRadius: 20}}
        />
      </View>
      <Text style={style.calories}>Total Calories : ++ {counter}</Text>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}></View>
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
            }}>
            <Text style={style.nutritionsText}>Carbs:{Route.carbs}</Text>
            <Text style={style.nutritionsText}>Proteins:{Route.proteins}</Text>
            <Text style={style.nutritionsText}>Proteins:{Route.calories}</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <View style={style.checkboxbiew}><Text style={style.checkboxText}>Extra Cheese</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
              {
                checked ? setCount(counter - 10) : setCount(counter + 10);
              }
            }}
          /></View>
         <View style={style.checkboxbiew}><Text style={style.checkboxText}>Extra patty</Text>
         <Checkbox
            status={checCheese ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckCheese(!checCheese);
              {
                checCheese ? setCount(counter - 50) : setCount(counter + 50);
              }
            }}
          />
         
         </View>
        
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"red"
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
  checkboxbiew:{
    flexDirection:'row',
    paddingTop:10,
    alignItems:'center',
    justifyContent:'flex-start',
    flex:0.6

  },
  checkboxText:{
    padding:10,
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    flex:0.4

  },
  calories:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:10

  }
});

export default DetailsScreen;
