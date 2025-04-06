import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function List() {

  const navigate = useNavigation()

  return (
    <View style={style.container}>
        <Pressable  onPress={() => navigate.navigate('Unique')}>
        <View style={style.card}> 
            <View style={style.infoPokemon}>
                <Text style={style.namePokemon}>Charizard</Text>
                <Text style={style.idPokemon}>#6</Text>
                <View style={style.tags}>
                    <Text style={style.typePokemon.fuego}>Fuego</Text>
                    <Text style={style.typePokemon.volador}>Volador</Text>
                </View>
            </View>
            <View style={style.imgPokemon}>
                <Image style={style.imgPokemon.img} source={{uri:"https://th.bing.com/th/id/OIP.CTq0K96bmxplVLHVASbo0AHaHJ?rs=1&pid=ImgDetMain"}}></Image>
            </View>
        </View>
        </Pressable>
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    display: "block",
    justifyContent: "center",
    margin: 10,
  },
  card:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "'space-evenly'",
    padding: "10"
  },
  infoPokemon:{
    backgroundColor:" rgb(255, 255, 255)",
    borderRadius: "15px 0 0 15px",
    width: "30%"
  },
  namePokemon:{
    fontSize: 25,
    color: "black",
    margin: 5
  },
  idPokemon:{
    fontSize: 20,
    color: "black",
    margin: 5
  },
  tags:{
    margin: 5
  },
  typePokemon:{
    margin: "2",
    borderRadius: 15,
    padding: "2",
    textAlign: "center",
    width: "fit-content",
    fuego:{
        margin: 2,
        borderRadius:  15,
        padding: 2,
        textAlign: "center",
        width: "fit-content",
            color: "white",
            backgroundColor: "red"
            
        },
        volador:{
            margin: 2,
            borderRadius:  15,
            padding: 2,
            textAlign: "center",
            width: "fit-content",
            color: "white",
            backgroundColor: "gray"
        }
  },
  imgPokemon:{
    borderRadius: "0px 15px 15px 0px",
    width: "70%",
    backgroundColor: "red",
    textAlign: "center",
    img:{
        width: 100,
        height: 100,
        alignItems: "center"
    }
  },

});
