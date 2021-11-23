import React from 'react';
import {View, Text, StatusBar, ScrollView,ImageBackground,StyleSheet,width,Image,TouchableOpacity} from 'react-native';
// const image = { uri: "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg" };
   
const Home = () => {
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
       <Image style={{width:50,height:50,borderRadius:25,left:330,bottom:40}} source={require('../assets/cart.png')}></Image>
      <View>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVQWZDH9G25dzFwIIncMwoTpoJCGXqGdd_g&usqp=CAU"}} style={styles.image}/> 
      <Text style={styles.text1}>PIZZA</Text>
      <TouchableOpacity> 
      <Image style={{width:50,height:50,borderRadius:25,left:280,bottom:155}} source={require('../assets/plus.png')}/>
      
      </TouchableOpacity>
      </View>
      
      <Text style={styles.text1}>BURGER</Text>
      <TouchableOpacity> 
      <Image style={{width:50,height:50,borderRadius:25,left:280,bottom:155}} source={require('../assets/plus.png')}/>
      
      </TouchableOpacity><Image source={{uri:"https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"}} style={styles.image1}/> 
       
      <Text style={styles.text2}>FRANKIE</Text>
      <TouchableOpacity> 
      <Image style={{width:50,height:50,borderRadius:25,left:280,bottom:250}} source={require('../assets/plus.png')}/>
      
      </TouchableOpacity>
      <Image source={{uri:"https://www.spiceupthecurry.com/wp-content/uploads/2019/09/frankie-recipe-1.jpg"}} style={styles.image2}/>
     
      <Text style={styles.text3}>MANCHURIA</Text>
      <TouchableOpacity> 
      <Image style={{width:50,height:50,borderRadius:25,left:280,bottom:350}} source={require('../assets/plus.png')}/>
      
      </TouchableOpacity>
      <Image source={{uri:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"}} style={styles.image3}/>  
    </View> 
      </View>

      <ScrollView>
       
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
        </View>
      </ScrollView>

    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: "center",
    width:100,
    height:100,
    borderRadius:50,
    flexDirection:'row',
    backgroundColor:'black'
  },
  image1: {
    justifyContent: "center",
    width:100,
    height:100,
    borderRadius:50,
    flexDirection:'row',
    backgroundColor:'black',
    bottom:220
  },
  image2: {
    justifyContent: "center",
    width:100,
    height:100,
    borderRadius:50,
    flexDirection:'row',
    backgroundColor:'black',
    bottom:320
  },
  image3: {
    justifyContent: "center",
    width:100,
    height:100,
    borderRadius:50,
    flexDirection:'row',
    backgroundColor:'black',
    bottom:430
  },
  text: {
    color: "black",
    fontSize: 25,
    lineHeight: 54,
    fontStyle: "italic",
    textAlign: "center",
  // bottom:300,
  flexDirection:'row',
  // backgroundColor:'grey'
    left:120
  },
  text1: {
    color: "black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    bottom:90,
    left:120
  },
  text2: {
    color: "black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    bottom:180,
    left:120
  },
  text3: {
    color: "black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    bottom:280,
    left:120
  }
});

export default Home;