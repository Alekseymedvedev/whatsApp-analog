import  {useEffect, useState} from "react";


export const useInput = (initialValue: any,func?:(query:number | string)=>void) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    // useEffect(() => {
    //     if (errorInput ) {
    //         setError(errorInput)
    //     }
    // }, [errorInput])

    const onChange = (e: any) => {
        setValue(e.target.value)
        // if (e.target.value !== '' && !noValidate) {
        //     setError(false)
        // }
        func && func(e.target.value)
    }

    return {
        value, onChange
    }
}