import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request } from '../requests';
import LoadingModal from '../Modal';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@expo/vector-icons/Ionicons"

const typeColors = {
  Fire: 'red',
  Flying: 'gray',
  Electric: 'gold',
  Water: 'dodgerblue',
  Grass: 'green',
  Ice: 'skyblue',
  Fighting: 'orange',
  Poison: 'purple',
  Ground: 'sienna',
  Rock: 'darkgray',
  Bug: 'limegreen',
  Ghost: 'indigo',
  Steel: 'lightgray',
  Fairy: 'pink',
  Dragon: 'darkblue',
  Psychic: 'hotpink',
  Normal: 'lightgray',
};


export default function Unique({route}) {
  const [loading, setLoading] = useState(false);
  const { pokemon } = route.params;
  const stats = {
    HP: pokemon.HP,
    Attack: pokemon.Attack,
    Defense: pokemon.Defense,
    "Sp. Atk": pokemon.Sp?.[" Atk"],
    "Sp. Def": pokemon.Sp?.[" Def"],
    Speed: pokemon.Speed,
  };
  const bgColor = typeColors[pokemon.Type1] || 'lightgray';

  const [liked, setLiked] = useState(false);

  const toggleHeart = () => {
    setLiked(!liked);
  };

  const navigation = useNavigation()

  const addFavorite = async (id)=>{
    try {
        setLoading(true)
        await request.post("/pokemon_favorites/", {pokemon_id:pokemon._id.$oid});
        toggleHeart()
    } catch (error) {
        Alert.alert("Algo salio mal al guardar un favorito")
    }finally{
        setLoading(false)
    }
}

  return (
    <SafeAreaView style={[style.background, { backgroundColor: bgColor }]}>
        <LoadingModal visible={loading}/>
        <View style={style.header}>
          <Pressable onPress={()=>{   navigation.goBack();}}>
            <Text style={style.arrowBack}><Ionicons name="arrow-back-circle-sharp" size={30} /></Text>
          </Pressable>
            <View style={style.nameContainer}>
              <Text style={[style.namePokemon, { color: bgColor }]}>{pokemon.Name}</Text>
                        {
                            pokemon.Form != " " && (
                                <Text style={[style.namePokemon, { color: bgColor }]}> - {pokemon.Form}</Text>
                            )
                        }
            </View>
            <Text style={style.idPokemon}>#{pokemon.ID}</Text>
        </View>

        <View style={style.main}> 
            <Pressable>
                <Text style={style.arrow}>{"< "}</Text>
            </Pressable>
            <View style={style.imgPokemon.outborder}>
                <View style={style.imgPokemon}>
                  <Image
                              source={{
                                  uri: pokemon.img,
                              }}
                              style={style.imgPokemon.img}
                          />
                </View>
            </View>
            <Pressable>
                <Text style={style.arrow}>{" >"}</Text>
            </Pressable>
        </View>

            <View style={style.footer}>
                <View style={style.tags}>
                <Text style={[style.tag, { backgroundColor: typeColors[pokemon.Type1] || 'gray' }]}>{pokemon.Type1}</Text>
                        {
                            pokemon.Type2 != " " && (
                                <Text style={[style.tag, { backgroundColor: typeColors[pokemon.Type2] || 'gray' }]}>{pokemon.Type2}</Text>
                            )
                        }
                </View>

                <View style={style.favoriteButton}>
                        <TouchableOpacity onPress={()=>{addFavorite(pokemon._id),  toggleHeart()}}><Text>   <Ionicons
                                          name={liked ? 'heart' : 'heart-outline'}
                                          size={30}
                                          color={liked ? 'red' : 'gray'}/></Text>
                        </TouchableOpacity>
                </View>

                <View style={style.stats}>
                        <Text style={style.titleStats}>Estadísticas base</Text>
                        {Object.entries(stats).map(([key, value]) => (
                        <View style={style.row} key={key}>
                          <Text style={style.stat}>{key}</Text>
                          <View style={style.progressBar}>
                            <View style={[style.progressFill, { width: `${(value / 200) * 100}%` }]} />
                          </View>
                        </View>
                      ))}
                    
                </View>
          </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({

 background: {
  flex: 1,
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
  arrowBack:{
    paddingLeft: 10,
    paddingTop: 20,
    
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
            height: "100%"
  },
  tags:{
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tag:{
    width: 70,
    borderRadius:  10,
    padding: 8,
    textAlign: "center",
    fontSize: 15,
        color: "white",
        
  },
 stats: {
  width: "90%",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "center",
},
titleStats: {
  fontSize: 20,
  padding: 10,
  fontWeight: "bold",
  color: "blueviolet",
  alignSelf: "center"
},
stat: {
  fontSize: 15,
  fontWeight: "bold",
  marginRight: 10,
  width: 80
},
row: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 5,
  paddingHorizontal: 10,
},
progressBar: {
  flex: 1,
  height: 10,
  backgroundColor: '#eee',
  borderRadius: 5,
  overflow: 'hidden',
},
progressFill: {
  height: '100%',
  backgroundColor: 'blueviolet',
},

favoriteButton: {
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
    width: 30,

}
});

