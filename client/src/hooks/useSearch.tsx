import {useInput} from "./useInput";
import {useState} from "react";
import {Contacts} from "../types/types";


export const useSearch = (data:Contacts[])=>{
    const [contacts, setContacts] = useState<Contacts[]>()
     useInput('', (query: number | string) => {
        const editedQuery = query.toString().split('')

        if (editedQuery[0] === '+') {
            editedQuery.splice(0, 1)

        } else if (editedQuery[0] === '8') {
            editedQuery.splice(0, 1, '7')
        }

        const arr = data?.filter(item => item.id.toLowerCase().includes(editedQuery.join('').toLowerCase()))

        setContacts(arr)
         console.log()
    })

    return contacts
}