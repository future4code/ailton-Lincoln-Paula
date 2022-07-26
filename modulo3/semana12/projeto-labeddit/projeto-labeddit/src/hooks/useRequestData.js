import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (initialData, url) =>{

const [data, setData] = useState(initialData)
const [userLogin, setUserLogin] = useState('')

    useEffect(()=>{
    
    axios.get(url, {
        headers:{
            Authorization: localStorage.getItem('login')
        }
    })
    .then((res)=>{

    setData(res.data)

    })
    .catch((err)=>{

        setUserLogin(`Você precisa estar logado, para ver as postagens !`)

    })
    },[url])



return [data, userLogin]



}

export default useRequestData

