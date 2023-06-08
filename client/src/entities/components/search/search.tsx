import React, {FC, useState} from 'react';
import styles from './search.module.scss'
import {useInput} from "../../../shared/hooks/useInput";
import Input from "../../../shared/UI/input/input";
import {useGetContactsQuery} from "../../../store/api/contactsApi";
import Dropdown from "../../../shared/components/dropdown/dropdown";
import {Contacts} from "../../../types/types";
import SearchIcon from "../../../shared/assets/images/icon/searchIcon";

interface IType {
    idContacts?: (id: string) => void
}

const Search: FC<IType> = ({idContacts}) => {
    const {data} = useGetContactsQuery('')

    const [contacts, setContacts] = useState<Contacts[]>()
    const search = useInput('', (query: number | string) => {
        const editedQuery = query.toString().split('')

        if (editedQuery[0] === '+') {
            editedQuery.splice(0, 1)

        } else if (editedQuery[0] === '8') {
            editedQuery.splice(0, 1, '7')
        }

        const arr = data?.filter(post => post.id.toLowerCase().includes(editedQuery.join('').toLowerCase()))

        setContacts(arr)
    })
    return (
        <div className={styles.search}>
            <Input dataInput={search} icon={<SearchIcon/>}/>
            {
                (contacts && search.value !=='') && <Dropdown contacts={contacts} idContacts={idContacts}/>
            }

        </div>
    );
};

export default Search;