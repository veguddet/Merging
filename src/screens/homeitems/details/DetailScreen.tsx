
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import COLORS from '../../Home/colors';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import cheese1 from '../../../assets/FoodImages/cheese1.png';
import veggies from '../../../assets/FoodImages/veggies.png';
import extracrust from '../../../assets/FoodImages/extracrust.png';
import caloriesicon from '../../../assets/FoodImages/caloriesicon.png';
import {connect} from 'react-redux';
import {AddData} from '../../../redux/cartAction';

const DetailsScreen = ({navigation, route, addItem}: any) => {
  const [checked, setChecked] = React.useState(false);
  const [checCheese, setCheckCheese] = React.useState(false);
  const [counter, setCount] = React.useState(0);
  const [proteins, setProteins] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fats, setFats] = React.useState(0);
  const [isveggies, setIsVeggies] = React.useState(false);
  const [isExtraCrust, setIsExtraCrust] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [productCount, setProductcount] = React.useState(1);

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
    navigation.navigate('Home1');
  };
  // const Increasecount = () => {
  //   setProductcount(productCount + 1);
  //   setCarbs(carbs * 2);
  //   setFats(fats * 2);
  //   setProteins(proteins * 2);
  //   setAmount(amount * productCount);
  //   setCount(counter * 2);
  //   // setAmount(amount*productCount)
  // };
  // const Decreasecount = () => {
  //   setProductcount(productCount - 1);
  //   setCarbs(carbs / 2);
  //   setFats(fats / 2);
  //   setProteins(proteins / 2);
  //   setCount(counter / 2);
  //   setAmount(amount / productCount);
  // };

  console.log(counter);
  const Route = route.params;
  return (
    <ScrollView>
      <View style={style.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Image style={style.image} source={{uri: Route.image}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 8,
          }}>
          <Image source={caloriesicon} style={{height: 50, width: 40}} />
          <Text style={style.text}>Total Calories:{counter}</Text>
        </View>
      </View>

      <View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 7,
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
              {/* Rs{Route.price} */}
              Rs{amount}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 19,
              marginTop: 10,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Nutritional Info
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            <Text style={style.nutritionsText}>Carbs:{carbs}</Text>
            <Text style={style.nutritionsText}>Proteins:{proteins}</Text>
            <Text style={style.nutritionsText}>Fats:{fats}</Text>
          </View>
        </View>
        <View style={{flex: 1, paddingTop: 5}}>
          <View style={style.checkboxbiew}>
            <Image source={cheese1} style={style.Icon} />
            <Text style={style.checkboxText}>Extra Cheese</Text>

            <Checkbox
              status={checCheese ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckCheese(!checCheese);
                {
                  checCheese ? setCount(counter - 50) : setCount(counter + 50);
                  checCheese ? setCarbs(carbs - 10) : setCarbs(carbs + 10);
                  checCheese
                    ? setProteins(proteins - 10)
                    : setProteins(proteins + 10);
                  checCheese ? setFats(fats - 10) : setFats(fats + 10);
                  checCheese ? setAmount(amount - 70) :setAmount(amount + 70);
                }
              }}
            />
          </View>

          <View style={style.checkboxbiew}>
            <Image source={veggies} style={style.Icon} />
            <Text style={style.checkboxText}>Extra Veggies</Text>
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
                }
              }}
            />
          </View>
          {/* Line Separtaor */}
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: '#CACACA'}} />
        <View style={style.checkboxbiew}>
          <Image source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSFRUSFhIYGBUaHBUeFhgcGRgWHxgZGBgaGRoaGBgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjYrISs0NDExNDE0NDE2MTQ0NDQ0NDQ0MTRAPzE0NDE0Nj86NDE1NDQ0MTQ0NDExNEAxNDQ0Mf/AABEIALMBGQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADUQAAEDBAAEBQMDBQABBQAAAAEAAhEDEiExBBMiQWFxgaHBBTJRkbHxBhRC0fDhFTNScrL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAiEQEBAQACAgICAwEAAAAAAAAAAQIDERIxBCETQTJCcVH/2gAMAwEAAhEDEQA/APsLngggHKrpNgycBRtMjJ0EXvuwNoJW6ojO0aRtEHBSs6N9/hRzb8jSBXsJJIGFc5wIInKUVAMHYSCmRnsMoDSaQZOAjW6ojKjnBwgbUZ0b7oDSNog4Vb2EkkDCZ7bsjyTCoGiDsIGc4QROYVdNpBk4CApkGewyjUqgiJjzwgNXqiMo0jaIOFTTrtbMuHomc4OOCP1UeUv7WubP0L2kkkCQrS4RE5hK14aIOwkFMgz238qVUptIMkQE1Y3RGUXODhA2gwWZPdAaRtEHCSo0kkgSEz235CLXhog7CBi4RE5hVU2kEEiAjyzM9t/KZzw4WjaAVTcMZUpG0Zwg0WZKjhfkIBUaSSQJCtvEROYSteGi07H8peWZnttAKbSCCRATVTcMZRc8OEDZStFmSgNE2zOEtRpJkCQmeL8jsi1waIO0DBwiJzCqY0ggkQETTMz22mc8OEDZQSqbhAyhR6ZnCjG2ZKjxfrsgWo0kyMhLYfwVa1waIO0ecPFAnNuxG1LLOrfsmdTAyNhBrrsHSAff4R67/hG+zG/ZR3Trv8KMbdk7QDlXdUxKPNnEbwldULcDQTmmBnuEC2W9Uz7I/f4R6oNfcYOkX9Gu6AXW433/AAoWT1THwiAHCSuXxvFzgHA14qm9zM7rpx8d3eov4n6h2b+v+lzn1Se6z1KqzPrrDrk1q/b0McWcz6bjVRbW8VzP7hO2sufa/jHapcWe+V06fEB4gDePKV5llVbeH4gtIIWjj5rPq+mfl4JfvPt27LeqZ9lJvxqPVLQrX+XdO4W5HdbJZZ3GGyy9ULrMb7/hTl3dUxPr4IsF+Slc8tMDQUoNzf8AGPD4Qst6pmPTwTcsb77+UjXlxtOkBm/Go9VJsxufRF4syFGC/JQCy7qmJ9fBHm/4x4fCVzy02jQ/lPyxvvv5QLy7eqZj08Ebr8a90rHlxg6KZ4syEAmzG59FLLuqY90Wi7J7IOcWmBpAebHTHh8Icu3qmYTcsHPffyka8uMHRQG6/Gu/5UmzG59EXC3I8lGi7fZALLuqY90f7fx9kHOLTA0hzz4IA1xJAJwrKogSMFM5wIIBVVJtpk4CA0eqZzpCqbTAwmrdURnaNI2iDgoGY0EAkKljySBOFHsJJIGFc5wIInKBarYEjBS0eqZyhSbaZOAjxDhE9hMoMn1Kvb0jEjK4VesruKrSSVy6z5Xncm/LXb1OLHhnoKlZUOeUj3qlz1zdWgPTsesbXq5rkS2tetNJ6wMetDHIO5wPEWna69E3TOV5mg9d3hahc0DZH7dlq+Pv+tYfk8f9o01DaYGE9NoIBIkoUTaIOElRpJJAkLWxgHmYnE/KtqNABIEFEuEROYVVNpBBIgIDRNxM5UrG3WEaxuGMqUTaM4QNTaCASJKqvMxOJ+UajSSSBIVt4iJzCAVGgAkCCkpG4wcoU2kEEiAmrG4YygFY2xGE9NoIkiSlom2ZwlqNJMgSEALzMTiflWvYACQIKIcIicwqqbSCCRAQSkbjByjW6YjCaqbhAyhR6ZnCBqbQRJElPYPwFRUaSZAkJOWfwgsbTIydBF77sDaHNuxG1LLOrfsgjOjff4Uc2/I0p9/hHrv+Eb7Mb9kBFQDB2EgpkZ7DKPKu6piUebOI3hBHODhA2sX1AlrSPzHtn/S2WW9Uz7Lk/WK1xA/A/dcubXjmu3Dny3HH4l659R60cQ9YKjl570yVHqguQqOVTnIlder2OWNpVrHIluY5aKb1hY5aqTlXtPTdSeu19Lr2uzorz7H6XT4SpBBV8a8dSuXJjyxY9G9t+Qi14aIOwlDrR+Zz+FCy7qmJ/heo8gOWZntv5TueHCBtKa2P/KpbUDTKrdZi0zq/pc0W5KjhdkKp3EByelWASbyXGljXhog7H8peWZnttS0OMzHgjzf8Y8PhWl7VFzw4QNlK0WZKnLt6pmPTwRuvxr3QR4vyOyLXBog7SzZjc+ill3VMe6CGmZnttM54cIGyhzY6Y8PhDl29UzCAsbZkqPF+uyF1+Nd/ypNmNz6IGa4NEHaPOHiksu6pj3R/t/H2QF1MDI2EGuuwdJGuJIBOFZVECRgoA7p13+FGNuydoUeqZzpCqbTAwgjqhbgaCc0wM9wmY0EAkKljySBOEBa+4wdLhfWMOcP+0vQVWwJGCvN/VT1uWf5P8Z/rT8X+d/xxq5WGoVs4hYaixPRUVCqXOhWOVLkSZr0zHqkFOHqKmNTHq5tRYOYlNdVqzrs4hdDg+JyF5dtcuIaJJJAAHclew+j/AE7lgOfl5/RvgPyfFWzm2qcmpmfb0FOtLRIyAB+FH1vFZi9JctfnbOmDwkva8vSylChciRlQPVTnpblFqZGxlZaGPBXMa9Xsemd2K6xK6IeSbTopni3IWelU/VX0jJIOVpxryjNrPjRaLsnsg5xaYGlKxtiMJ6bQRJElXUDlg577+UjXlxg6KBeZicT8q17AASBBQK4W5Hko0Xb7JaRuMHKNbpiMII5xaYGkOefBWU2giSJKewfgIFc4EEAqqk20ycBFtMjJ0EXvuwNoJW6ojO0aRtEHBSs6N9/hRzb8jSBXsJJIGFc5wIInKUVAMHYSCmRnsMoJTbaZOAuH9ab1k9jH7LvOcHCBtcn6xRIAPn/3uuPPO8u/xtdbeY4gLA8Lp8S1c6oFgemy1FS5X1FS5EqikJVhVTgoqYDnKl74TOWz6DwHPqi4dDIc7xP+LfWJ8gok7Wt6nbu/0z9LsaKzx1uHSD/g09/M/t6r0d0JJVbnrvmdRj1q6vawvQD1Q56rNRW7V8Ws1Ujqiy8xS9R2nxab0Q5Zw5WNco7T00NKtas7StLCpiKvY5bGOLmxtc6Vr4V8FdePXVceTPca6JtmcJajSTIEhF4vyOyZrg0QdrUyGDhETmFVTaQQSICJpmZ7bTOeHCBsoJVNwgZQo9MzhRjbMlR4v12QLUaSZAkJOWfwrmuDRB2jzh4oE5t2I2pZZ1b9kzqYGRsINddg6QD7/CPXf8I32Y37KO6dd/hRjbsnaAcq7qmJR5s4jeErqhbgaCc0wM9wgWy3qmfZUcYzmNOMjI7yrmvuMHSZ/Truo1nynVTm3NljxvFMXLrtXpfqnDWmY6TMfIXB4hi8zWbm9V6+NTWZY5rws7lpeFneoXVuVblYUjlFTGaoV7L+muE5dFpP3P6z6/b7R7rx4p3uaz/5OaP1ML6GwQABoaVsTuqc2up0L3LM96eu9Yn1F0rPFj3qsvWcvQvULNNyZr1mDla0oNLXKxpWdhVrUGljlcx6yNKuYUVaQ5a+H2FjYtvDBdMe1N+m2bMbn0Usu6pj3RaLsnsg5xaYGltYR5sdMeHwhy7eqZhNywc99/KRry4wdFAbr8a7/lSbMbn0RcLcjyUaLt9kAsu6pj3R/t/H2Qc4tMDSHPPggDXEkAnCsqiBIwUznAggFVUm2mTgIDR6pnOkKptMDCat1RGdo0jaIOCgZjQQCQqWPJIE4UewkkgYVznAgicoFqtgSMFLR6pnKFJtpk4Cat1RGUFPG0Q8WnW/I/leQ+o8M6m6HDyP5H5C9tSMCDgrJx3CioCHNkdj+PEFcObimvue2jh5ri9X0+e1mrI8L0H1T6I9kuZ1t8PuHm3v6LztR0LDrOs/Vj0c6zud5pSq3qPeqX1FV0i7gf8A3qX/AN2f/oL3dYwvm7K5D2lolwLSB4gz8L6M9wc0OGiAR6iV1x6cOb3GLiHrE9611mrK9ilRVcmBUDFY1qCNCuYErWq1gRU7ArWhK0KxoRY7QrWBI0K+mxFV1Ji6fCMWSgxby0WgDK08Wfvtn5tfXQ1jbEYT02giSJKWibZnCWo0kyBIWhmAvMxOJ+Va9gAJAgohwiJzCqptIIJEBBKRuMHKNbpiMJqpuEDKFHpmcIGptBEkSU9g/AVFRpJkCQk5Z/CCxtMjJ0EXvuwNoc27EbUss6t+yCM6N9/hRzb8jSn3+Eeu/wCEb7Mb9kBFQDB2EgpkZ7DKPKu6piUebOI3hBHODhA2ozo33Qst6pn2R+/wj1QB7bsjyTB4Ag7CW6zG+/4U5d3VMSgqqUDvsuB9W+itqzjP50f1XpebOI3hA07c79lTWJpfO7n0+UfUf6ZrtPS8x5Bcl/0asD1Sfb9l9pdRD+0e6zVvp7Bi2fZcrwf8aZ8m/t8n4fgnt7Fev+hViWct22zb4t/HmP28l6B/0ZpyAsx+mwcYPYqv46n80rFWYsb2Lr8RRIGQsLmLjqeN+3TN7n0yBiYNV3LUDFHaeitCsaEQxWNanZ0DQrWtQY1WtUdp6Mxq1U2qqgwuMNEn/v0XT4aiG7Eu9guuMXV+nPk3Mz79noMER3OvBXNFuSjy7eqZj08ELr8a91szJJ1GHWrb3ReL8jsi1waIO0s2Y3PopZd1THupQhpmZ7bTOeHCBsoc2OmPD4Q5dvVMwgLG2ZKjxfrshdfjXf8AKk2Y3PogZrg0Qdo84eKSy7qmPdH+38fZAXUwMjYQa67B0ka4kgE4VlUQJGCgDunXf4UY27J2hR6pnOkKptMDCCOqFuBoJzTAz3CZjQQCQqWPJIE4QM19xg6Rf0a7o1WwJGClo9UzlAWNuyUrqhbgaClU2mBhWsaCASJKBTTAz3GUrHF2DpK1xJAnEq2o0ASBBQK4W67qMF+ShR6pnKFU2mBhBHvLTA0EzqIifVMxgIBIkqoOMxOJQZ3MuMLPX+nsd2IP5C6lRoAkCFXSbM91S4l9r53Z6efrfT3NyHtP6g/KwVagZ92F6niKHZUP+lteMhcdcM/TRnnv7eXP1OkN1GDzcAl/9Yo9qjT5Gf2XYf8A05TcctG/wtLP6dpMEhg/Rc/wadPz5cShxoqfY1zvG0gfq6F1uE4Quy7Hgurw3BtGICuey2IwuueGT25b+Rb6U0RZgAALUKY332jTaCASFVcZicSu8nTNb2ZryTB0UXizITVGgAkCCkpG4wcqUC0XZPZBzi0wNKVjbEYT02giSJKAcsHPffyka8uMHRQLzMTiflWvYACQIKBXC3I8lGi7fZLSNxg5RrdMRhBHOLTA0hzz4Kym0ESRJT2D8BArnAggFVUm2mTgItpkZOgi992BtBK3VEZ2jSNog4KVnRvv8KObfkaQK9hJJAwrnOBBE5SioBg7CQUyM9hlBKTbTJwE1bqiMqOcHCBtRnRvugNI2iDhVvaSSQJCZ7bsjyTCoGiDsIGc4EETmFVTbBkiAoKZBnsMp3ODhA2gFbqiMo0jaIOEGCzfdB7bsjyQCo0kkgSFaXCInMJWvDRB2EgpkGe2/lBKbSDJEBNWN0RlFzg4QNoMFmT3QGkbRBwkqNJJIEhM9t+Qi14aIOwga8RE5hVU2kEEiAjyzM9t/KZzw4WjaAVTcMZUpG0Zwg0WZKjhfkIBUaSSQJCtvEROYSteGi07H8peWZnttAKbSCCRATVjcMZRc8OEDZStFmSgNE2zOEtRpJkCQmeL8jsi1waIO0DBwiJzCqptIIJEBE0zM9tpnPDhA2UEqm4QMoUemZwoxtmSo8X67IFqNJMgSEnLP4VzXBog7R5w8UD1NHyVHD79FFEDcR29fhNQ16qKIKauytL9HyKCiCnh9puI7eqiiBqGvVU1fuKiiDS/7T5H9lnofd+qiiB+I7I8Pr1/0oogqrfcVpOj5fCCiCih9w9VZxGgoognD6Pmq633H/uyiiDR29PhZ6P3D1/ZBRBbxGh5qcPo+aiiCut9x9P2Wj/H0+EFEFFH7h6/srOI0PNRRBOH0VXX+4+iiiDQPt9PhZqP3BRRBbxGh5/7Q4bRUUQJX+79EiiiD//Z'}} style={style.Icon} />
          <Text style={style.checkboxText}>Add Egg</Text>
          <Checkbox
            status={isExtraCrust ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsExtraCrust(!isExtraCrust);
              {
                isExtraCrust
                  ? setCount(counter - 100)
                  : setCount(counter + 100);
                isExtraCrust ? setCarbs(carbs - 30) : setCarbs(carbs + 30);
                isExtraCrust
                  ? setProteins(proteins - 10)
                  : setProteins(proteins + 10);
                isExtraCrust ? setFats(fats - 30) : setFats(fats + 30);
              }
            }}
          />
        </View>

        {/* {Add to cart button code} */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          {/* <TouchableOpacity style={style.borderBtn} onPress={Decreasecount}>
            <Text style={style.borderBtnText}>-</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {productCount}
          </Text>
          <TouchableOpacity style={style.borderBtn} onPress={Increasecount}>
            <Text style={style.borderBtnText}>+</Text>
          </TouchableOpacity>
          */}
          <TouchableOpacity style={style.buyBtn} onPress={handleAddData}>
            <Text
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
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
    addItem: (product: any) => dispatch(AddData(product)),
  };
}
export default connect(null, mapDispatchToProps)(DetailsScreen);

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 270,
    paddingTop: 20,
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
    height: 40,
    width: 40,
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
  checkboxbiew: {
    flexDirection: 'row',
    paddingTop: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.6,
    paddingBottom: 10,
    paddingRight: 10,
  },
  checkboxText: {
    paddingLeft: 10,
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 0.4,
  },
  calories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});