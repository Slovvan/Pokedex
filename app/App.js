import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';
import { request } from './requests';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const onchange = (target, value)=>{
    const nData = data

    nData[target] = value
    console.log(nData)
    setData(nData)
  }

  const submit = async ()=>{
    try {
      setLoading(true)
      const res = await request.post("/users/login", data)
      const {token} = res.data
      AsyncStorage.setItem("token", token)

      navigate('Tabs')
    } catch (error) {
      console.log(error)
      Alert.alert("Ocurrió un error", "El Usuario o la Contraseña no son correctos", )
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
          <Text style={style.title}>Iniciar sesion</Text>
          <Text style={style.label}>Correo</Text>
          <TextInput style={style.Input} onChangeText={(text)=>{onchange("email", text)}} placeholder='Escribe tu Correo' autoCapitalize='none'></TextInput>
          <Text style={style.label}>Contraseña</Text>
          <TextInput style={style.Input} onChangeText={(text)=>{onchange("password", text)}} placeholder='Escribe tu Contraseña' secureTextEntry></TextInput>
          <Pressable style={style.send}  onPress={() => submit()} disabled={loading}>
            <Text style={style.send.textButton}>Enviar</Text>
          </Pressable>
        </View>
        <View style={style.containerFooter}>
          <TouchableOpacity  onPress={() => navigate('Recovery')} >
          <Text style={style.containerFooter.texts}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={style.containerFooter.texts}>Registrate</Text>
          </TouchableOpacity>
            
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
