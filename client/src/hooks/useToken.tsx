import {useEffect, useState} from "react";
import {useAppSelector} from "./useReduser";


export const useToken = (isAuth?:boolean) => {
    const[id,setId]=useState<string>('')
    const[token,setToken]=useState<string>('')
    useEffect(() => {
           setId(localStorage.getItem('idInstance') as string)
           setToken(localStorage.getItem('apiTokenInstance') as string)
    }, [isAuth])
    return{
        id,token
    }
}

