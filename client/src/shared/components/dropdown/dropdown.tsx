import React, {FC} from 'react';
import styles from './dropdown.module.scss'
import {Contacts} from "../../../types/types";

interface IType {
    contacts: Contacts[]
    idContacts: (id: string) => void
}

const Dropdown: FC<IType> = ({contacts, idContacts}) => {
    return (
       <>
           <div className={styles.dropdown}>
               {
                   contacts?.length>0 ?
                       contacts.map(item =>
                           <div
                               key={item.id}
                               onClick={() => {
                                   console.log(1111)
                                   idContacts(item.id)
                               }}
                               className={styles.item}
                           >{item.name}</div>
                       )
                       : <div className={styles.item}>Совпадений не найдено</div>
               }
           </div>
       </>
    );
};

export default Dropdown;