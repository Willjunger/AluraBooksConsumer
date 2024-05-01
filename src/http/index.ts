import axios, { AxiosError } from "axios";

import { history } from "../App";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers:{
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent (ou "fazer alguma coisa antes que a requisição seja enviada")
    const token = sessionStorage.getItem('token');
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, function (error: AxiosError) {
    if (error.response?.status === 401) {
        history.push('/') // aqui estamos navegando de forma progamática, enviando o usuário para onde queremos.
        return Promise.reject()
      }
    return Promise.reject(error);
    });

export default http;