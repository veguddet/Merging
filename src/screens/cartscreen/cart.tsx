import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import BurgerData from '../../Data/BurgerData';
import {FlatList} from 'react-native-gesture-handler';
import {connect, useSelector} from 'react-redux';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import {
  countDecrement,
  countIncrement,
  DeleteData,
} from '../../redux/cartAction';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';

const Cart = ({
  route,
  navigation,
  data,
  removeItem,
  quantity,
  quantitydecrese,
}: any) => {
  const {cartList} = useSelector(state => state.cartReducer);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);

  const totalAmountCalculte = () => {
    let Total = 0;
    cartList.map(item => {
      if (item.Price) {
        Total += item.Price * item.count;
      }
      console.log(Total);

      setTotal(Total);
    });
    setTotal(Total);
  };
  useEffect(() => {
    totalAmountCalculte();
  }, [data, removeItem, quantity]);

  // const handleRemove=()=>{
  //   removeItem()
  // }

  const increment = async (item: any) => {
    setCounter(counter => counter + 1);
    console.log('newItem', item);
    await quantity({
      Proteins: item.Proteins,
      Fats: item.Fats,
      Carbs: item.Carbs,
      calories: item.calories,
      Name: item.Name,
      Price: item.Price,
      Image: item.Image,
      id: item.id,
      count: item.count + 1,
    });
  };
  const decrement = async (item: any) => {
    setCounter(counter => counter + 1);
    console.log('newItem', item);
    await quantitydecrese({
      Proteins: item.Proteins,
      Fats: item.Fats,
      Carbs: item.Carbs,
      calories: item.calories,
      Name: item.Name,
      Price: item.Price,
      Image: item.Image,
      id: item.id,
      count: item.count === 1 ? item.count : item.count - 1,
    });
  };

  const Card = ({Item}: any) => {
    return (
      <View style={styles.topCardView}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.imageview}>
            <Image
              resizeMode={'contain'}
              style={styles.imagelink}
              source={{uri: Item.Image}}
            />
            <View style={styles.text199view}>
              <Text style={styles.text1}>Rs : {Item.Price * Item.count}</Text>
            </View>

            <View style={{paddingLeft: 30}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  padding: 10,
                  paddingTop: 18,
                  justifyContent: 'flex-end',
                  paddingLeft: 20,
                }}>
                <View>
                  <Text style={{
                    fontWeight: 'bold', 
                    fontSize: 20,
                   // color:COLORS.DEFAULT_BLACK
                    }}>
                    {Item.Name}
                  </Text>
                  <View>
                    <Text> Protein = {Item.Proteins * Item.count} </Text>
                  </View>
                  <View>
                    <Text> Carbs = {Item.Carbs * Item.count} </Text>
                  </View>
                  <View>
                    <Text> Fats = {Item.Fats * Item.count}</Text>
                  </View>
                </View>

                {/* <TouchableOpacity onPress={()=>removeItem(Item.id)}>
                  <View style={styles.text199}>
                    <Text style={styles.text19}>Remove</Text>
                  </View>
                </TouchableOpacity> */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={styles.borderBtn}
                    onPress={() => decrement(Item)}>
                    <Text style={styles.borderBtnText}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 10,
                    }}>
                    {Item.count}
                  </Text>
                  <TouchableOpacity
                    style={styles.borderBtn}
                    onPress={() => increment(Item)}>
                    <Text style={styles.borderBtnText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{paddingLeft: 10}}
                    onPress={() => removeItem(Item.id)}>
                    <IconAntDesign name="delete" size={25} color={'red'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 10}} />
      </View>
      // <View style={{ flex: 1 }}>
      //   <View
      //     style={{
      //       flexDirection: 'row',
      //       justifyContent: 'flex-start',
      //       alignItems: 'center',
      //     }}>
      //     <Image
      //       resizeMode={'contain'}
      //       style={styles.imagelink}
      //       source={{ uri: Item.Image }}
      //     />
      //     <View style={{ padding: 30 }}>
      //       <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{Item.Name}</Text>
      //       <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{Item.Price * Item.count}</Text>
      //     </View>
      //     <View style={{ flexDirection: 'row' }}>
      //       <TouchableOpacity onPress={() => removeItem(Item.id)}>
      //         <View style={styles.text199view}>
      //           <Text style={styles.text199}>Remove</Text>
      //         </View>
      //       </TouchableOpacity>
      //     </View>
      //     <TouchableOpacity onPress={() => { }}>
      //       <IconAntDesign name="minus" size={30} color={'red'} />
      //     </TouchableOpacity>

      //     <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>
      //       {Item.count}
      //     </Text>

      //     <TouchableOpacity onPress={() => increment(Item)}>
      //       <IconAntDesign name="plus" size={30} color={'blue'} />
      //     </TouchableOpacity>

      //   </View>

      // </View>
    );
  };
  console.log('prps', data);
  return (
    // <View style={styles.topview}>
    //   <View style={styles.height20} />
    //   <Text style={styles.addeditems}>Added Items</Text>
    //   <View style={styles.height10} />

    //   <View style={{flex: 1}}>
    //     <View style={styles.imageview}>
    //       <Image
    //         resizeMode={'contain'}
    //         style={styles.imagelink}
    //         source={{uri: 'http://tutofox.com/foodapp/food/pizza/pizza-1.png'}}
    //       />
    //       <View
    //         style={{
    //           flex: 1,
    //           backgroundColor: 'transparent',
    //           padding: 10,
    //           justifyContent: 'space-between',
    //         }}>
    //         <View>
    //           <Text style={{fontWeight: 'bold', fontSize: 20}}>Pizza</Text>
    //           <Text>Descripcion</Text>
    //         </View>
    //         <View style={styles.text199view}>
    //           <Text style={styles.text199}>$199</Text>
    //           <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //             <TouchableOpacity onPress={() => decrement()}>
    //               <Icon name="ios-remove-circle" size={30} color="#9fd236" />
    //             </TouchableOpacity>
    //             <Text style={styles.counter}>{counter}</Text>
    //             <TouchableOpacity onPress={() => increment()}>
    //               <Icon name="ios-add-circle" size={30} color="#9fd236" />
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //   </View>

    //   <View style={styles.height20} />

    //   <View style={styles.amountview}>
    //     <Text style={styles.amount}>Total Amount = {199 * counter}</Text>
    //   </View>

    //   <TouchableOpacity
    //     style={styles.touch}
    //     onPress={() => navigation.navigate('Order')}>
    //     <Text style={styles.order}>Place Order</Text>
    //   </TouchableOpacity>

    //   <View style={{height: 20}} />
    // </View>
    <View style={styles.topview}>
      <Text style={styles.addeditems}>Cart</Text>
      {/* <View style={styles.height10} /> */}
      <FlatList
        data={cartList}
        renderItem={({item}) => {
          return <Card Item={item} />;
        }}
      />
      {total ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '3%',
            marginTop: '3%',
            alignItems: 'center',
          }}>
          <View style={styles.amountview}>
            <Text style={styles.amount}>Total = {total} </Text>
          </View>

          <TouchableOpacity
            style={styles.buyBtn}
            onPress={() => navigation.navigate('checkout')}>
            <Text style={styles.order}>Place Order</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View 
        // style={{
        //   backgroundColor: COLORS.DEFAULT_WHITE,
        // }}
        >
          <Image
            source={{uri: 'http://www.shitalexports.com/img/empty-cart.jpg'}}
            style={{
              width: 400,
              height: 400,
              marginBottom: '37%',
            }}
          />
        </View>
      )}

      {/* <View>
        <View style={styles.amountview}>
          <Text style={styles.amount}>Total Amount = {total}</Text>
        </View>

        <TouchableOpacity style={styles.buyBtn} onPress={totalAmountCalculte}>
          <Text style={styles.order}>Place Order</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 90,
    height: 30,
    backgroundColor: `#ff7f50`,
    borderRadius: 30,
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Container: {
    backgroundColor: `#f0ffff`,
    height: 25,
    marginTop: 4,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

function mapStateToProps(state: any) {
  return {
    data: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeItem: (product: any) => dispatch(DeleteData(product)),
    quantity: (add: any) => dispatch(countIncrement(add)),
    quantitydecrese: (sub: any) => dispatch(countDecrement(sub)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
