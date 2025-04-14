import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { request } from '../requests';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const onchange = (target, value)=>{
    const nData = data

    nData[target] = value
    setData(nData)
  }

  const submit = async ()=>{
    console.log(data)
    try {
      setLoading(true)

      const res = await request.put("/users/update", data)
      const {token} = res.data
      AsyncStorage.setItem("token", token)

      navigate('App')
    } catch (error) {
      console.log(error)
      Alert.alert("Ocurrió un error", "Datos insuficientes", )
    }
      setLoading(false)
  }


  const {navigate} = useNavigation()
  return (
    <View style={style.container}>
      <View>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"}}
        width={300}
        height={300}></Image>

        <View>
          <Text style={style.title}>Actualizar Datos</Text>
          <Text style={style.label}>Correo</Text>
          <TextInput style={style.Input} onChangeText={(text)=>{onchange("email", text)}}  placeholder='Escribe tu Correo'  autoCapitalize='none'></TextInput>
          <Text style={style.label}>Nombre</Text>
          <TextInput style={style.Input} onChangeText={(text)=>{onchange("name", text)}} placeholder='Escribe tu Nombre' autoCapitalize='none'></TextInput>
          <Text style={style.label}>Contraseña</Text>
          <TextInput style={style.Input} onChangeText={(text)=>{onchange("password", text)}} placeholder='Escribe una Contraseña' secureTextEntry></TextInput>
          <Text style={style.label}>Confirmar Contraseña</Text>
          <TextInput style={style.Input} placeholder='Vuelve a Escribir tu Contraseña' secureTextEntry></TextInput>
          <Pressable style={style.send} onPress={() => submit()}>
            <Text style={style.send.textButton}>Actualizar</Text>
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
