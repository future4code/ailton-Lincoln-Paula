import axios from 'axios'
import {BASE_URL} from '../constants/urls.js'


 export const  getAllCharacters = (saveData) =>{
        axios.get(`${BASE_URL}/people`)
        .then((res) => saveData(res.data.results))
        .catch((err) => console.log(err))
    
    
        }

 export const getInfoCharacter = (url, saveData) =>{

    axios.get(url)
    
    .then((res)=> saveData(res.data))
    .catch((err)=> console.log(err.response))}



export const getPlanet =(url, saveData) =>{
    axios.get(url)
    
    .then((res) =>  saveData(res.data.name))
      .catch((err) => console.log(err.response))


  }