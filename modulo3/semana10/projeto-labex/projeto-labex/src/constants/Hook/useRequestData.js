import axios from "axios";
import { useEffect, useState} from "react";
import {goToPage} from './../../routes/coordinator'
import {useNavigate} from 'react-router-dom'


// export const Navigate = useNavigate()

export const useRequestDataGet = (url, requisitionType) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      // console.log(requisitionType)
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
      
    console.log('oi')

    
      axios.post(url, body)
      .then((res) =>{
        console.log(res)
        localStorage.setItem('token', res.data.token)
        goToPage(Navigate, 'admin/trips/list')
      })
      .catch((err)=>{
  
        console.log(err.message)
        alert(`Não foi possível logar !`)
  
      })




  };