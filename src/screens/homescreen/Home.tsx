import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
// const image = { uri: "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg" };
import {styles} from './style';
const Home = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          animated={true}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.text}>Food Items List</Text>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                left: 330,
                bottom: 40,
              }}
              source={{
                uri: 'ANd9GcT4mi9Fl1Vw-09ceMokOVBBqnwRJhiruOpTpuMVlN8exBYwOwgDh6H54cvfoX6ub64lAOA&usqp=CAU',
              }}></Image>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVQWZDH9G25dzFwIIncMwoTpoJCGXqGdd_g&usqp=CAU',
                }}
                style={styles.image}
              />
              <Text style={styles.text1}>PIZZA</Text>
              <TouchableOpacity
                //  activeOpacity={0.5}
                onPress={() => navigation.navigate('Cart')}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    left: 280,
                    bottom: 155,
                  }}
                  source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8BAQGQkJCRkZH8/PwEBATi4uLr6+uHh4dZWVmEhIS1tbWioqKVlZVDQ0OysrLAwMC/v790dHRvb28cHBw5OTno6OhTU1NcXFxGRkZOTk4fHx+lpaXZ2dk3NzecnJz8LEaDAAADdElEQVR4nO3d61abQBRA4cEMhNwIUWPUan3/t+wMpt5CwMgZz4G1P9dq/ZXOXkNIKAw4BwAAAAAAAAAAAAAATnl//Dv+eN2xJOHP/D4h81W5qPb7Q7maaw9FXpiz+j57t6i1RyQrvOmKh9CVf2isnqe0qXq3Dnn5p8Ise9IelhQfLLMToXY5kVkMm2h5Gti40h6bDO+22Zfts5nDsNVmK+3BifDzMzMY3WmPTsR1R+HNFN6Kxdm8uOkWY09sdjOnb8J3pfYIhwqFtx19WXarPcKhvC/adqQfFNpDHMi7unMKs2ynPcSBmu9rndbaQxxs1lM40x7gYFc9heP/5kYhhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfb1XTFkrjBel37RFaHdc5hfUOhf1xOldvG/sOmZw02KUQ5T1Our79s89szh42b2TeHF1nXSizXj1lmU3RfEpvenjJFJNtbwovOui9J/z3WiK/y9W2Vxs+q84je9ZgAJ1mn4jpUvvy7JgqIQuNSevQ9y+Wv8vXuKi8+MiAMRX/n2rF11Qnr94oN20Gdhe6pkC2tDb8JGGI7sQtt7a4XBQjJwnhnaz7yRWxHerJE0Jxf93DfzYf/JUrBwoR3TSu6N6F2lHdOqEit0bq8d0+qvYOH05/CgHdPqIFjYck8EdbnovnSlndNqK1jYddMAPYJ3ufEmPxAlv5f2r1fWIHhs4Y+f+Ya+e8sfH8Z7P1g6usjFj/Hj/9NYkmdr6RuieWOficsUZ2nMHELlsgdObywdB2+T3LMvvOTdzcVj6ds9/WT3dXOX8DRisZQ993R5322Z9gRbjNyJnj88bL7/YrOXXXNqLeFtJX+w/+o7B/yzO39YuvXS9K/FoJBC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto3D8haO7L8bFpj+H0y9Mc9WXHf3P7HrRHuJgu57CsT93resBj6/G/uw8F59/2HWZ7Oiff+jc1J9h6fo209FvpNH12cu582k8S7a5XcGZwGk8D9h3rM9Ms27it/njgqKv85hq5YuOcuqB7d/d1rYWFQxVVP9n7vhn9aw9JGHe1R/XEi/qSc1fI97Qblsu9vvqsFzN0y7tAQAAAAAAAAAAAAAAUPIPR8AudC1NyrEAAAAASUVORK5CYII=',
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.text1}>BURGER</Text>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  left: 280,
                  bottom: 155,
                }}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8BAQGQkJCRkZH8/PwEBATi4uLr6+uHh4dZWVmEhIS1tbWioqKVlZVDQ0OysrLAwMC/v790dHRvb28cHBw5OTno6OhTU1NcXFxGRkZOTk4fHx+lpaXZ2dk3NzecnJz8LEaDAAADdElEQVR4nO3d61abQBRA4cEMhNwIUWPUan3/t+wMpt5CwMgZz4G1P9dq/ZXOXkNIKAw4BwAAAAAAAAAAAAAATnl//Dv+eN2xJOHP/D4h81W5qPb7Q7maaw9FXpiz+j57t6i1RyQrvOmKh9CVf2isnqe0qXq3Dnn5p8Ise9IelhQfLLMToXY5kVkMm2h5Gti40h6bDO+22Zfts5nDsNVmK+3BifDzMzMY3WmPTsR1R+HNFN6Kxdm8uOkWY09sdjOnb8J3pfYIhwqFtx19WXarPcKhvC/adqQfFNpDHMi7unMKs2ynPcSBmu9rndbaQxxs1lM40x7gYFc9heP/5kYhhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfb1XTFkrjBel37RFaHdc5hfUOhf1xOldvG/sOmZw02KUQ5T1Our79s89szh42b2TeHF1nXSizXj1lmU3RfEpvenjJFJNtbwovOui9J/z3WiK/y9W2Vxs+q84je9ZgAJ1mn4jpUvvy7JgqIQuNSevQ9y+Wv8vXuKi8+MiAMRX/n2rF11Qnr94oN20Gdhe6pkC2tDb8JGGI7sQtt7a4XBQjJwnhnaz7yRWxHerJE0Jxf93DfzYf/JUrBwoR3TSu6N6F2lHdOqEit0bq8d0+qvYOH05/CgHdPqIFjYck8EdbnovnSlndNqK1jYddMAPYJ3ufEmPxAlv5f2r1fWIHhs4Y+f+Ya+e8sfH8Z7P1g6usjFj/Hj/9NYkmdr6RuieWOficsUZ2nMHELlsgdObywdB2+T3LMvvOTdzcVj6ds9/WT3dXOX8DRisZQ993R5322Z9gRbjNyJnj88bL7/YrOXXXNqLeFtJX+w/+o7B/yzO39YuvXS9K/FoJBC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto3D8haO7L8bFpj+H0y9Mc9WXHf3P7HrRHuJgu57CsT93resBj6/G/uw8F59/2HWZ7Oiff+jc1J9h6fo209FvpNH12cu582k8S7a5XcGZwGk8D9h3rM9Ms27it/njgqKv85hq5YuOcuqB7d/d1rYWFQxVVP9n7vhn9aw9JGHe1R/XEi/qSc1fI97Qblsu9vvqsFzN0y7tAQAAAAAAAAAAAAAAUPIPR8AudC1NyrEAAAAASUVORK5CYII=',
                }}
              />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
              }}
              style={styles.image1}
            />

            <Text style={styles.text2}>FRANKIE</Text>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  left: 280,
                  bottom: 250,
                }}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8BAQGQkJCRkZH8/PwEBATi4uLr6+uHh4dZWVmEhIS1tbWioqKVlZVDQ0OysrLAwMC/v790dHRvb28cHBw5OTno6OhTU1NcXFxGRkZOTk4fHx+lpaXZ2dk3NzecnJz8LEaDAAADdElEQVR4nO3d61abQBRA4cEMhNwIUWPUan3/t+wMpt5CwMgZz4G1P9dq/ZXOXkNIKAw4BwAAAAAAAAAAAAAATnl//Dv+eN2xJOHP/D4h81W5qPb7Q7maaw9FXpiz+j57t6i1RyQrvOmKh9CVf2isnqe0qXq3Dnn5p8Ise9IelhQfLLMToXY5kVkMm2h5Gti40h6bDO+22Zfts5nDsNVmK+3BifDzMzMY3WmPTsR1R+HNFN6Kxdm8uOkWY09sdjOnb8J3pfYIhwqFtx19WXarPcKhvC/adqQfFNpDHMi7unMKs2ynPcSBmu9rndbaQxxs1lM40x7gYFc9heP/5kYhhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfb1XTFkrjBel37RFaHdc5hfUOhf1xOldvG/sOmZw02KUQ5T1Our79s89szh42b2TeHF1nXSizXj1lmU3RfEpvenjJFJNtbwovOui9J/z3WiK/y9W2Vxs+q84je9ZgAJ1mn4jpUvvy7JgqIQuNSevQ9y+Wv8vXuKi8+MiAMRX/n2rF11Qnr94oN20Gdhe6pkC2tDb8JGGI7sQtt7a4XBQjJwnhnaz7yRWxHerJE0Jxf93DfzYf/JUrBwoR3TSu6N6F2lHdOqEit0bq8d0+qvYOH05/CgHdPqIFjYck8EdbnovnSlndNqK1jYddMAPYJ3ufEmPxAlv5f2r1fWIHhs4Y+f+Ya+e8sfH8Z7P1g6usjFj/Hj/9NYkmdr6RuieWOficsUZ2nMHELlsgdObywdB2+T3LMvvOTdzcVj6ds9/WT3dXOX8DRisZQ993R5322Z9gRbjNyJnj88bL7/YrOXXXNqLeFtJX+w/+o7B/yzO39YuvXS9K/FoJBC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto3D8haO7L8bFpj+H0y9Mc9WXHf3P7HrRHuJgu57CsT93resBj6/G/uw8F59/2HWZ7Oiff+jc1J9h6fo209FvpNH12cu582k8S7a5XcGZwGk8D9h3rM9Ms27it/njgqKv85hq5YuOcuqB7d/d1rYWFQxVVP9n7vhn9aw9JGHe1R/XEi/qSc1fI97Qblsu9vvqsFzN0y7tAQAAAAAAAAAAAAAAUPIPR8AudC1NyrEAAAAASUVORK5CYII=',
                }}
              />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.spiceupthecurry.com/wp-content/uploads/2019/09/frankie-recipe-1.jpg',
              }}
              style={styles.image2}
            />

            <Text style={styles.text3}>BIRYANI</Text>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  left: 280,
                  bottom: 350,
                }}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8BAQGQkJCRkZH8/PwEBATi4uLr6+uHh4dZWVmEhIS1tbWioqKVlZVDQ0OysrLAwMC/v790dHRvb28cHBw5OTno6OhTU1NcXFxGRkZOTk4fHx+lpaXZ2dk3NzecnJz8LEaDAAADdElEQVR4nO3d61abQBRA4cEMhNwIUWPUan3/t+wMpt5CwMgZz4G1P9dq/ZXOXkNIKAw4BwAAAAAAAAAAAAAATnl//Dv+eN2xJOHP/D4h81W5qPb7Q7maaw9FXpiz+j57t6i1RyQrvOmKh9CVf2isnqe0qXq3Dnn5p8Ise9IelhQfLLMToXY5kVkMm2h5Gti40h6bDO+22Zfts5nDsNVmK+3BifDzMzMY3WmPTsR1R+HNFN6Kxdm8uOkWY09sdjOnb8J3pfYIhwqFtx19WXarPcKhvC/adqQfFNpDHMi7unMKs2ynPcSBmu9rndbaQxxs1lM40x7gYFc9heP/5kYhhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfb1XTFkrjBel37RFaHdc5hfUOhf1xOldvG/sOmZw02KUQ5T1Our79s89szh42b2TeHF1nXSizXj1lmU3RfEpvenjJFJNtbwovOui9J/z3WiK/y9W2Vxs+q84je9ZgAJ1mn4jpUvvy7JgqIQuNSevQ9y+Wv8vXuKi8+MiAMRX/n2rF11Qnr94oN20Gdhe6pkC2tDb8JGGI7sQtt7a4XBQjJwnhnaz7yRWxHerJE0Jxf93DfzYf/JUrBwoR3TSu6N6F2lHdOqEit0bq8d0+qvYOH05/CgHdPqIFjYck8EdbnovnSlndNqK1jYddMAPYJ3ufEmPxAlv5f2r1fWIHhs4Y+f+Ya+e8sfH8Z7P1g6usjFj/Hj/9NYkmdr6RuieWOficsUZ2nMHELlsgdObywdB2+T3LMvvOTdzcVj6ds9/WT3dXOX8DRisZQ993R5322Z9gRbjNyJnj88bL7/YrOXXXNqLeFtJX+w/+o7B/yzO39YuvXS9K/FoJBC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto3D8haO7L8bFpj+H0y9Mc9WXHf3P7HrRHuJgu57CsT93resBj6/G/uw8F59/2HWZ7Oiff+jc1J9h6fo209FvpNH12cu582k8S7a5XcGZwGk8D9h3rM9Ms27it/njgqKv85hq5YuOcuqB7d/d1rYWFQxVVP9n7vhn9aw9JGHe1R/XEi/qSc1fI97Qblsu9vvqsFzN0y7tAQAAAAAAAAAAAAAAUPIPR8AudC1NyrEAAAAASUVORK5CYII=',
                }}
              />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
              }}
              style={styles.image3}
            />
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
            }}></View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

// import React, {Component} from 'react';
// import {Alert} from 'react-native';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   ScrollView,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import Swiper from 'react-native-swiper';
// var {height, width} = Dimensions.get('window');

// export default class Food extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataBanner: [],
//       dataCategories: [],
//       selectCatg: 0,
//       datafood: [],
//       isLoading: true,
//     };
//   }
//   componentDidMount() {
//     const url = 'http://tutofox.com/foodapp/api.json';
//     return fetch(url)
//       .then(response => response.json())
//       .then(responseJson =>
//         this.setState({
//           isloading: false,
//           dataBanner: responseJson.banner,
//           dataCategories: responseJson.categories,
//           datafood: responseJson.food,
//         }),
//       )
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.show}>
//             <Image
//               resizeMode="contain"
//               style={styles.image}
//               source={{uri: 'http://tutofox.com/foodapp/foodapp.png'}}
//             />
//             <Swiper style={{height: width / 2}} showsButtons={false}>
//               {this.state.dataBanner.map((itemmap) => {
//                 return (
//                   <Image
//                     style={styles.imagebanner}
//                     resizeMode="contain"
//                     source={{uri: itemmap}}
//                   />
//                 );
//               })}
//             </Swiper>
//           </View>
//           <View style={styles.categories}>
//             <Text style={styles.titlecategories}>
//               categories{this.state.selectCatg}
//             </Text>
//             <FlatList
//               horizontal={true}
//               data={this.state.dataCategories}
//               renderItem={({item}) => this._renderItem(item)}
//               keyExtractor={(item, index) => index.toString()}
//             />
//             <FlatList
//               data={this.state.datafood}
//               numColumns={2}
//               renderItem={({item}) => this._renderItemfood(item)}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     );
//   }

//   _renderItemfood(item) {
//     let catg = this.state.selectCatg;
//     if (catg == 0 || catg == item.categories) {
//       return (
//         <TouchableOpacity style={styles.divfood}>
//           <Image
//             style={styles.imagefood}
//             resizeMode="contain"
//             source={{uri: item.image}}
//           />
//           <View style={styles.foodView} />
//           <Text style={styles.textfood}>{item.name}</Text>
//           <Text>food Description and details</Text>
//           <Text style={styles.pricetext}>${item.price}</Text>
//           {/* <TouchableOpacity style={styles.touchcart}> */}
//           {/* onPress={() => this.onClickAddCart(item)}
//             <Text style={styles.textcart}>Add cart</Text>
//             <View style={styles.cartplus} />
//             <Icon name="ios-add-circle" size={30} color={'white'} />
//           </TouchableOpacity> */}
//         </TouchableOpacity>
//       );
//     }
//   }
//   _renderItem(item) {
//     return (
//       <TouchableOpacity
//         onPress={() => this.setState({selectCatg: item.id})}
//         style={[styles.divcategories, {backgroundColor: item.color}]}>
//         <Image
//           style={styles.categoriesimage}
//           resizeMode="contain"
//           source={{uri: item.image}}
//         />
//         <Text style={styles.textcateg}>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   show: {
//     width: width,
//     alignItems: 'center',
//   },
//   image: {
//     height: 60,
//     width: width / 2,
//     margin: 10,
//   },
//   imagebanner: {
//     height: width / 2,
//     width: width - 40,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   categories: {
//     width: width,
//     borderRadius: 20,
//     paddingVertical: 20,
//     backgroundColor: 'white',
//   },
//   categoriesimage: {
//     width: 100,
//     height: 80,
//   },
//   titlecategories: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   divcategories: {
//     backgroundColor: 'red',
//     margin: 5,
//     alignItems: 'center',
//     borderRadius: 10,
//     padding: 10,
//   },
//   textcateg: {
//     fontsize: 22,
//     fontWeight: 'bold',
//   },
//   imagefood: {
//     width: width / 2 - 20 - 10,
//     height: width / 2 - 20 - 30,
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     top: -45,
//   },
//   divfood: {
//     width: width / 2 - 20,
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 5,
//     marginTop: 55,
//     marginLeft: 10,
//     borderWidth: 1,
//     alignItems: 'center',
//     elevation: 8,
//     shadowOpacity: 0.3,
//     shadowRadius: 50,
//   },
//   textfood: {
//     fontWeight: 'bold',
//     fontSize: 22,
//     textAlign: 'center',
//   },
//   pricetext: {
//     fontSize: 20,
//     color: 'green',
//   },
//   foodView: {
//     height: width / 2 - 20 - 90,
//     width: width / 2 - 20 - 10,
//     backgroundColor: 'transparent',
//   },
// });
