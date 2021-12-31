// import React, {useEffect, useState} from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';
// import {connect, useSelector} from 'react-redux';
// import {
//   countDecrement,
//   countIncrement,
//   DeleteData,
// } from '../../redux/cartAction';
// import {styles} from './style';

// const Cart = ({
//   route,
//   navigation,
//   data,
//   removeItem,
//   quantity,
//   quantitydecrese,
// }: any) => {
//   const {cartList} = useSelector(state => state.cartReducer);
//   const [counter, setCounter] = useState(1);
//   const [total, setTotal] = useState(0);

//   const totalAmountCalculte = () => {
//     let Total = 0;
//     cartList.map(item => {
//       if (item.Price) {
//         Total += item.Price * item.count;
//       }
//       console.log(Total);

//       setTotal(Total);
//     });
//     setTotal(Total);
//   };
//   useEffect(() => {
//     totalAmountCalculte();
//   }, [data, removeItem, quantity]);

//   const increment = async (item: any) => {
//     setCounter(counter => counter + 1);
//     console.log('newItem', item);
//     await quantity({
//       Proteins: item.Proteins,
//       Fats: item.Fats,
//       Carbs: item.Carbs,
//       calories: item.calories,
//       Name: item.Name,
//       Price: item.Price,
//       Image: item.Image,
//       id: item.id,
//       count: item.count + 1,
//     });
//   };

//   const decrement = async (item: any) => {
//     setCounter(counter => counter + 1);
//     console.log('newItem', item);
//     await quantitydecrese({
//       Proteins: item.Proteins,
//       Fats: item.Fats,
//       Carbs: item.Carbs,
//       calories: item.calories,
//       Name: item.Name,
//       Price: item.Price,
//       Image: item.Image,
//       id: item.id,
//       count: item.count === 1 ? item.count : item.count - 1,
//     });
//   };

//   const Card = ({Item}: any) => {
//     return (
//       <View style={styles.topCardView}>
//         <View style={{flex: 1, flexDirection: 'column'}}>
//           <View style={styles.imageview}>
//             <Image
//               resizeMode={'contain'}
//               style={styles.imagelink}
//               source={{uri: Item.Image}}
//             />
//             <View style={styles.text199view}>
//               <Text style={styles.text1}>Rs : {Item.Price * Item.count}</Text>
//             </View>

//             <View style={{paddingLeft: 30}}>
//               <View style={styles.cardView}>
//                 <View>
//                   <Text style={styles.itemName}>{Item.Name}</Text>
//                   <View>
//                     <Text> Protein : {Item.Proteins * Item.count} </Text>
//                   </View>
//                   <View>
//                     <Text> Carbs : {Item.Carbs * Item.count} </Text>
//                   </View>
//                   <View>
//                     <Text> Fats : {Item.Fats * Item.count}</Text>
//                   </View>
//                 </View>

//                 <View style={styles.counterView}>
//                   <TouchableOpacity
//                     style={styles.borderBtn}
//                     onPress={() => decrement(Item)}>
//                     <Text style={styles.borderBtnText}>-</Text>
//                   </TouchableOpacity>
//                   <Text style={styles.counterText}>{Item.count}</Text>
//                   <TouchableOpacity
//                     style={styles.borderBtn}
//                     onPress={() => increment(Item)}>
//                     <Text style={styles.borderBtnText}>+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={{paddingLeft: 10}}
//                     onPress={() => removeItem(Item.id)}>
//                     <IconAntDesign name="delete" size={25} color={'red'} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={{height: 10}} />
//       </View>
//     );
//   };
//   console.log('prps', data);
//   return (
//     <View style={styles.topview}>
//       <Text style={styles.addeditems}>Cart</Text>
//       <FlatList
//         data={cartList}
//         renderItem={({item}) => {
//           return <Card Item={item} />;
//         }}
//       />
//       {total ? (
//         <View style={styles.totalView}>
//           <View style={styles.amountview}>
//             <Text style={styles.amount}>Total : {total} </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.buyBtn}
//             onPress={() => navigation.navigate('checkout')}>
//             <Text style={styles.order}>Place Order</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View>
//           <Image
//             source={{uri: 'http://www.shitalexports.com/img/empty-cart.jpg'}}
//             style={styles.emptyCartImage}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// function mapStateToProps(state: any) {
//   return {
//     data: state.cartReducer,
//   };
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     removeItem: (product: any) => dispatch(DeleteData(product)),
//     quantity: (add: any) => dispatch(countIncrement(add)),
//     quantitydecrese: (sub: any) => dispatch(countDecrement(sub)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);


import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {connect, useSelector} from 'react-redux';
import { Header } from '../../components';
import { COLORS } from '../../constants';
import {
  countDecrement,
  countIncrement,
  DeleteData,
} from '../../redux/cartAction';
import {styles} from './style';

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
              <View style={styles.cardView}>
                <View>
                  <Text style={styles.itemName}>{Item.Name}</Text>

                  <View style={styles.infoBoxWrapper}>
     <View style={[styles.infoBox, {
      borderRightColor: '#dddddd',
         borderRightWidth: 1.5
      }]}>
     <Text style={{fontSize: 15,fontWeight: 'bold'}}>{Item.Proteins * Item.count} g</Text>
    <Text >Protein</Text>
    </View>
    <View style={[styles.infoBox, {
      borderRightColor: '#dddddd',
         borderRightWidth: 1.5
      }]}>
     <Text style={{fontSize: 15,fontWeight: 'bold'}}>{Item.Carbs * Item.count} g</Text>
    <Text>Carbs</Text>
   </View>
   <View style={[styles.infoBox, {
      borderRightColor: '#dddddd',
         borderRightWidth: 1.5,
         
      }]}>
     <Text style={{fontSize: 15,fontWeight: 'bold'}}>{Item.Fats * Item.count} g</Text>
    <Text>Fats</Text>
   </View>
    </View>
                  {/* <View >
                    <Text style={{color:COLORS.DEFAULT_BLACK}}> Protein.......... {Item.Proteins * Item.count}g </Text>
                  </View>
                  <View>
                    <Text style={{color:COLORS.DEFAULT_BLACK}}> Carbs............ {Item.Carbs * Item.count}g </Text>
                  </View>
                  <View>
                    <Text style={{color:COLORS.DEFAULT_BLACK}}> Fats............... {Item.Fats * Item.count}g</Text>
                  </View>
                </View> */}

                
               
                <View style={styles.counterView}>
                  <TouchableOpacity
                    style={styles.borderBtn}
                    onPress={() => decrement(Item)}>
                    <Text style={styles.borderBtnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{Item.count}</Text>
                  <TouchableOpacity
                    style={styles.borderBtn}
                    onPress={() => increment(Item)}>
                    <Text style={styles.borderBtnText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{paddingLeft: 20}}
                    onPress={() => removeItem(Item.id)}>
                    <IconAntDesign name="delete" size={25} color={'red'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            
          </View>
        </View>
        </View>
        <View style={styles.boarder}></View>
      </View>
    );
  };
  console.log('prps', data);

  return (
    <View style={styles.topview}>
      <Text style={styles.addeditems}>Cart</Text>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent={false}
      />
      <Header headerTitle={'Cart'} showCart onpress={() => navigation.goBack()} /> */}
      <FlatList
        data={cartList}
        renderItem={({item}) => {
          return <Card Item={item} />;
        }}
      />
      {total ? (
        <View style={styles.totalView}>
          <View style={styles.amountview}>
            <Text style={styles.amount}>Total : {total} </Text>
          </View>

          <TouchableOpacity
            style={styles.buyBtn}
            onPress={() => navigation.navigate('checkout')}>
            <Text style={styles.order}>Place Order</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* <Image
            source={{uri: 'http://www.shitalexports.com/img/empty-cart.jpg'}}
            style={styles.emptyCartImage}
          /> */}
           <Text style={styles.emptyCartText}>Your Cart is Empty !</Text>
           <Text style={styles.emptyCartText2}>Add Your Favourite Food !</Text>
           <Image
            source={require('../../assets/svg/cart.png')}
            style={styles.emptyCartImage}
          />
        </View>
      )}
    </View>
  );
  
};

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
