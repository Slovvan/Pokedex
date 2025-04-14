import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "./navigation";

export const request = axios.create({
    baseURL: "https://fz47klnh-5000.usw3.devtunnels.ms"
})

//executes before making a request
// Add a request interceptor
request.interceptors.request.use (async (config) => {
    // if there is a token add it to auth
    const token = await AsyncStorage.getItem("token")
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    // Do something before request is sent
    return config;
  });

// Add a response interceptor
request.interceptors.response.use((response) => response, async (error) =>{

        if (error.response && error.response.status === 401) {
            await AsyncStorage.removeItem("token")
            navigate("App")
        }
    return response;
  });