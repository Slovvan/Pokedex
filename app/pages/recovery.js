import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Recovery() {

  const {navigate} = useNavigation()

  return (
    <View style={style.container}>
      <View>
        <Image  source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"}}
        width={300}
        height={300}></Image>

        <View>
          <Text style={style.title}>Recuperación de Contraseña</Text>
          <Text style={style.label}>Correo</Text>
          <TextInput style={style.Input} placeholder='Escribe tu Correo'></TextInput>
          <Text style={style.label}>Nueva Contraseña</Text>
          <TextInput style={style.Input} placeholder='Escribe una Contraseña'></TextInput>
          <Text style={style.label}>Confirmar Contraseña</Text>
          <TextInput style={style.Input} placeholder='Vuelve a Escribir tu Contraseña'></TextInput>
          <Pressable style={style.send} onPress={() => navigate('App')}>
            <Text style={style.send.textButton}>Recuperar Contraseña</Text>
          </Pressable>
        </View>
        <View style={style.containerFooter}>7
        <Pressable style={style.send} onPress={() => navigate('App')}>
          <Text style={style.containerFooter.texts}>Cancelar</Text>
        </Pressable>
        </View>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 2
  },
  send:{
    backgroundColor: "red",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    textButton:{
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    }
  },
  title:{
    fontSize: 38,
    fontWeight: "bold",
  },
  Input:{
    borderRadius: 10,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    width: "auto",
    height: "auto"
  },
  containerFooter:{
    alignItems: "center",
    texts:{
      fontSize: 15,
      margin: 5
    }
  },
});
