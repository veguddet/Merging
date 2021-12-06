// import React from 'react';
// import {
//   View,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// import COLORS from '../Home/colors';
// import BurgerData from '../../Data/BurgerData';
// import database from '@react-native-firebase/database';
// const width = Dimensions.get('window').width / 2 - 30;
// let itemsRef = database().ref('/food_items');

// const Test = ({navigation}:any) => {

//     const [itemsArray, setItemsArray] = React.useState([]);
//     React.useEffect(() => {
//       itemsRef.on('value', snapshot => {
//         let data = snapshot.val();
//         var li = []
//         snapshot.forEach((child)=>{ 
//           li.push({
//            key: child.key,
//           //  name:child.val().name,
//           //  age: child.val().age
//          })
//        })
//         const items = Object.values(data);
//        // setItemsArray(itemsArray);
//         console.log(data)
//       });
//     }, []);
//   const Card = ({burgers}:any) => {
//     return (
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => Alert.alert("pressed",burgers.name)}>
//         <View style={style.card}>
//           <View
//             style={{
//               flex: 1,
//               alignItems: 'center',
//             }}>
//             <Image
//              // source={{uri: item.img}}
//              source={burgers.img}
//               style={{width: 150, height: 200, borderRadius: 20}}
//             />
//           </View>
//           <Text style={{fontSize: 19, fontWeight: 'bold',}}>
//             {burgers.name}
//             </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginTop: 5,
//             }}>
//             <Text style={{fontSize: 19, fontWeight: 'bold'}}>
//               Rs{burgers.price}
//             </Text>
            
//             <View
//               style={{
//                 height: 25,
//                 width: 25,
//                 backgroundColor: COLORS.green,
//                 borderRadius: 5,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
//                 +
//               </Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white,marginTop:50}}>
//       <View style={style.header}>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
//             Burgers!
//           </Text>
         
//         </View>
      
//       </View>
//       <View style={{marginTop: 30, flexDirection: 'row'}}>
//         <View style={style.searchContainer}>
        
//           <TextInput placeholder="Search" style={style.input} />
//         </View>
//         <View style={style.sortBtn}>
         
//         </View>
//       </View>

//       <FlatList
//         columnWrapperStyle={{justifyContent: 'space-between'}}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           marginTop: 10,
//           paddingBottom: 50,
//         }}
//         numColumns={2}
//         data={BurgerData}
//         renderItem={({item}) => {
//           return <Card burgers={item} />;
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   categoryContainer: {
//     flexDirection: 'row',
//     marginTop: 30,
//     marginBottom: 20,
//     justifyContent: 'space-between',
//   },
//   categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
//   categoryTextSelected: {
//     color: COLORS.green,
//     paddingBottom: 5,
//     borderBottomWidth: 2,
//     borderColor: COLORS.green,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: COLORS.light,
//     width,
//     marginHorizontal: 2,
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 15,
//   },
//   header: {
//     marginTop: 30,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   searchContainer: {
//     height: 50,
//     backgroundColor: COLORS.light,
//     borderRadius: 10,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     flex: 1,
//     color: COLORS.dark,
//   },
//   sortBtn: {
//     marginLeft: 10,
//     height: 50,
//     width: 50,
//     borderRadius: 10,
//     backgroundColor: COLORS.green,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default Test;
import { firebase } from '@react-native-firebase/database';
import React, {Component} from 'react';
import {View,Text, FlatList} from 'react-native';
export default class Fetch extends Component{
 constructor(props){
   
 super(props);
 this.state={ 
 list:[],
 } }
  componentDidMount(){
    firebase.database().ref('/fried_rice').on('value', (snapshot) =>{
      var li= []
      snapshot.forEach((child)=>{
       li.push({
        key: child.desc,
        name:child.value().name,
        
      
      
      
      })
      console.log(name)
      
    })
   
   this.setState({list:li})
   
  })
 }
 render(){
  
  return(
     
    <View style={{flex:1, justifyContent:'center',}}>
       <Text  style={{Color:"red"}}>data</Text>
       <FlatList style={{width:'100%'}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
                <View>
                   <Text>{item.name}</Text>
                </View>)
             }}/>
     </View>
  )}
}