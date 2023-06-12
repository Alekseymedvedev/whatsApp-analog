import  {useEffect, useState} from "react";


export const useInput = (initialValue: any,func?:(query:number | string)=>void,isClearFocusOut?:boolean) => {
    const [value, setValue] = useState(initialValue)

    const onBlur=()=> {
        if (isClearFocusOut) setValue('')
    }
    const onChange = (e: any) => {
        setValue(e.target.value)
        func && func(e.target.value)
    }

    return {
        value, onChange,onBlur
    }
}