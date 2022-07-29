import axios from "axios";
import { useEffect, useState} from "react";
import {goToPage} from './../../routes/coordinator'




export const useRequestDataGet = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      setIsLoading(true);
      axios.
        get(url)
        .then((res) => {

          setIsLoading(false);
          setData(res.data.trips);


        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, [url]);
 
    return [data, isLoading, error];
  };


  
  export const useRequestDataPost = (url, body, Navigate) => {
       
      axios.post(url, body)
      .then((res) =>{
        localStorage.setItem('token', res.data.token)
        goToPage(Navigate, 'admin/trips/list')
      })
      .catch((err)=>{
        alert(`Não foi possível logar !`)
  
      })




  };