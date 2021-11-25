import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import Order from './Order';

const Cart = ({route, navigation}) => {
  const [counter, setCounter] = useState(0) 
  const increment = () => {setCounter(counter => counter+1)}
  const decrement = () => {setCounter(counter => counter?counter-1:counter )}
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height:20}} />
         <Text style={{fontSize:28, color:"gray"}}>Cart food</Text>
         <View style={{height:10}} />

         <View style={{flex:1}}>

           <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
             <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: "http://tutofox.com/foodapp/food/pizza/pizza-1.png"}} />
             <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
               <View>
                 <Text style={{fontWeight:"bold", fontSize:20}}>Pizza</Text>
                 <Text>Descripcion</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontWeight:'bold',color:"#9fd236",fontSize:20}}>$565</Text>
                 <View style={{flexDirection:'row', alignItems:'center'}}>
                 <TouchableOpacity
                   onPress = {() => (decrement())}
                   >
                     <Icon name="ios-remove-circle" size={30} color="#9fd236" 
                     />
                   </TouchableOpacity>                   
                   <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>{counter}</Text>
                   <TouchableOpacity
                   onPress = {() => (increment())}
                   >
                     <Icon name="ios-add-circle" size={30}  color="#9fd236"  />
                   </TouchableOpacity>
                 </View>
               </View>
             </View>
           </View>

         </View>

         <View style={{height:20}} />

         <View style={{fontSize: 24, fontWeight: 'bold',paddingBottom: 10, paddingLeft: 10,}}>
              <Text  style={{fontSize: 24, fontWeight: 'bold',}}>Total Amount = {565 * counter}</Text>
          </View>

       <TouchableOpacity style={{
           backgroundColor:"#9fd236",
           width:width-40,
           alignItems:'center',
           padding:10,
           borderRadius:5
         }}
         onPress={() => navigation.navigate("Order")}
         >
         <Text style={{
             fontSize:24,
             fontWeight:"bold",
             color:'white'
           }} >
           Place Order
         </Text>
       </TouchableOpacity>

       <View style={{height:20}} />


      </View>
    );
}

export default Cart;