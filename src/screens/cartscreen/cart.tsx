import React, { Component, useEffect, useState } from 'react';
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
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import BurgerData from '../../Data/BurgerData';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { DeleteData } from '../../redux/cartAction';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Cart = ({ route, navigation, data,removeItem }) => {
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

const totalAmountCalculte=()=>{
  let Total=0;
  data.map(item=>{
    if(item.Price){
      Total+=item.Price
    }
    console.log(Total)
    setTotal(Total)
  
  })

}
useEffect(() => {
  totalAmountCalculte()
}, [data]);
 


  const increment = () => {
    setCounter(counter => counter + 1);
  };
  const decrement = () => {
    setCounter(counter => (counter ? counter - 1 : counter));
  };
  const Card = ({ Item }: any) => {
    return (
      <View style={styles.topCardView}>
        <View style={{ flex: 1 }}>
          <View style={styles.imageview}>
            <Image
              resizeMode={'contain'}
              style={styles.imagelink}
              source={{ uri: Item.Image }}
            />
            
            <View   style={{ paddingLeft:30
              }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                padding: 10,
                justifyContent: 'flex-end',
                paddingLeft:20
              }}>
              <View  >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{Item.Name}</Text>
                <Text>Descripcion</Text>
              </View>
              <View style={styles.text199view}>
                <Text style={styles.text199}>{Item.Price}</Text>
               
              </View>
              <TouchableOpacity onPress={removeItem}>
              <View style={styles.text199view}>
                <Text style={styles.text199}>Remove</Text>
               
              </View>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
        <View style={styles.height20} />
        <View style={{ height: 20 }} />
      </View>
      
    );
  };
  console.log('prps', data)
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
     
      <Text style={styles.addeditems}>Added Items</Text>
      <View style={styles.height10} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Card Item={item} />;
        }}
      />
      <View style={styles.amountview}>
        <Text style={styles.amount}>Total Amount = {total}</Text>
      </View>

      <TouchableOpacity
        style={styles.buyBtn}
        onPress={totalAmountCalculte}>
        <Text style={styles.order}>Place Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buyBtn}
        onPress={() => navigation.popOut()}>
        <Text style={styles.order}>Order</Text>
      </TouchableOpacity>
     
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
    backgroundColor:"white",
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
 
}
);






      function mapStateToProps(state:any) {
  return {
        data:state.cartReducer
  };
  }
  
const mapDispatchToProps = (dispatch:any) => {
  return {
      removeItem: (product:any) => dispatch(DeleteData(product))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Cart);
