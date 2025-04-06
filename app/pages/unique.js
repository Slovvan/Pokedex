import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Unique() {

  const navigate = useNavigation()

  return (
    <View style={style.background}>

        <View style={style.header}>
            <Text style={style.arrow}>{"< "}</Text>
            <View style={style.nameContainer}>
                <Text style={style.namePokemon}>Charizard</Text>
            </View>
            <Text style={style.idPokemon}>#6</Text>
        </View>

        <View style={style.main}> 
            <Pressable>
                <Text style={style.arrow}>{"< "}</Text>
            </Pressable>
            <View style={style.imgPokemon.outborder}>
                <View style={style.imgPokemon}>
                    <Image style={style.imgPokemon.img} source={{uri:"https://th.bing.com/th/id/OIP.CTq0K96bmxplVLHVASbo0AHaHJ?rs=1&pid=ImgDetMain"}}></Image>
                </View>
            </View>
            <Pressable>
                <Text style={style.arrow}>{" >"}</Text>
            </Pressable>
        </View>

            <View style={style.footer}>
                <View style={style.tags}>
                    <Text style={style.tag.fuego}>Fuego</Text>
                    <Text style={style.tag.volador}>Volador</Text>
                </View>

            <View style={style.stats}>
                <Text style={style.titleStats}>Estadisticas base</Text>
                <View style={style.row}>
                    <Text style={style.stat}>HP</Text>
         
                </View>

                <View style={style.row}>
                    <Text style={style.stat}>ATK</Text>

                </View>

                <View style={style.row}>
                    <Text style={style.stat}>DEF</Text>
                 
                </View>

                <View style={style.row}>
                    <Text style={style.stat}>S. ATK</Text>
                 
                </View>

                <View style={style.row}>
                    <Text style={style.stat}>S. DEF</Text>

                </View>

                <View style={style.row}>
                    <Text style={style.stat}>SPD</Text>
                
                </View>
            </View>
            </View>
    </View>
  );
}

const style = StyleSheet.create({

 background: {
    backgroundColor: "red",
    height: "100vh",
    width: "100%"
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 10
  },

  namePokemon:{
    fontSize: 20,
    padding: 20,
    color: "red",
    backgroundColor: "white",
    clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)"
  },

  idPokemon:{
    padding: 20,
    fontSize: 20,
    color: "white",

  },

  main:{
    marginTop: "100",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  imgPokemon:{
    margin: 50,
    borderRadius: "100%",
    backgroundColor: "black",
    img:{
        width: 200,
        height: 200,
        alignItems: "center"
    },
    outborder:{
        borderRadius: "100%",
        backgroundColor: "white",
        
    }
  },
  arrow:{
    color: "white",
    fontSize: 50
  },

  footer:{
    marginTop: -50,
    paddingTop: 30,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center"
  },
  tags:{
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tag:{
    fuego:{
    width: 50,
    borderRadius:  10,
    padding: 8,
    textAlign: "center",
    fontSize: 10,
        color: "white",
        backgroundColor: "red"
        
    },
    volador:{
    width: 50,
    borderRadius:  10,
    padding: 8,
    textAlign: "center",
    fontSize: 10,
        color: "white",
        backgroundColor: "gray"
    }
  },
  stats:{
    width: "80%",
    flexDirection: "column"
  },
  titleStats:{
    fontSize: 20,
    fontWeight: "bold",
    color: "blueviolet",
    margin: "auto"
  },
  stat:{
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10
  },
  row:{
    margin: "auto",
    padding: 10
  },


});
