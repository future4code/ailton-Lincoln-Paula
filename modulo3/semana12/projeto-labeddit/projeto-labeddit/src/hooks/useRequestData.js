import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (initialData, url) =>{

const [data, setData] = useState(initialData)
const [userLogin, setUserLogin] = useState('')
const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
    setIsLoading(true)
    axios.get(url, {
        headers:{
            Authorization: localStorage.getItem('login')
        }
    })
    .then((res)=>{

    setData(res.data)
    setIsLoading(false)
    })
    .catch((err)=>{

        setUserLogin(`Você precisa estar logado, para ver as postagens !`)

    })
    },[url])



return [data, userLogin, isLoading, setUserLogin]



}

export default useRequestData

